/* BLUEPRINT OBSIDIAN — "Código aberto.": GitHub elegante com username, tecnologias
   do perfil e CTA direto para o repositório. */
import { ArrowRight, GitBranch, Star } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { LINKS } from "@/lib/siteData";
import { useLocale } from "@/contexts/LocaleContext";

/* Repositórios públicos reais verificados no perfil AndersonPS94 (ago/2026).
   Os apps publicados (ScanGO, Task Engine, Parkly) não possuem repositório aberto. */
const REPOS = [
  { name: "Cashly-AndroidApp", descKey: "cashly", link: `${LINKS.github}/Cashly-AndroidApp`, highlighted: true },
  { name: "WashFlow-KMP", descKey: "washflow", link: `${LINKS.github}/WashFlow-KMP` },
  { name: "SaudeEmDia-KMP", descKey: "saudeEmDia", link: `${LINKS.github}/SaudeEmDia-KMP` },
];

export default function GithubSection() {
  const { t } = useLocale();
  const ghT = t.githubSection as typeof t.githubSection & {
    repoDescriptions: Record<string, string>;
    reposExtra: string;
  };
  const ref = useReveal();
  return (
    <section id="github" className="relative py-28 md:py-36 border-t border-white/5">
      <div className="container" ref={ref}>
        <span
          className="absolute right-4 top-28 hidden lg:block font-mono text-[9.5px] text-foreground/25 rotate-90 origin-top-right tracking-[0.2em]"
          aria-hidden="true"
        >
          DWG-GH-07
        </span>
        <div className="corner-ticks relative overflow-hidden rounded-lg border border-white/10 bg-card">
          <div
            className="absolute inset-0 blueprint-grid-fine opacity-60 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(55% 60% at 85% 20%, oklch(0.81 0.17 157 / 6%) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative p-8 sm:p-12 grid lg:grid-cols-[7fr_5fr] gap-10 items-center">
            <div>
              <p className="eyebrow reveal">{t.githubSection.eyebrow}</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight reveal">{t.githubSection.title}</h2>
              <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-muted-foreground reveal">
                {t.githubSection.subtitle}
              </p>
              <div className="mt-7 font-mono text-[13px] text-foreground/85 reveal">
                <span className="text-[#3DDC84]/80">~/</span> github.com/
                <span className="underline decoration-[#3DDC84]/40 underline-offset-4">
                  {LINKS.githubProfile}
                </span>
              </div>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal mt-7 inline-flex items-center gap-2 rounded-md bg-[#3DDC84] text-[#0A0C0E] font-semibold text-[13.5px] px-5 py-3 btn-press hover:bg-[#4be891]"
              >
                {t.githubSection.accessGithub}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-3">
              {REPOS.map((r, i) => (
                <a
                  key={r.name}
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`reveal flex items-center gap-4 rounded-md px-4 py-3.5 card-hover ${
                    "highlighted" in r && r.highlighted
                      ? "border border-[#3DDC84]/40 bg-[#3DDC84]/[0.06]"
                      : "border border-white/8 bg-[#0D1013]/60"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <GitBranch className="h-4 w-4 text-[#3DDC84]/70 shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="text-[13.5px] font-semibold truncate">{r.name}</div>
                    <div className="text-[11.5px] text-muted-foreground truncate">{ghT.repoDescriptions[r.descKey]}</div>
                  </div>
                  <Star className="ml-auto h-3.5 w-3.5 text-foreground/25 shrink-0" aria-hidden="true" />
                </a>
              ))}
              <div className="reveal font-mono text-[10.5px] text-foreground/60 pt-1">
                {ghT.reposExtra}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
