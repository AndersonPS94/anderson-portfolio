/* BLUEPRINT OBSIDIAN — Case study de projeto em dialog premium: contexto, problema,
   solução, fluxo de arquitetura e tecnologias. Sem métricas inventadas. */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/siteData";
import { LINKS } from "@/lib/siteData";
import { useLocale } from "@/contexts/LocaleContext";

type Props = {
  project: Project | null;
  onClose: () => void;
};

function Field({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-[#3DDC84]/80 mb-1.5">
        {label}
      </div>
      <p className="text-[14px] leading-relaxed text-foreground/85">{text}</p>
    </div>
  );
}

const PC_KEY: Record<string, keyof NonNullable<ReturnType<typeof useLocale>["t"]>["projectCards"]> = {
  parkly: "parkly",
  scango: "scango",
  "task-engine": "taskEngine",
  cashly: "cashly",
};

export default function ProjectDialog({ project, onClose }: Props) {
  const { t } = useLocale();
  const card = project ? (t.projectCards as Record<string, typeof t.projectCards.parkly>)[PC_KEY[project.id] ?? project.id] : undefined;
  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-[#0D1013] border-white/12 p-0 gap-0">
        {project && card && (
          <>
            <div className="relative border-b border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1013] via-[#0D1013]/30 to-transparent z-10" />
              <img
                src={project.image}
                alt={`${project.name} — visual`}
                className="w-full h-52 sm:h-64 object-cover"
              />
              <div className="absolute bottom-4 left-6 z-20">
                <span className="font-mono text-[11px] text-[#3DDC84]/90">
                  {t.projects.projectLabel} {project.number}
                </span>
                <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                  {project.name}
                </DialogTitle>
                <DialogDescription className="text-[13px] text-white/70 mt-1">
                  {card.tagline}
                </DialogDescription>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-7">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label={t.projectDialog.context} text={card.context} />
                <Field label={t.projectDialog.problem} text={card.problem} />
              </div>
              <Field label={t.projectDialog.solution} text={card.solution} />

              {/* Arquitetura */}
              <div>
                <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-[#3DDC84]/80 mb-3">
                  {t.projectDialog.architecture}
                </div>
                <ol className="space-y-1.5">
                  {project.architecture.map((layer, i) => (
                    <li key={layer} className="flex items-center gap-3">
                      <span className="flex h-7 min-w-7 items-center justify-center rounded border border-[#3DDC84]/30 bg-[#3DDC84]/[0.07] font-mono text-[11px] text-[#3DDC84]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[13.5px] text-foreground/85">{layer}</span>
                      {i < project.architecture.length - 1 && (
                        <span className="text-foreground/30 text-[11px]">↓</span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-[#3DDC84]/80 mb-2.5">
                    {t.projectDialog.technologies}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {card.technologies.split(" · ").map((tc) => (
                      <span
                        key={tc}
                        className="font-mono text-[11px] text-[#3DDC84] border border-[#3DDC84]/20 bg-[#3DDC84]/[0.06] rounded px-2.5 py-1.5"
                      >
                        {tc}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-[#3DDC84]/80 mb-2.5">
                    {t.projectDialog.result}
                  </div>
                  <p className="text-[13.5px] leading-relaxed text-foreground/85">
                    {card.result}
                  </p>
                </div>
              </div>

              {(project.playStore || project.githubRepo) && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-[#3DDC84] text-[#0A0C0E] font-semibold text-[13px] px-4 py-2.5 btn-press hover:bg-[#4be891]"
                    >
                      {t.projectDialog.viewPlayStore}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.githubRepo && (
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-white/12 px-4 py-2.5 text-[13px] btn-press hover:border-[#3DDC84]/40 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                      </svg>
                      {t.projectDialog.viewRepo}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
