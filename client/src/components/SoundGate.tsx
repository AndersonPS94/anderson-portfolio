/* BLUEPRINT OBSIDIAN — SoundGate: conecta eventos de pointer do DOM aos
   efeitos sonoros de UI (hover/click). Aplica-se a elementos interativos
   marcados com [data-sound-hover] e [data-sound-click]. O contexto de áudio
   é criado apenas após a primeira interação do usuário (política de autoplay). */
import { useEffect, useRef } from "react";
import { playHover, playClick, isSoundEnabled } from "@/lib/sounds";

const HOVER_SELECTORS =
  "a[href], button, [role='button'], [data-cursor-hover]";

export function useSoundGate() {
  const boundRef = useRef(false);

  useEffect(() => {
    if (boundRef.current) return;
    boundRef.current = true;

    const onPointerOver = (e: Event) => {
      const target = (e.target as HTMLElement).closest(HOVER_SELECTORS);
      if (!target) return;
      if ("data-sound-hover" in target && target.getAttribute("data-sound-hover") === "off") return;
      playHover();
    };

    const onPointerDown = (e: Event) => {
      const target = (e.target as HTMLElement).closest(HOVER_SELECTORS);
      if (!target) return;
      if ("data-sound-hover" in target && target.getAttribute("data-sound-hover") === "off") return;
      playClick();
    };

    // Habilita o contexto de áudio na primeira interação (política de autoplay).
    const onFirstInteraction = () => {
      if (isSoundEnabled()) {
        playHover(); // warm-up do AudioContext
      }
      window.removeEventListener("pointerdown", onFirstInteraction);
    };
    window.addEventListener("pointerdown", onFirstInteraction, { once: true });

    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerdown", onFirstInteraction);
    };
  }, []);
}
