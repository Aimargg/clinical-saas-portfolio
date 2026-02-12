import { AlertTriangle, Heart, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertCardProps {
  allergies: string[];
  lastWishes?: string;
}

export function AlertCard({ allergies, lastWishes }: AlertCardProps) {
  return (
    <div className="card-clinical p-5 border-l-4 border-l-clinical-allergy">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-clinical-allergy-light">
          <AlertTriangle className="w-4 h-4 text-clinical-allergy" />
        </div>
        <h3 className="font-semibold text-foreground">Alertas Vitales</h3>
      </div>

      {/* Allergies */}
      <div className="space-y-3">
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
            Alergias
          </p>
          <div className="flex flex-wrap gap-2">
            {allergies.length > 0 ? (
              allergies.map((allergy, index) => (
                <span
                  key={index}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-sm font-medium",
                    "bg-clinical-allergy-light text-clinical-allergy"
                  )}
                >
                  <AlertTriangle className="w-3 h-3" />
                  {allergy}
                </span>
              ))
            ) : (
              <span className="text-sm text-muted-foreground">
                Sin alergias conocidas
              </span>
            )}
          </div>
        </div>

        {/* Last Wishes */}
        {lastWishes && (
          <div className="pt-3 border-t border-border">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
              Últimas Voluntades
            </p>
            <div className="flex items-start gap-2 p-3 rounded-lg bg-warning-light">
              <FileText className="w-4 h-4 text-warning shrink-0 mt-0.5" />
              <p className="text-sm text-warning-foreground">{lastWishes}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
