import { useEffect, useRef } from 'react';

/**
 * A large soft glow orb that follows the mouse cursor.
 * Purely cosmetic — pointer-events: none so it never blocks clicks.
 */
const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -200, y: -200 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const size = 520;
    const glow = glowRef.current;
    if (!glow) return;

    glow.style.width  = `${size}px`;
    glow.style.height = `${size}px`;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    // Smooth lerp loop
    let currentX = -200;
    let currentY = -200;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const loop = () => {
      currentX = lerp(currentX, posRef.current.x, 0.1);
      currentY = lerp(currentY, posRef.current.y, 0.1);
      if (glow) {
        glow.style.left = `${currentX}px`;
        glow.style.top  = `${currentY}px`;
      }
      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);
    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow hidden md:block" />;
};

export default CursorGlow;
