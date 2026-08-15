/* BLUEPRINT OBSIDIAN — "Tech Stack": categorias como fichas técnicas com badges mono,
   stagger de entrada e hover discreto. */
import { useReveal } from "@/hooks/useReveal";
import { STACK_CATEGORIES } from "@/lib/siteData";
import { useLocale } from "@/contexts/LocaleContext";

export default function TechStack() {
  const { t } = useLocale();
  const ref = useReveal();
  return (
    <section id="stack" ref={ref} className="relative py-28 md:py-36 border-t border-white/5">
      <div className="container">
        {/* anotação de margem estilo planta técnica */}
        <span
          className="absolute right-4 top-28 hidden lg:block font-mono text-[9.5px] text-foreground/25 rotate-90 origin-top-right tracking-[0.2em]"
          aria-hidden="true"
        >
          DWG-STK-03
        </span>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="eyebrow reveal">{t.stack.eyebrow}</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight reveal">{t.stack.title}</h2>
            <span className="mt-3 inline-block h-px w-16 bg-[#3DDC84]/40" aria-hidden="true" />
          </div>
          <p className="max-w-md text-[13px] text-muted-foreground reveal">{t.stack.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STACK_CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              className="reveal card-hover corner-ticks border border-white/10 bg-card rounded-md px-5 py-6"
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono text-[12px] tracking-[0.18em] uppercase text-foreground/80">
                  {cat.title}
                </h3>
                <span className="font-mono text-[10px] text-[#3DDC84]/60">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li key={item}>
                    <span className="inline-block border border-[#3DDC84]/20 bg-[#3DDC84]/[0.06] text-[#3DDC84] font-mono text-[11.5px] rounded px-2.5 py-1.5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
