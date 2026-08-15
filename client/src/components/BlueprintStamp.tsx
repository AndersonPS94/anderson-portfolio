/* BLUEPRINT OBSIDIAN — selo técnico de marca "A.": cantoneiras de desenho
   técnico com pontuação verde Kotlin, reutilizável em hero, seções e footer. */
export default function BlueprintStamp({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex h-9 w-9 items-center justify-center font-mono text-sm font-bold text-foreground/90 ${className}`}
      aria-hidden="true"
    >
      {/* cantoneiras de blueprint */}
      <span className="absolute -top-0.5 -left-0.5 h-2.5 w-2.5 border-t border-l border-[#3DDC84]/60" />
      <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 border-b border-r border-[#3DDC84]/60" />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        A<span className="text-[#3DDC84]">.</span>
      </span>
    </span>
  );
}
