import { ReactNode, ViewTransition } from 'react';

const DIRECTIONS = {
   'nav-forward': 'nav-forward',
   'nav-back': 'nav-back',
   default: 'none',
};

/**
 * Slides page content by navigation direction. Links opt in with
 * transitionTypes={['nav-forward']} or ['nav-back']; any other navigation
 * (browser back, refresh) swaps without a slide.
 */
const DirectionalPage = ({ children }: { children: ReactNode }) => (
   <ViewTransition enter={DIRECTIONS} exit={DIRECTIONS} default="none">
      <div>{children}</div>
   </ViewTransition>
);

export { DirectionalPage };
