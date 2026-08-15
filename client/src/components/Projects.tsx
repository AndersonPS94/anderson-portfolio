/* BLUEPRINT OBSIDIAN — "Projetos selecionados": Parkly em destaque (ficha técnica
   grande), demais projetos em grid alternado. Cada card abre case study. */
import { useState } from "react";
import { ArrowUpRight, MonitorSmartphone, ExternalLink } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { PROJECTS, type Project } from "@/lib/siteData";
import ProjectDialog from "@/components/ProjectDialog";
import { useLocale } from "@/contexts/LocaleContext";

const PC_KEY: Record<string, "parkly" | "scango" | "taskEngine" | "cashly"> = {
  parkly: "parkly",
  scango: "scango",
  "task-engine": "taskEngine",
  cashly: "cashly",
};

export default function Projects() {
  const { t } = useLocale();
  const ref = useReveal();
  const [open, setOpen] = useState<Project | null>(null);

  const featured = PROJECTS.find((p) => p.highlighted)!;
  const others = PROJECTS.filter((p) => !p.highlighted);

  return (
    <section id="projetos" ref={ref} className="relative py-28 md:py-36 border-t border-white/5">
      <div className="container">
        <span
          className="absolute right-4 top-28 hidden lg:block font-mono text-[9.5px] text-foreground/25 rotate-90 origin-top-right tracking-[0.2em]"
          aria-hidden="true"
        >
          DWG-PRJ-04
        </span>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="eyebrow reveal">{t.projects.eyebrow}</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight reveal">
              {t.projects.title}
            </h2>
            <span className="mt-3 inline-block h-px w-16 bg-[#3DDC84]/40" aria-hidden="true" />
          </div>
          <p className="max-w-sm text-[13px] text-muted-foreground reveal">{t.projects.subtitle}</p>
        </div>

        {/* Parkly — destaque */}
        <div
          className="reveal corner-ticks border border-white/10 bg-card rounded-lg overflow-hidden mb-10"
          data-cursor-hover
        >
          <div className="grid lg:grid-cols-[7fr_5fr]">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] text-[#3DDC84] border border-[#3DDC84]/30 rounded px-2 py-1">
                  {t.projects.projectLabel} {featured.number} — {t.projects.statusHighlight}
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">{featured.name}</h3>
              <p className="mt-2 text-[15px] text-muted-foreground">{t.projectCards[PC_KEY[featured.id]].tagline}</p>
              <p className="mt-5 text-[14px] leading-relaxed text-foreground/80 max-w-xl">
                {featured.description}
              </p>

              {/* pipeline tecnológico */}
              <div className="mt-7">
                <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-foreground/45 mb-3">
                  {t.misc.tech} pipeline
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {["Android", "Kotlin Multiplatform", "SQLDelight", "Firebase"].map((t, i) => (
                    <span key={t} className="flex items-center gap-2">
                      <span className="font-mono text-[11.5px] text-[#3DDC84] border border-[#3DDC84]/25 bg-[#3DDC84]/[0.07] rounded px-2.5 py-1.5">
                        {t}
                      </span>
                      {i < 3 && <span className="text-foreground/30 text-[11px]" aria-hidden="true">→</span>}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setOpen(featured)}
                className="mt-8 self-start inline-flex items-center gap-2 rounded-md bg-[#3DDC84] text-[#0A0C0E] font-semibold text-[13.5px] px-5 py-3 btn-press hover:bg-[#4be891]"
              >
                {t.projects.viewCase}
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            <div className="relative bg-[#0D1013] blueprint-grid-fine p-10 flex items-center justify-center min-h-[340px] lg:min-h-full">
                <img
                src={featured.image}
                alt="Parkly — mockup do aplicativo de gerenciamento de estacionamentos"
                className="relative z-10 w-full max-w-[280px] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
                loading="lazy"
              />
              <span className="absolute top-6 left-8 font-mono text-[10px] text-foreground/35">
                {t.projects.figLabel}
              </span>
              {/* cota vertical */}
              <span className="absolute right-8 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-[#3DDC84]/35 to-transparent hidden lg:block" aria-hidden="true" />
              <span className="absolute right-10 top-[50%] -translate-y-1/2 rotate-90 font-mono text-[9px] text-foreground/35 origin-right hidden lg:block" aria-hidden="true">H 1560px · SCALE 1:1</span>
            </div>
          </div>
        </div>

        {/* Demais projetos */}
        <div className="grid md:grid-cols-2 gap-5">
          {others.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setOpen(p)}
              className="reveal card-hover corner-ticks text-left border border-white/10 bg-card rounded-lg overflow-hidden group"
              style={{ transitionDelay: `${i * 80}ms` }}
              data-cursor-hover
            >
              <div className="relative blueprint-grid-fine bg-[#0D1013] p-8 h-56 flex items-center justify-center overflow-hidden">
                <img
                  src={p.image}
                  alt={`Interface do aplicativo ${p.name} em um smartphone`}
                  className="h-full max-h-44 w-auto object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <MonitorSmartphone className="absolute top-5 right-6 h-4 w-4 text-foreground/30" aria-hidden="true" />
                <span className="absolute top-5 left-6 font-mono text-[10px] text-foreground/35">
                  FIG. {p.number} — {p.name.toUpperCase()}
                </span>
                <span className="absolute bottom-5 left-6 right-6 flex items-center justify-between font-mono text-[9px] text-foreground/30" aria-hidden="true">
                  <span>SCALE 1:1</span>
                  <span className="text-[#3DDC84]/50">— — —</span>
                  <span>REV. A</span>
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight">{p.name}</h3>
                  <ArrowUpRight className="h-4 w-4 text-[#3DDC84] shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{t.projectCards[PC_KEY[p.id]].tagline}</p>
                <p className="mt-3 text-[13px] leading-relaxed text-foreground/75 line-clamp-3">
                  {t.projectCards[PC_KEY[p.id]].context}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="font-mono text-[10px] text-foreground/60 border border-white/8 rounded px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ProjectDialog project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
