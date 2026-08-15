/* BLUEPRINT OBSIDIAN — "Apps publicados": cards de apps na Google Play com os logos
   reais dos apps e ícone de loja. Link real para o perfil do desenvolvedor. */
import { ExternalLink } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { LINKS } from "@/lib/siteData";
import { useLocale } from "@/contexts/LocaleContext";

/* Apps oficiais do perfil AndersonPS na Google Play (dados lidos da loja). */
const APPS = [
  {
    id: "scango",
    name: "ScanGO",
    image: `${import.meta.env.BASE_URL}/assets/scango-icon_fc5c47de.png`,
    downloads: "100+ downloads",
    category: "Ferramentas",
    link: LINKS.scanGoPlay,
    badge: "Publicado",
  },
  {
    id: "taskEngine",
    name: "Task Engine",
    image: `${import.meta.env.BASE_URL}/assets/taskengine-icon_6971ad11.png`,
    downloads: "10+ downloads",
    category: "Estilo de vida",
    link: LINKS.taskEnginePlay,
    badge: "Publicado",
  },
  {
    id: "parkly",
    name: "Parkly",
    image: `${import.meta.env.BASE_URL}/assets/parkly-icon_4064a0ca.png`,
    downloads: "Lançado",
    category: "Ferramentas",
    link: LINKS.parklyPlay,
    badge: "Publicado",
  },
  {
    id: "cashly",
    name: "Cashly",
    image: `${import.meta.env.BASE_URL}/assets/cashly-icon-v2_eebd4629.png`,
    downloads: "Em publicação",
    category: "Finanças",
    link: LINKS.cashlyGithub,
    badge: "Em publicação",
  },
];

export default function AppsPublished() {
  const { t } = useLocale();
  const appsT = t.apps as typeof t.apps & {
    descriptions: Record<string, string>;
    categories: Record<string, string>;
    published: string;
    launched: string;
    publishing: string;
    categoryTools: string;
    categoryFinance: string;
    storeLink: string;
  };
  const ref = useReveal();
  return (
    <section id="apps" className="relative py-28 md:py-36 border-t border-white/5">
      <div className="container" ref={ref}>
        <span
          className="absolute right-4 top-28 hidden lg:block font-mono text-[9.5px] text-foreground/25 rotate-90 origin-top-right tracking-[0.2em]"
          aria-hidden="true"
        >
          DWG-APP-06
        </span>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="eyebrow reveal">{t.apps.eyebrow}</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight reveal">{t.apps.title}</h2>
            <span className="mt-3 inline-block h-px w-16 bg-[#3DDC84]/40" aria-hidden="true" />
          </div>
          <a
            href={LINKS.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 text-[13px] btn-press hover:border-[#3DDC84]/40 transition-colors"
          >
            {t.apps.openStore}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {APPS.map((app, i) => (
            <a
              key={app.name}
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal card-hover corner-ticks border border-white/10 bg-card rounded-lg p-6 group hover:border-[#3DDC84]/35 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(61,220,132,0.08)] transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
              data-cursor-hover
            >
              <div className="flex items-start justify-between">
                <div className="relative">
                  <img
                    src={app.image}
                    alt={`Ícone do aplicativo ${app.name}`}
                    className="h-14 w-14 rounded-xl object-cover"
                    loading="lazy"
                  />
                  <span className="absolute -bottom-4 left-0 font-mono text-[8.5px] text-foreground/30" aria-hidden="true">
                    FIG.{APPS.indexOf(app) + 1}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#3DDC84]/80 border border-[#3DDC84]/25 rounded px-2 py-1">
                  {app.id === "cashly" ? appsT.publishing : app.id === "parkly" ? appsT.launched : appsT.published}
                </span>
              </div>
              <h3 className="mt-5 text-[16px] font-bold tracking-tight flex items-center gap-2">
                {app.name}
                <ExternalLink className="h-3.5 w-3.5 text-foreground/30 transition-all duration-300 group-hover:text-[#3DDC84] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </h3>
              <div className="mt-2 flex items-center gap-2 font-mono text-[10px] text-[#3DDC84]/80">
                <span className="border border-[#3DDC84]/25 rounded px-1.5 py-0.5">{app.downloads}</span>
                <span className="border border-white/10 rounded px-1.5 py-0.5 text-foreground/50">
                  {app.id === "taskEngine"
                    ? appsT.categoryLifestyle
                    : app.id === "cashly"
                      ? appsT.categoryFinance
                      : appsT.categoryTools}
                </span>
              </div>
              {app.id === "cashly" && (
                <>
                  <div className="mt-2.5 space-y-1" aria-label="Status da publicação">
                    <p className="font-mono text-[9.5px] text-foreground/50 flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-[#3DDC84]" aria-hidden="true" />{appsT.statusAppBuilt}
                    </p>
                    <p className="font-mono text-[9.5px] text-foreground/50 flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-[#3DDC84]/60" aria-hidden="true" />{appsT.statusStoreReview}
                    </p>
                    <p className="font-mono text-[9.5px] text-[#3DDC84]/90 flex items-center gap-1.5 font-semibold">
                      <span className="h-1 w-1 rounded-full bg-[#3DDC84] animate-pulse" aria-hidden="true" />{appsT.statusComingSoon}
                    </p>
                  </div>
                  <p className="mt-2 font-mono text-[9.5px] text-[#3DDC84]/70" aria-hidden="true">
                    GitHub · AndersonPS94/Cashly-AndroidApp
                  </p>
                </>
              )}
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted-foreground">{appsT.descriptions[app.id]}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
