import { ImageResponse } from 'next/og';

import { siteConfig } from '@/config/site.config';

export const shareImageSize = { width: 1200, height: 630 };

const color = {
   sunken: '#21252b',
   main: '#282c33',
   line: '#3e4451',
   text: '#abb2bf',
   strong: '#e8eaee',
   muted: '#9298a5',
   primary: '#c778dd',
};

const logo = `data:image/svg+xml;base64,${Buffer.from(
   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><path fill-rule="evenodd" d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z" fill="${color.strong}"/></svg>`,
).toString('base64')}`;

const loadFont = async (family: string, weight: number, text: string) => {
   const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`,
   ).then((response) => response.text());
   const source = css.match(
      /src: url\((.+?)\) format\('(opentype|truetype)'\)/,
   );
   if (!source) throw new Error(`Google Fonts sent no ${family} ${weight}`);
   return fetch(source[1]).then((response) => response.arrayBuffer());
};

type ShareImage = {
   file: string;
   title: string;
   lead: string;
   status: { label: string; color: string };
   facts: string[];
};

export const renderShareImage = async ({
   file,
   title,
   lead,
   status,
   facts,
}: ShareImage) => {
   const mono = ['~/hozaifa', siteConfig.website, file, status.label, ...facts];
   const [bold, regular, code] = await Promise.all([
      loadFont('Fira+Sans', 700, title),
      loadFont('Fira+Sans', 400, lead),
      loadFont('Fira+Code', 400, mono.join('')),
   ]);

   return new ImageResponse(
      <div
         style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            padding: 44,
            background: color.main,
         }}
      >
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               flex: 1,
               border: `2px solid ${color.line}`,
               fontFamily: 'Fira Code',
               fontSize: 22,
               color: color.muted,
            }}
         >
            <div
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: 62,
                  padding: '0 28px',
                  background: color.sunken,
                  borderBottom: `2px solid ${color.line}`,
               }}
            >
               <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                  <img src={logo} width={26} height={26} />
                  <span>~/hozaifa</span>
               </div>
               <span>{siteConfig.website}</span>
            </div>

            <div
               style={{
                  display: 'flex',
                  height: 58,
                  background: color.sunken,
                  borderBottom: `2px solid ${color.line}`,
               }}
            >
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     padding: '0 28px',
                     marginBottom: -2,
                     background: color.main,
                     borderTop: `3px solid ${color.primary}`,
                     borderRight: `2px solid ${color.line}`,
                     color: color.strong,
                  }}
               >
                  {file}
               </div>
            </div>

            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  flex: 1,
                  padding: '0 64px',
                  fontFamily: 'Fira Sans',
               }}
            >
               <div
                  style={{
                     fontSize: 92,
                     fontWeight: 700,
                     lineHeight: 1,
                     letterSpacing: -2,
                     color: color.strong,
                  }}
               >
                  {title}
               </div>
               <div
                  style={{
                     marginTop: 30,
                     maxWidth: 920,
                     fontSize: 38,
                     lineHeight: 1.35,
                     color: color.text,
                  }}
               >
                  {lead}
               </div>
            </div>

            <div
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 36,
                  height: 58,
                  padding: '0 28px',
                  background: color.sunken,
                  borderTop: `2px solid ${color.line}`,
               }}
            >
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: 12,
                     color: status.color,
                  }}
               >
                  <div
                     style={{
                        width: 12,
                        height: 12,
                        borderRadius: 6,
                        background: status.color,
                     }}
                  />
                  {status.label}
               </div>
               {facts.map((fact) => (
                  <span key={fact}>{fact}</span>
               ))}
            </div>
         </div>
      </div>,
      {
         ...shareImageSize,
         fonts: [
            { name: 'Fira Sans', data: bold, weight: 700, style: 'normal' },
            { name: 'Fira Sans', data: regular, weight: 400, style: 'normal' },
            { name: 'Fira Code', data: code, weight: 400, style: 'normal' },
         ],
      },
   );
};
