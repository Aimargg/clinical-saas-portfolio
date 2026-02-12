import { Stethoscope, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  onSearch?: () => void;
}

export function EmptyState({ onSearch }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      {/* Illustration */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-150" />
        <div className="relative flex items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-border">
          <Stethoscope className="w-16 h-16 text-primary" />
        </div>
      </div>

      {/* Text */}
      <h2 className="text-2xl font-semibold text-foreground mb-2">
        Bienvenido a tu Historia Clínica
      </h2>
      <p className="text-muted-foreground max-w-md mb-6">
        Selecciona un paciente para comenzar tu investigación clínica y explorar
        su historia médica completa.
      </p>

      {/* Action */}
      <Button onClick={onSearch} className="gap-2">
        <Search className="w-4 h-4" />
        Buscar Paciente
      </Button>

      {/* Tips */}
      <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
        {[
          {
            title: "Explora episodios",
            description: "Navega por el timeline de atenciones del paciente",
          },
          {
            title: "Revisa antecedentes",
            description: "Consulta historial médico, quirúrgico y familiar",
          },
          {
            title: "Documenta hallazgos",
            description: "Añade notas y observaciones a cada episodio",
          },
        ].map((tip, i) => (
          <div key={i} className="p-4 rounded-xl bg-card border border-border">
            <h4 className="font-medium text-foreground text-sm mb-1">
              {tip.title}
            </h4>
            <p className="text-xs text-muted-foreground">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
