/* BLUEPRINT OBSIDIAN — botão "voltar ao topo" flutuante: aparece após 600px
   de scroll, sobe com transição suave e respeita prefers-reduced-motion. */
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={goTop}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
      className={`fixed bottom-6 right-6 z-40 h-10 w-10 rounded-md border border-[#3DDC84]/30 bg-[#0A0C0E]/90 backdrop-blur-md
        flex items-center justify-center text-[#3DDC84] shadow-[0_8px_30px_rgba(0,0,0,0.4)]
        transition-all duration-300 btn-press hover:border-[#3DDC84]/60 hover:bg-[#101418]
        md:bottom-8 md:right-8 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
