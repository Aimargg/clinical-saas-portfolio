import { TrendingUp, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressSection {
  label: string;
  completed: number;
  total: number;
}

interface ProgressCardProps {
  sections: ProgressSection[];
}

export function ProgressCard({ sections }: ProgressCardProps) {
  const totalCompleted = sections.reduce((acc, s) => acc + s.completed, 0);
  const totalItems = sections.reduce((acc, s) => acc + s.total, 0);
  const percentage = Math.round((totalCompleted / totalItems) * 100);

  return (
    <div className="card-clinical p-5 hover-lift">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-success-light">
            <TrendingUp className="w-4 h-4 text-success" />
          </div>
          <h3 className="font-semibold text-foreground">
            Completitud de Historia
          </h3>
        </div>
        <span className="text-2xl font-bold text-gradient-primary">
          {percentage}%
        </span>
      </div>

      {/* Main Progress Bar */}
      <div className="progress-clinical mb-4">
        <div
          className="progress-clinical-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Section Breakdown */}
      <div className="grid grid-cols-2 gap-3">
        {sections.map((section, index) => {
          const sectionPct = Math.round((section.completed / section.total) * 100);
          const isComplete = sectionPct === 100;

          return (
            <div
              key={index}
              className={cn(
                "flex items-center gap-2 p-2.5 rounded-lg",
                isComplete ? "bg-success-light" : "bg-muted/50"
              )}
            >
              <CheckCircle2
                className={cn(
                  "w-4 h-4 shrink-0",
                  isComplete ? "text-success" : "text-muted-foreground"
                )}
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-foreground truncate">
                  {section.label}
                </p>
                <p className="text-xs text-muted-foreground">
                  {section.completed}/{section.total}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
