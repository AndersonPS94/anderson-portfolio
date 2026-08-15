/* BLUEPRINT OBSIDIAN — navbar fixa, transparente no topo, obsidian blur ao rolar.
   Links com underline animado; menu hamburger elegante no mobile. */
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LINKS } from "@/lib/siteData";
import { useLocale } from "@/contexts/LocaleContext";

const NAV_HREFS = ["#sobre", "#experiencia", "#stack", "#projetos", "#arquitetura", "#contato"];
const NAV_LABELS = ["about", "experience", "stack", "projects", "architecture", "contact"] as const;

const FLAG_BR = (
  <svg viewBox="0 0 36 36" className="h-3.5 w-3.5 rounded-[3px] overflow-hidden" aria-hidden="true">
    <rect width="36" height="36" fill="#009c3b" />
    <path d="M18 5 L31.5 18 L18 31 L4.5 18 Z" fill="#ffdf00" />
    <circle cx="18" cy="18" r="7" fill="#002776" />
  </svg>
);
const FLAG_US = (
  <svg viewBox="0 0 36 36" className="h-3.5 w-3.5 rounded-[3px] overflow-hidden" aria-hidden="true">
    <g>
      {Array.from({ length: 7 }, (_, i) => (
        <rect key={i} x="0" y={i * 5.54} width="36" height="2.77" fill="#b22234" />
      ))}
      <rect x="0" y="0" width="36" height="36" fill="none" stroke="none" />
      {Array.from({ length: 6 }, (_, i) => (
        <rect key={i} x="0" y={13.85 + i * 5.54} width="36" height="2.77" fill="#fff" />
      ))}
      <rect x="0" y="0" width="15.5" height="19.38" fill="#3c3b6e" />
      <text x="7.75" y="12.5" fontSize="8" fill="#fff" textAnchor="middle">★</text>
    </g>
  </svg>
);

function useActiveSection() {
  const [active, setActive] = useState<string>(NAV_HREFS[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let current = active;
        for (const entry of entries) {
          if (entry.isIntersecting) current = `#${entry.target.id}`;
        }
        if (current !== active) setActive(current);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV_HREFS.forEach((href) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

function LocaleSwitch() {
  const { locale, setLocale } = useLocale();
  return (
    <button
      onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
      className="inline-flex items-center gap-1.5 font-mono text-[11.5px] tracking-[0.12em] text-foreground/70 hover:text-[#3DDC84] transition-colors px-1"
      aria-label={locale === "pt" ? "Switch to English" : "Mudar para português"}
      title={locale === "pt" ? "Switch to English" : "Mudar para português"}
    >
      {locale === "pt" && FLAG_BR}
      <span className={locale === "pt" ? "text-foreground" : "text-foreground/40"}>PT</span>
      <span className="text-[#3DDC84]/50 mx-0.5">/</span>
      <span className={locale === "en" ? "text-foreground" : "text-foreground/40"}>EN</span>
      {locale === "en" && FLAG_US}
    </button>
  );
}

export default function Navbar() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#0A0C0E]/85 backdrop-blur-xl border-b border-white/8"
          : "bg-transparent"
      }`}
    >
      <div
        className="fixed top-0 inset-x-0 z-[60] h-[2px] bg-transparent pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#3DDC84] transition-[width] duration-150 ease-out shadow-[0_0_10px_rgba(61,220,132,0.6)]"
          style={{ width: `${Math.round(scrollProgress * 100)}%` }}
        />
      </div>
      <nav className="container flex items-center justify-between h-16" aria-label="Navegação principal">
        <a href="#top" className="flex items-center gap-2.5 group" aria-label="Ir para o topo">
          <span className="relative inline-flex items-center justify-center">
            <span className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-[#3DDC84]/60" aria-hidden="true" />
            <span className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-[#3DDC84]/60" aria-hidden="true" />
            <img
              src={`${import.meta.env.BASE_URL}/assets/logo-mark_c0ded072.png`}
              alt="Monograma A."
              className="h-8 w-8 object-contain"
              loading="eager"
            />
          </span>
          <span className="font-semibold text-[15px] tracking-tight">
            Anderson<span className="text-[#3DDC84]">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_HREFS.map((href, i) => {
            const isActive = activeSection === href;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`link-underline text-[13px] transition-colors ${
                    isActive ? "text-[#3DDC84]" : "text-foreground/80 hover:text-foreground"
                  }`}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span className={`font-mono text-[10px] mr-1.5 ${isActive ? "text-[#3DDC84]" : "text-[#3DDC84]/70"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {t.nav[NAV_LABELS[i]]}
                </a>
              </li>
            );
          })}
        </ul>

        <LocaleSwitch />
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-md border border-white/12 px-3.5 py-1.5 text-[13px] text-foreground/85 hover:border-[#3DDC84]/40 hover:text-foreground btn-press transition-colors"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
          GitHub
        </a>

        <button
          className="md:hidden p-2 -mr-2 text-foreground/80"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden bg-[#0A0C0E]/97 backdrop-blur-xl border-b border-white/8">
          <ul className="container py-6 flex flex-col gap-1">
            {NAV_HREFS.map((href, i) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-baseline gap-3 py-3 text-[15px] border-b border-white/5 ${
                    activeSection === href ? "text-[#3DDC84] font-medium" : "text-foreground/85"
                  }`}
                  aria-current={activeSection === href ? "location" : undefined}
                >
                  <span className={`font-mono text-[11px] ${activeSection === href ? "text-[#3DDC84]" : "text-[#3DDC84]/70"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {t.nav[NAV_LABELS[i]]}
                </a>
              </li>
            ))}
            <li className="flex items-center justify-between pt-4 border-b border-white/5">
              <span className="font-mono text-[10px] text-foreground/60">LANGUAGE</span>
              <LocaleSwitch />
            </li>
            <li className="pt-4">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-md border border-white/12 px-4 py-2.5 text-[13px]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
                GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
