/* BLUEPRINT OBSIDIAN — "Mais do que código.": foto, texto curto, estatísticas,
   timeline de formação e terminal interativo (easter egg). Layout assimétrico 5/7. */
import { useState, useRef, KeyboardEvent } from "react";
import { Terminal as TerminalIcon, HelpCircle, X } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { TERMINAL_COMMANDS, LINKS } from "@/lib/siteData";
import { useLocale } from "@/contexts/LocaleContext";

export default function About() {
  const { t } = useLocale();
  const ref = useReveal();
  const appsBuilt = useCountUp(4);
  const appsPublished = useCountUp(3);
  const stackCats = useCountUp(9);
  const stats = [
    { value: "4+", label: t.about.stats.appsBuilt, count: appsBuilt },
    { value: "3", label: t.about.stats.appsPublished, count: appsPublished },
    { value: "9+", label: t.about.stats.stackCats, count: stackCats },
  ];
  return (
    <section id="sobre" ref={ref} className="relative py-28 md:py-36">
      <div className="container">
        <span
          className="absolute right-4 top-28 hidden lg:block font-mono text-[9.5px] text-foreground/25 rotate-90 origin-top-right tracking-[0.2em]"
          aria-hidden="true"
        >
          DWG-ABT-01
        </span>
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start">
          {/* Coluna esquerda: foto + stats */}
          <div className="reveal lg:sticky lg:top-28">
            <div className="corner-ticks border border-white/10 bg-card p-2">
              <img
                src={`${import.meta.env.BASE_URL}/assets/profile_0df8fc41.jpg`}
                alt="Anderson Santos, desenvolvedor Android"
                className="w-full aspect-[3/4] object-cover object-top grayscale-[25%]"
                loading="lazy"
              />
            </div>
            <div className="mt-2 flex items-center justify-between font-mono text-[9.5px] text-foreground/35 px-1" aria-hidden="true">
              <span>{t.about.figLabel}</span>
              <span>{t.about.location}</span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="border border-white/8 bg-card/60 rounded-md px-3 py-4">
                  <div className="font-mono text-xl font-semibold text-[#3DDC84]" ref={s.count.ref}>
                    {s.count.value}
                    {s.value.includes("+") ? "+" : ""}
                  </div>
                  <div className="mt-1 text-[11px] leading-tight text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita: narrativa + timeline + terminal */}
          <div>
            <p className="eyebrow reveal">{t.about.eyebrow}</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight reveal">
              {t.about.titlePart1}
              <br />
              {t.about.titlePart2}<span className="text-[#3DDC84]">.</span>
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground reveal">
              {t.about.intro}
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground reveal">
              {t.about.intro2}
            </p>

            {/* Timeline */}
            <div className="mt-10 reveal">
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-foreground/50 mb-5">
                {t.about.journey}
              </div>
              <ol className="relative border-l border-white/10 ml-2 space-y-8">
                {[
                  { key: "degree", year: t.about.timeline.degree, title: t.about.timeline.degreeTitle, detail: t.about.timeline.degreeDetail },
                  { key: "spec", year: t.about.timeline.spec, title: t.about.timeline.specTitle, detail: t.about.timeline.specDetail },
                  { key: "focus", year: t.about.timeline.focus, title: t.about.timeline.focusTitle, detail: t.about.timeline.focusDetail },
                ].map((x) => (
                  <li key={x.key} className="pl-6 relative">
                    <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-[#3DDC84]" aria-hidden="true" />
                    <span className="font-mono text-[11px] text-[#3DDC84]/80">{x.year}</span>
                    <h3 className="mt-1 text-[15px] font-semibold">{x.title}</h3>
                    <p className="text-[13px] text-muted-foreground">{x.detail}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Terminal easter egg */}
            <div className="mt-12 reveal">
              <Terminal ref={ref} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Terminal({ ref }: { ref?: React.RefObject<HTMLElement | null> }) {
  const { t } = useLocale();
  const [lines, setLines] = useState<{ type: "cmd" | "out"; text: string }[]>([
    { type: "out", text: t.about.terminal.header },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const next: { type: "cmd" | "out"; text: string }[] = [{ type: "cmd", text: `$ ${raw.trim()}` }];
    if (cmd === "clear") {
      setLines([]);
      setInput("");
      return;
    }
    const response = TERMINAL_COMMANDS[cmd];
    if (response) {
      const key = cmd as keyof typeof t.about.terminal;
      const joined = (t.about.terminal as Record<string, string>)[key] ?? response.join(" | ");
      next.push({ type: "out", text: joined });
    } else if (cmd) {
      next.push({ type: "out", text: `command not found: ${cmd}. type 'help'.` });
    }
    setLines((prev) => [...prev, ...next]);
    setInput("");
    setTimeout(() => {
      bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
      inputRef.current?.focus();
    }, 50);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") run(input);
  };

  return (
    <div
      className="corner-ticks border border-white/10 bg-[#0D1013] rounded-md overflow-hidden"
      data-cursor-hover
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/8 bg-white/[0.03]">
        <TerminalIcon className="h-3.5 w-3.5 text-[#3DDC84]" aria-hidden="true" />
        <span className="font-mono text-[11px] text-foreground/60">anderson@dev ~ /portfolio</span>
        <div className="ml-auto flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>
      </div>
      <div
        ref={bodyRef}
        className="px-4 py-4 h-44 overflow-y-auto font-mono text-[12.5px] leading-relaxed"
        onClick={() => inputRef.current?.focus()}
        role="region"
        aria-label="Terminal interativo de demonstração"
      >
        {lines.map((l, i) => (
          <div key={i} className={l.type === "cmd" ? "text-foreground" : "text-[#3DDC84]/90"}>
            {l.text}
          </div>
        ))}
        <div className="flex items-center gap-2 text-foreground mt-1">
          <span className="text-[#3DDC84]/70">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            className="flex-1 bg-transparent outline-none placeholder:text-foreground/30"
            placeholder="whoami"
            aria-label="Interactive terminal demo. Commands: whoami, stack, skills, contact, clear, help"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
      <div className="px-4 pb-3 flex flex-wrap items-center gap-2">
        {["whoami", "stack", "skills", "contact", "clear"].map((c) => (
          <button
            key={c}
            onClick={() => run(c)}
            className="font-mono text-[11px] text-foreground/50 border border-white/8 rounded px-2 py-1 hover:text-[#3DDC84] hover:border-[#3DDC84]/40 btn-press transition-colors"
            title={
              c === "whoami"
                ? "Quem sou eu"
                : c === "stack"
                  ? "Minha stack técnica"
                  : c === "skills"
                    ? "Minhas habilidades"
                    : c === "contact"
                      ? "Meus contatos"
                      : "Limpa a tela"
            }
          >
            {c}
          </button>
        ))}
        <span className="ml-auto flex items-center gap-1 font-mono text-[9.5px] text-foreground/30">
          <HelpCircle className="h-3 w-3" aria-hidden="true" /> digite <span className="text-[#3DDC84]/70">help</span>
        </span>
      </div>
    </div>
  );
}
