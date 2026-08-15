/* BLUEPRINT OBSIDIAN — cursor customizado discreto (dot + ring).
   Só ativo em dispositivos com hover fino (não touch). */
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const hovering = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let raf = 0;
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor-hover]")) {
        if (!hovering.current) {
          hovering.current = true;
          document.body.classList.add("cursor-hovering");
        }
      } else if (hovering.current) {
        hovering.current = false;
        document.body.classList.remove("cursor-hovering");
      }
    };

    const onLeave = () => {
      document.body.classList.remove("has-custom-cursor", "cursor-hovering");
    };
    const onEnter = () => {
      document.body.classList.add("has-custom-cursor");
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor", "cursor-hovering");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring hidden md:block" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot hidden md:block" aria-hidden="true" />
    </>
  );
}
