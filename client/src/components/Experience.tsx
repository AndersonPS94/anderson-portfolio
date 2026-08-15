/* BLUEPRINT OBSIDIAN — "Experiência profissional.": card estilo dossiê com logo
   da empresa, cargo, período e responsabilidades técnicas. Acento verde cirúrgico,
   anotações FIG. e escala 1:1 para manter o vocabulário de desenho técnico. */
import { Building2, Check } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLocale } from "@/contexts/LocaleContext";

export default function Experience() {
  const { t } = useLocale();
  const ref = useReveal();
  return (
    <section id="experiencia" ref={ref} className="relative py-28 md:py-36 border-t border-white/5">
      <div className="container">
        <span
          className="absolute right-4 top-28 hidden lg:block font-mono text-[9.5px] text-foreground/25 rotate-90 origin-top-right tracking-[0.2em]"
          aria-hidden="true"
        >
          DWG-EXP-02
        </span>
        <div className="max-w-2xl mb-14">
          <p className="eyebrow reveal">{t.experience.eyebrow}</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight reveal">
            {t.experience.title}<span className="text-[#3DDC84]">.</span>
          </h2>
          <p className="mt-5 text-[14px] leading-relaxed text-muted-foreground reveal">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Card da vaga atual */}
        <article className="reveal corner-ticks relative overflow-hidden rounded-lg border border-white/10 bg-card">
          <div
            className="absolute inset-0 blueprint-grid-fine opacity-50 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(50% 55% at 90% 10%, oklch(0.81 0.17 157 / 5%) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative p-8 sm:p-10">
            {/* Cabeçalho do card */}
            <div className="flex items-start gap-5 flex-wrap">
              <div className="relative">
                <div className="h-16 w-16 rounded-lg border border-white/10 bg-white p-1.5 flex items-center justify-center">
                  <img
                    src="/assets/solution-ti-logo_6df50ae1.png"
                    alt="Logo da Solution TI"
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="absolute -bottom-3 left-0 font-mono text-[8.5px] text-foreground/30" aria-hidden="true">
                  {t.experience.figLabel}
                </span>
              </div>
              <div className="min-w-[240px]">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {t.experience.jobTitle}
                </h3>
                <div className="mt-2 flex items-center gap-3 flex-wrap text-[13px]">
                  <span className="inline-flex items-center gap-1.5 text-foreground/70">
                    <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                    {t.experience.jobCompany}
                  </span>
                  <span className="font-mono text-[11px] text-[#3DDC84]/80 border border-[#3DDC84]/25 rounded px-2 py-0.5">
                    {t.experience.jobType}
                  </span>
                </div>
                <div className="mt-2.5 font-mono text-[11px] text-foreground/45">
                  {t.experience.jobPeriod}
                </div>
                <div className="font-mono text-[11px] text-foreground/45">
                  {t.experience.jobLocation}
                </div>
              </div>
              <span className="ml-auto font-mono text-[9px] text-foreground/30" aria-hidden="true">
                SCALE 1:1 · REV. A
              </span>
            </div>

            {/* Descrição */}
            <p className="mt-8 max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
              {t.experience.jobDescription}
            </p>

            {/* Responsabilidades */}
            <div className="mt-7">
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-foreground/50 mb-4">
                // {t.experience.responsibilities}
              </div>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {t.experience.responsibilityItems.map((r) => (
                  <div key={r} className="flex items-start gap-2.5 text-[13.5px] text-foreground/80">
                    <Check className="h-4 w-4 text-[#3DDC84]/80 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rodapé técnico */}
            <div className="mt-8 pt-5 border-t border-white/8 flex items-center gap-2 flex-wrap font-mono text-[10.5px] text-foreground/45">
              <span>Stack: {t.experience.jobFooterStack}</span>
              <span className="text-[#3DDC84]/50" aria-hidden="true">·</span>
              <span>{t.experience.jobFooterPractices}</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
