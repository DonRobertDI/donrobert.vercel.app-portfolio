import React, { useEffect, useRef } from 'react';

const interactiveSelector = 'a, button, input, textarea, select, [role="button"]';

function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!ring || !dot || !finePointer || reducedMotion) return undefined;

    let pointer = { x: -100, y: -100 };
    let current = { x: -100, y: -100 };
    let frame;

    const render = () => {
      current.x += (pointer.x - current.x) * 0.16;
      current.y += (pointer.y - current.y) * 0.16;
      ring.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      dot.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(render);
    };

    const onMove = (event) => {
      pointer = { x: event.clientX, y: event.clientY };
      ring.dataset.visible = 'true';
      dot.dataset.visible = 'true';
    };

    const onOver = (event) => {
      const interactive = event.target.closest?.(interactiveSelector);
      ring.dataset.active = interactive ? 'true' : 'false';
    };

    const onLeave = () => {
      ring.dataset.visible = 'false';
      dot.dataset.visible = 'false';
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver);
    document.addEventListener('mouseleave', onLeave);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" data-visible="false" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" data-visible="false" aria-hidden="true" />
    </>
  );
}

export default CustomCursor;
