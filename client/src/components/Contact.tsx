/* BLUEPRINT OBSIDIAN — "Vamos construir algo?": seção final forte com grid blueprint,
   CTA de email, LinkedIn e GitHub. */
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import BlueprintStamp from "@/components/BlueprintStamp";
import { useReveal } from "@/hooks/useReveal";
import { LINKS } from "@/lib/siteData";
import { useLocale } from "@/contexts/LocaleContext";

export default function Contact() {
  const { t } = useLocale();
  const ref = useReveal();
  return (
    <section id="contato" ref={ref} className="relative py-28 md:py-40 blueprint-grid overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 45% at 50% 60%, oklch(0.81 0.17 157 / 7%) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="container relative z-10 text-center max-w-3xl mx-auto">
        <span
          className="absolute right-4 top-28 hidden lg:block font-mono text-[9.5px] text-foreground/25 rotate-90 origin-top-right tracking-[0.2em]"
          aria-hidden="true"
        >
          DWG-CTC-08
        </span>
        <div className="reveal flex justify-center mb-6">
          <BlueprintStamp className="h-11 w-11 text-base" />
        </div>
        <p className="eyebrow reveal">{t.contact.eyebrow}</p>
        <h2 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight reveal">
          {t.contact.title}
          <span className="text-[#3DDC84]">.</span> {t.contact.titleQ}
        </h2>
        <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-muted-foreground reveal">
          {t.contact.subtitle}
        </p>

        <div className="mt-5 reveal">
          <span className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.15em] uppercase text-[#3DDC84] border border-[#3DDC84]/25 rounded px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3DDC84] animate-pulse" aria-hidden="true" />
            {t.contact.availability}
          </span>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 reveal">
          <a
            href={LINKS.email}
            className="inline-flex items-center gap-2 rounded-md bg-[#3DDC84] text-[#0A0C0E] font-semibold text-[13.5px] px-5 py-3 btn-press hover:bg-[#4be891] shadow-[0_0_24px_rgba(61,220,132,0.25)]"
          >
            <Mail className="h-4 w-4" />
            {t.contact.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[#3DDC84]/40 text-[#3DDC84] px-5 py-3 text-[13.5px] btn-press hover:border-[#3DDC84]/70 hover:bg-[#3DDC84]/5 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            {t.contact.linkedin}
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-[13.5px] btn-press hover:border-[#3DDC84]/40 hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>

        <div className="mt-12 font-mono text-[11.5px] text-muted-foreground/70 reveal">
          andersonpsdev@gmail.com
        </div>
      </div>
    </section>
  );
}
