/* BLUEPRINT OBSIDIAN — Toggle de efeitos sonoros (footer).
   Mono + rotulado como "SFX" para manter a estética de instrumentação. */
import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { isSoundEnabled, setSoundEnabled, playClick } from "@/lib/sounds";
import { useLocale } from "@/contexts/LocaleContext";

export default function SoundToggle() {
  const { t } = useLocale();
  const [enabled, setEnabled] = useState(() =>
    typeof window !== "undefined" ? isSoundEnabled() : true,
  );

  useEffect(() => {
    setEnabled(isSoundEnabled());
  }, []);

  const toggle = () => {
    const next = !enabled;
    setSoundEnabled(next);
    setEnabled(next);
    if (next) playClick();
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? t.footer.sfxOff : t.footer.sfxOn}
      data-sound-hover="off"
      className="inline-flex items-center gap-1.5 font-mono text-[10.5px] tracking-[0.15em] uppercase text-foreground/70 border border-white/10 rounded px-2.5 py-1.5 btn-press hover:border-[#3DDC84]/40 hover:text-foreground/70 transition-colors"
    >
      {enabled ? (
        <Volume2 className="h-3 w-3 text-[#3DDC84]/70" aria-hidden="true" />
      ) : (
        <VolumeX className="h-3 w-3" aria-hidden="true" />
      )}
      SFX {enabled ? t.footer.sfxOn : t.footer.sfxOff}
    </button>
  );
}
