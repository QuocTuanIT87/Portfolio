import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
}

type RevealState = 'hidden' | 'animating' | 'visible-static';

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.2 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>('hidden');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element entered the viewport
          const comingFromBelow = entry.boundingClientRect.top > 0;

          if (comingFromBelow) {
            // User scrolled DOWN into the title → play wave animation
            setState('animating');
            setTimeout(() => setState('visible-static'), 900);
          } else {
            // User scrolled UP back into the title → show instantly, no animation
            setState('visible-static');
          }
        } else {
          // Element left the viewport
          const exitedToBelow = entry.boundingClientRect.top > 0;

          if (exitedToBelow) {
            // User scrolled UP completely past the title → reset for next downward pass
            setState('hidden');
          }
          // If exited to above (scrolled down past it) → stay visible-static, no reset
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, state };
}
