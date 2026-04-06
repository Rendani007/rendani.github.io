import { useEffect, useRef } from 'react';

/**
 * Adds class "revealed" to the element when it enters the viewport.
 * Pair with CSS classes: reveal, reveal-left, reveal-right, reveal-scale
 */
export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};
