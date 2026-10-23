import {
   CanvasTexture,
   Color,
   Mesh,
   PerspectiveCamera,
   PlaneGeometry,
   Raycaster,
   Scene,
   ShaderMaterial,
   SRGBColorSpace,
   Texture,
   TextureLoader,
   Vector2,
   Vector4,
   WebGLRenderer,
} from 'three';

export type DeckProject = { slug: string; image: string | null };

export type DeckColors = {
   bg: string;
   line: string;
   sunken: string;
   lineStrong: string;
   muted: string;
};

export type Deck = {
   attach: (container: HTMLElement) => void;
   detach: (container: HTMLElement) => void;
   select: (index: number) => void;
   tilt: (x: number, y: number) => void;
   hover: (on: boolean) => void;
   onPick: (handler: (index: number) => void) => void;
};

const VISIBLE = 3;
const ASPECT = 33 / 20;
const FOV = 30;
const PEEK = 9;
const PEEK_FAN = 14;
const STEP_Z = 70;
const STEP_Z_FAN = 120;
const EASE = 0.14;

const vertexShader = `
   uniform vec4 uCrop;
   varying vec2 vUv;
   varying vec2 vFrame;
   void main() {
      vFrame = uv;
      vUv = uv * uCrop.xy + uCrop.zw;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
   }
`;

const fragmentShader = `
   uniform sampler2D uMap;
   uniform vec3 uBg;
   uniform vec3 uSunken;
   uniform vec3 uLine;
   uniform float uReady;
   uniform float uStrength;
   uniform vec2 uHairline;
   varying vec2 vUv;
   varying vec2 vFrame;

   vec3 toSrgb(vec3 c) {
      return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));
   }

   vec3 toLinear(vec3 c) {
      return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(vec3(0.04045), c));
   }

   void main() {
      vec3 face = mix(uSunken, texture2D(uMap, vUv).rgb, uReady);
      vec2 edge = min(vFrame, 1.0 - vFrame);
      float hairline = step(edge.x, uHairline.x) + step(edge.y, uHairline.y);
      face = mix(face, uLine, clamp(hairline, 0.0, 1.0));
      vec3 color = mix(toSrgb(uBg), toSrgb(face), uStrength);
      gl_FragColor = vec4(toLinear(color), 1.0);
      #include <colorspace_fragment>
   }
`;

type Card = {
   index: number;
   mesh: Mesh<PlaneGeometry, ShaderMaterial>;
   slot: number;
   target: number;
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const strengthAt = (slot: number) => {
   if (slot <= 1) return lerp(1, 0.45, slot);
   if (slot > VISIBLE) return Math.max(0, 0.18 * (VISIBLE + 1 - slot));
   return 0.45 - 0.135 * (slot - 1);
};

const placeholderTexture = (colors: DeckColors) => {
   const canvas = document.createElement('canvas');
   canvas.width = 660;
   canvas.height = 400;
   const context = canvas.getContext('2d');
   if (context) {
      context.fillStyle = colors.sunken;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.strokeStyle = colors.lineStrong;
      context.lineWidth = 3;
      context.setLineDash([10, 8]);
      context.strokeRect(6, 6, canvas.width - 12, canvas.height - 12);
      const mono = getComputedStyle(document.documentElement)
         .getPropertyValue('--font-fira-code')
         .trim();
      context.font = `24px ${mono || 'monospace'}`;
      context.fillStyle = colors.muted;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(
         'No public screenshot',
         canvas.width / 2,
         canvas.height / 2,
      );
   }
   const texture = new CanvasTexture(canvas);
   texture.colorSpace = SRGBColorSpace;
   return texture;
};

const coverTop = (texture: Texture) => {
   const image = texture.image as { width: number; height: number };
   const aspect = image.width / image.height;
   return aspect < ASPECT
      ? { x: 1, y: aspect / ASPECT, ox: 0, oy: 1 - aspect / ASPECT }
      : { x: ASPECT / aspect, y: 1, ox: (1 - ASPECT / aspect) / 2, oy: 0 };
};

export const createDeck = (
   projects: DeckProject[],
   colors: DeckColors,
   reducedMotion: boolean,
   rise: number,
): Deck | null => {
   let renderer: WebGLRenderer;
   try {
      renderer = new WebGLRenderer({
         antialias: true,
         alpha: true,
         powerPreference: 'low-power',
      });
   } catch {
      return null;
   }
   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
   renderer.setClearColor(0x000000, 0);
   const canvas = renderer.domElement;
   canvas.style.display = 'block';
   canvas.style.width = '100%';
   canvas.style.height = '100%';

   const scene = new Scene();
   const camera = new PerspectiveCamera(FOV, 1, 1, 5000);
   const geometry = new PlaneGeometry(1, 1);
   const bg = new Color(colors.bg);
   const line = new Color(colors.line);
   const loader = new TextureLoader();
   const placeholder = placeholderTexture(colors);

   let width = 0;
   let height = 0;
   let frameHeight = 0;
   let depth = 1;
   let selected = 0;
   let fan = 0;
   let hovered = false;
   let gliding = false;
   const tilt = { x: 0, y: 0 };
   let frame = 0;
   let container: HTMLElement | null = null;
   let pick: (index: number) => void = () => {};

   const cards: Card[] = projects.map((project, index) => {
      const material = new ShaderMaterial({
         vertexShader,
         fragmentShader,
         uniforms: {
            uMap: { value: placeholder },
            uCrop: { value: new Vector4(1, 1, 0, 0) },
            uBg: { value: bg },
            uSunken: { value: new Color(colors.sunken) },
            uLine: { value: line },
            uReady: { value: project.image ? 0 : 1 },
            uStrength: { value: 0 },
            uHairline: { value: new Vector2() },
         },
      });
      const mesh = new Mesh(geometry, material);
      mesh.userData.index = index;
      scene.add(mesh);

      if (project.image) {
         loader.load(project.image, (texture) => {
            texture.colorSpace = SRGBColorSpace;
            const crop = coverTop(texture);
            material.uniforms.uMap.value = texture;
            material.uniforms.uCrop.value.set(crop.x, crop.y, crop.ox, crop.oy);
            material.uniforms.uReady.value = 1;
            request();
         });
      }
      return { index, mesh, slot: VISIBLE + 1, target: VISIBLE + 1 };
   });

   const slotOf = (index: number) =>
      (index - selected + projects.length) % projects.length;

   const place = (card: Card) => {
      const slot = card.slot;
      const peek = lerp(PEEK, PEEK_FAN, fan);
      const step = lerp(STEP_Z, STEP_Z_FAN, fan);
      const z = -slot * step;
      const scale = depth / (depth - z);
      const frameTop = frameHeight / 2 - rise / 2;
      const top = (frameTop + slot * peek) / scale;
      card.mesh.scale.set(frameHeight * ASPECT, frameHeight, 1);
      card.mesh.position.set(
         -tilt.x * slot * 10,
         top - frameHeight / 2 + tilt.y * slot * 6,
         z,
      );
      card.mesh.rotation.x = -slot * 0.035 * fan;

      const strength = strengthAt(slot);
      card.mesh.visible = strength > 0.01;
      const uniforms = card.mesh.material.uniforms;
      uniforms.uStrength.value = strength;
      const px = 1 / scale;
      uniforms.uHairline.value.set(
         px / (frameHeight * ASPECT),
         px / frameHeight,
      );
      card.mesh.renderOrder = -slot;
   };

   const paint = () => {
      frame = 0;
      let moving = false;
      const ease = reducedMotion ? 1 : EASE;

      let travelling = false;
      for (const card of cards) {
         card.slot += (card.target - card.slot) * ease;
         if (Math.abs(card.target - card.slot) > 0.002) moving = true;
         else card.slot = card.target;
         if (Math.abs(card.target - card.slot) > 0.08) travelling = true;
      }
      if (!travelling) gliding = false;

      const fanTarget = (hovered || gliding) && !reducedMotion ? 1 : 0;
      fan += (fanTarget - fan) * ease;
      if (Math.abs(fanTarget - fan) > 0.001) moving = true;
      else fan = fanTarget;

      for (const card of cards) place(card);
      renderer.render(scene, camera);
      if (moving) request();
   };

   const request = () => {
      if (!frame && container) frame = requestAnimationFrame(paint);
   };

   const resize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      if (!width || !height) return;
      frameHeight = height - rise;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      depth = height / 2 / Math.tan((FOV * Math.PI) / 360);
      camera.position.set(0, 0, depth);
      camera.near = depth / 10;
      camera.far = depth * 10;
      camera.updateProjectionMatrix();
      request();
   };
   const observer = new ResizeObserver(resize);

   // Pointer: a peeking card is a shortcut to that project
   const raycaster = new Raycaster();
   const pointer = new Vector2();
   const cardAt = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.set(
         ((event.clientX - rect.left) / rect.width) * 2 - 1,
         -((event.clientY - rect.top) / rect.height) * 2 + 1,
      );
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster
         .intersectObjects(
            cards.filter((card) => card.mesh.visible).map((card) => card.mesh),
            false,
         )
         .find(
            (intersection) => slotOf(intersection.object.userData.index) > 0,
         );
      return hit ? (hit.object.userData.index as number) : null;
   };
   canvas.addEventListener('pointermove', (event) => {
      canvas.style.cursor = cardAt(event) === null ? '' : 'pointer';
   });
   canvas.addEventListener('click', (event) => {
      const index = cardAt(event);
      if (index !== null) pick(index);
   });

   return {
      attach: (element) => {
         container = element;
         element.appendChild(canvas);
         observer.observe(element);
         resize();
      },
      detach: (element) => {
         observer.unobserve(element);
         if (canvas.parentElement === element) element.removeChild(canvas);
         if (container === element) container = null;
         if (frame) cancelAnimationFrame(frame);
         frame = 0;
      },
      select: (index) => {
         const first = cards.every((card) => card.slot === card.target);
         const wasPlaced = cards.some((card) => card.target <= VISIBLE);
         selected = index;
         for (const card of cards) {
            card.target = Math.min(slotOf(card.index), VISIBLE + 1);
            // The first placement lands without motion, and a card leaving
            // the front for the far end vanishes where it is, behind the
            // screenshot, rather than flying back through the deck
            const leavesFront = card.slot < 0.5 && card.target > VISIBLE;
            if ((first && !wasPlaced) || leavesFront) card.slot = card.target;
         }
         gliding = !(first && !wasPlaced);
         request();
      },
      tilt: (x, y) => {
         tilt.x = x;
         tilt.y = y;
         request();
      },
      hover: (on) => {
         hovered = on;
         request();
      },
      onPick: (handler) => {
         pick = handler;
      },
   };
};
