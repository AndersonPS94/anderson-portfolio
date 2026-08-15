/* BLUEPRINT OBSIDIAN — "Como eu penso software.": diagrama de camadas com linhas
   desenhadas progressivamente + cards de princípios de engenharia. */
import { useReveal } from "@/hooks/useReveal";
import { ARCHITECTURE_LAYERS } from "@/lib/siteData";
import { useLocale } from "@/contexts/LocaleContext";

export default function Architecture() {
  const { t } = useLocale();
  const ref = useReveal();
  return (
    <section id="arquitetura" ref={ref} className="relative py-28 md:py-36 border-t border-white/5">
      <div className="container">
        <span
          className="absolute right-4 top-28 hidden lg:block font-mono text-[9.5px] text-foreground/25 rotate-90 origin-top-right tracking-[0.2em]"
          aria-hidden="true"
        >
          DWG-ARC-05
        </span>
        <div className="max-w-2xl mb-14">
          <p className="eyebrow reveal">{t.architecture.eyebrow}</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight reveal">
            {t.architecture.title}<span className="text-[#3DDC84]">.</span>
          </h2>
          <p className="mt-5 text-[14px] leading-relaxed text-muted-foreground reveal">
            {t.architecture.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 items-start">
          {/* Diagrama de camadas */}
          <div className="reveal relative">
            <div className="corner-ticks border border-white/10 bg-card rounded-lg p-6 sm:p-8">
              <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-foreground/45 mb-6">
                {t.architecture.flowLabel}
              </div>
              <ol className="space-y-0">
                {ARCHITECTURE_LAYERS.map((layer, i) => {
                  const tr = (t.archLayers as Record<string, { detail: string; note: string }>)[layer.name] ?? { detail: layer.detail, note: layer.note };
                  return (
                  <li key={layer.name}>
                    <div
                      className="relative border border-white/10 bg-[#0D1013] rounded-md px-4 py-3.5 card-hover"
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[14.5px] font-semibold">{layer.name}</span>
                        <span className="font-mono text-[10.5px] text-[#3DDC84]/80">
                          {tr.detail}
                        </span>
                      </div>
                      <p className="mt-1.5 text-[12px] text-muted-foreground">{tr.note}</p>
                    </div>
                    {i < ARCHITECTURE_LAYERS.length - 1 && (
                      <div className="flex justify-center py-1.5" aria-hidden="true">
                        <span className="text-[#3DDC84]/60 text-sm">↓</span>
                      </div>
                    )}
                  </li>
                  );
                })}
              </ol>
              <div className="mt-6 flex items-center justify-between font-mono text-[10px] text-foreground/60">
                <span>UI → DATA</span>
                <span>{t.architecture.unidirectional}</span>
              </div>
            </div>
          </div>

          {/* Princípios */}
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-foreground/50 mb-6 reveal">
              // {t.architecture.principlesLabel}
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {t.architecture.principles.map((c, i) => (
                <div
                  key={c.title}
                  className="reveal card-hover border border-white/8 bg-card/60 rounded-md px-4 py-4"
                  style={{ transitionDelay: `${(i % 2) * 70}ms` }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[10px] text-[#3DDC84]/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[13.5px] font-semibold">{c.title}</h3>
                  </div>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
