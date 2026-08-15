/* BLUEPRINT OBSIDIAN — footer extremamente limpo. */
import { LINKS } from "@/lib/siteData";
import BlueprintStamp from "@/components/BlueprintStamp";
import SoundToggle from "@/components/SoundToggle";
import { useLocale } from "@/contexts/LocaleContext";

const SECTIONS = [
  { id: "sobre", key: "nav.about" },
  { id: "experiencia", key: "nav.experience" },
  { id: "stack", key: "nav.stack" },
  { id: "projetos", key: "nav.projects" },
  { id: "arquitetura", key: "nav.architecture" },
  { id: "apps", key: "nav.apps" },
  { id: "github", key: "nav.githubSection" },
  { id: "contato", key: "nav.contact" },
];

export default function Footer() {
  const { t } = useLocale();
  const nav = t.nav as Record<string, string>;
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container flex flex-col gap-6">
        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px]">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-muted-foreground hover:text-[#3DDC84] transition-colors"
            >
              <span className="text-[#3DDC84]/50 mr-1.5">{s.id === "sobre" ? "01" : s.id === "experiencia" ? "02" : s.id === "stack" ? "03" : s.id === "projetos" ? "04" : s.id === "arquitetura" ? "05" : s.id === "apps" ? "06" : s.id === "github" ? "07" : "08"}.</span>
              {nav[s.key]}
            </a>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <BlueprintStamp className="h-7 w-7 text-[13px]" />
          <img
            src={`${import.meta.env.BASE_URL}/assets/logo-mark_c0ded072.png`}
            alt=""
            className="h-6 w-6 object-contain"
            loading="lazy"
            aria-hidden="true"
          />
          <div className="text-[13px]">
            <span className="font-semibold">Anderson Santos</span>
            <span className="text-muted-foreground"> · {t.footer.role}</span>
          </div>
        </div>
        <div className="flex items-center gap-6 font-mono text-[11.5px] text-muted-foreground">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href={LINKS.googlePlay} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-foreground transition-colors">
            Google Play
          </a>
          <SoundToggle />
        </div>
        <div className="font-mono text-[11px] text-muted-foreground/70">
          {t.footer.year}
        </div>
      </div>
    </footer>
  );
}
