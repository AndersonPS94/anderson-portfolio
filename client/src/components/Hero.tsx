/* BLUEPRINT OBSIDIAN — Hero com grid blueprint, typografia display grande à esquerda,
   composição técnica flutuante à direita (cards de tech + visual de arquitetura).
   Entrada: fade + blur-to-focus progressivo. */
import { ArrowDown, ArrowRight, Github } from "lucide-react";
import { LINKS } from "@/lib/siteData";
import { useLocale } from "@/contexts/LocaleContext";

const FLOAT_KEYS = ["kotlin", "compose", "kmp", "firebase"] as const;

export default function Hero() {
  const { t } = useLocale();
  return (
    <section
      id="top"
      className="relative min-h-screen blueprint-grid overflow-hidden flex items-end md:items-center"
      aria-label="Apresentação"
    >
          {/* vinheta radial */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(55% 45% at 70% 36%, oklch(0.81 0.17 157 / 5%) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* anotações técnicas de margem */}
          <div className="hidden lg:flex absolute top-24 right-8 flex-col gap-1 font-mono text-[10px] text-foreground/30 select-none" aria-hidden="true">
            <span>FIG. 01 — ANDROID SYSTEM</span>
            <span>LAT -22.90 · LNG -43.17</span>
            <span className="pulse-dot text-[#3DDC84]/70">● LIVE</span>
            <span className="mt-2">SCALE 1:1</span>
          </div>
          <div className="hidden lg:flex absolute left-8 bottom-24 rotate-[-90deg] origin-left font-mono text-[10px] text-foreground/25 select-none gap-8" aria-hidden="true">
            <span>DWG-2026 / PORTFOLIO</span>
            <span>REV. A</span>
            <span>ANDERSON SANTOS</span>
          </div>

      <div className="container relative z-10 pb-16 md:pb-24 pt-28 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-8 items-center">
        {/* Coluna de texto */}
        <div>
          <p className="eyebrow hero-anim" style={{ animationDelay: "0ms" }}>
            {t.hero.eyebrow}
          </p>
          <h1
            className="mt-4 text-[2.7rem] sm:text-6xl lg:text-[4.7rem] leading-[0.98] font-bold tracking-tight hero-anim"
            style={{ animationDelay: "120ms" }}
          >
            {t.hero.title.split(".")[0]}
            <span className="text-[#3DDC84]">.</span>
          </h1>
          <p
            className="mt-6 max-w-xl text-[15px] sm:text-base leading-relaxed text-muted-foreground hero-anim"
            style={{ animationDelay: "240ms" }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 hero-anim"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-md bg-[#3DDC84] text-[#0A0C0E] font-semibold text-[14px] px-5 py-3 btn-press hover:bg-[#4be891]"
            >
              {t.hero.ctaProjects}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 text-foreground/85 text-[14px] px-5 py-3 btn-press hover:border-[#3DDC84]/45 hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              {t.hero.github}
            </a>
          </div>

          <div
            className="mt-14 hidden md:flex items-center gap-3 text-muted-foreground/60 hero-anim"
            style={{ animationDelay: "520ms" }}
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase">
              {t.misc.scrollExplore}
            </span>
            <ArrowDown className="h-4 w-4 pulse-dot" />
          </div>
        </div>

        {/* Composição técnica flutuante */}
        <div className="relative h-[380px] md:h-[460px] hero-anim" style={{ animationDelay: "300ms" }} aria-hidden="true">
          {/* imagem de arquitetura */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/assets/hero-code-visual_738b0737.png"
              alt=""
              className="w-full max-w-[480px] object-contain opacity-70"
              loading="eager"
            />
          </div>

          {/* cards flutuantes */}
          {FLOAT_KEYS.map((key, i) => (
            <div
              key={key}
              className={`absolute ${["float-slow", "float-mid", "float-fast", "float-mid"][i]} rounded-md border border-white/12 bg-[#111418]/85 backdrop-blur-md px-4 py-3 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)]`}
              style={{ animationDelay: ["0ms", "1.2s", "2.1s", "0.8s"][i], left: key === "compose" ? "62%" : key === "kmp" ? "4%" : key === "firebase" ? "68%" : "10%", top: key === "compose" ? "14%" : key === "kmp" ? "58%" : key === "firebase" ? "62%" : "20%" }}
            >
              <span className="block text-[13px] font-semibold text-foreground">{key === "compose" ? "Jetpack Compose" : key.toUpperCase()}</span>
              <span className="font-mono text-[10px] text-[#3DDC84]/80">{t.hero.cards[key]}</span>
            </div>
          ))}

          {/* linhas de cota verticais */}
          <div className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[#3DDC84]/30 to-transparent hidden md:block" />
        </div>
      </div>

      {/* régua inferior */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3DDC84]/40 to-transparent" aria-hidden="true" />
    </section>
  );
}
