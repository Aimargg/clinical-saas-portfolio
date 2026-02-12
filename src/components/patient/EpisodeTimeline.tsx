import { 
  Stethoscope, 
  Building2, 
  Siren, 
  ClipboardList, 
  Lock, 
  Unlock,
  ChevronRight 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type EpisodeType = "primary" | "hospital" | "urgency" | "consult";

interface Episode {
  id: string;
  type: EpisodeType;
  title: string;
  date: string;
  provider: string;
  status: "open" | "closed";
  summary: string;
}

interface EpisodeTimelineProps {
  episodes: Episode[];
}

const episodeConfig: Record<EpisodeType, { icon: React.ElementType; label: string; color: string; borderClass: string }> = {
  primary: {
    icon: Stethoscope,
    label: "Atención Primaria",
    color: "text-episode-primary",
    borderClass: "episode-primary-care",
  },
  hospital: {
    icon: Building2,
    label: "Ingreso Hospitalario",
    color: "text-episode-hospital",
    borderClass: "episode-hospital",
  },
  urgency: {
    icon: Siren,
    label: "Urgencias",
    color: "text-episode-urgency",
    borderClass: "episode-urgency",
  },
  consult: {
    icon: ClipboardList,
    label: "Consulta Externa",
    color: "text-episode-consult",
    borderClass: "episode-consult",
  },
};

export function EpisodeTimeline({ episodes }: EpisodeTimelineProps) {
  return (
    <div className="card-clinical p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-info-light">
            <ClipboardList className="w-4 h-4 text-info" />
          </div>
          <h3 className="font-semibold text-foreground">Timeline de Episodios</h3>
        </div>
        <Badge variant="secondary" className="text-xs">
          {episodes.length} episodios
        </Badge>
      </div>

      <div className="relative space-y-4">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-border" />

        {episodes.map((episode, index) => {
          const config = episodeConfig[episode.type];
          const Icon = config.icon;

          return (
            <div
              key={episode.id}
              className={cn(
                "relative flex gap-4 p-4 rounded-xl bg-card border border-border cursor-pointer transition-all duration-200",
                "hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5",
                config.borderClass
              )}
            >
              {/* Timeline dot */}
              <div className={cn(
                "relative z-10 flex items-center justify-center w-10 h-10 rounded-xl bg-muted shrink-0",
                episode.status === "open" && "bg-success-light"
              )}>
                <Icon className={cn("w-5 h-5", config.color)} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-foreground">
                        {episode.title}
                      </h4>
                      <Badge
                        variant={episode.status === "open" ? "default" : "secondary"}
                        className={cn(
                          "text-xs",
                          episode.status === "open" 
                            ? "bg-success text-success-foreground" 
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {episode.status === "open" ? (
                          <Unlock className="w-3 h-3 mr-1" />
                        ) : (
                          <Lock className="w-3 h-3 mr-1" />
                        )}
                        {episode.status === "open" ? "Abierto" : "Cerrado"}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {config.label} • {episode.date}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
                </div>

                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {episode.summary}
                </p>

                <p className="text-xs text-muted-foreground mt-2">
                  Profesional: {episode.provider}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
