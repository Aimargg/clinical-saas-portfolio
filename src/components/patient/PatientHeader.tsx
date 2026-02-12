import { Search, Printer, User, Hash, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface PatientHeaderProps {
  patient: {
    name: string;
    nhc: string;
    age: number;
    gender: string;
    birthDate: string;
  };
  onBack?: () => void;
}

export function PatientHeader({ patient, onBack }: PatientHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Patient Info */}
          <div className="flex items-center gap-4">
            {onBack && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onBack}
                className="shrink-0"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
            )}

            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                <User className="w-6 h-6" />
              </div>

              {/* Name & Details */}
              <div>
                <h1 className="text-lg font-semibold text-foreground">
                  {patient.name}
                </h1>
                <div className="flex items-center gap-3 mt-0.5">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Hash className="w-3.5 h-3.5" />
                    <span>NHC: {patient.nhc}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{patient.age} años</span>
                  </div>
                  <Badge variant="secondary" className="text-xs font-medium">
                    {patient.gender}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar en historia..."
                className="w-64 pl-9 h-9 bg-muted/50 border-transparent focus:bg-background focus:border-input"
              />
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Printer className="w-4 h-4" />
              Imprimir
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
