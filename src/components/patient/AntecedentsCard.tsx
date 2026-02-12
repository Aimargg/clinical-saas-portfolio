import { FileText, Scissors, Syringe, Activity, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AntecedentsData {
  medical: string[];
  surgical: string[];
  vaccinations: string[];
  lifestyle: {
    smoking: string;
    alcohol: string;
    exercise: string;
    diet: string;
  };
  familyHistory: string[];
}

interface AntecedentsCardProps {
  data: AntecedentsData;
}

export function AntecedentsCard({ data }: AntecedentsCardProps) {
  return (
    <div className="card-clinical p-5 hover-lift">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary-light">
          <FileText className="w-4 h-4 text-secondary" />
        </div>
        <h3 className="font-semibold text-foreground">Antecedentes</h3>
      </div>

      <Tabs defaultValue="medical" className="w-full">
        <TabsList className="grid w-full grid-cols-5 h-9 mb-4">
          <TabsTrigger value="medical" className="text-xs">
            <FileText className="w-3.5 h-3.5 mr-1.5" />
            Médicos
          </TabsTrigger>
          <TabsTrigger value="surgical" className="text-xs">
            <Scissors className="w-3.5 h-3.5 mr-1.5" />
            Quirúrgicos
          </TabsTrigger>
          <TabsTrigger value="vaccinations" className="text-xs">
            <Syringe className="w-3.5 h-3.5 mr-1.5" />
            Vacunas
          </TabsTrigger>
          <TabsTrigger value="lifestyle" className="text-xs">
            <Activity className="w-3.5 h-3.5 mr-1.5" />
            Estilo Vida
          </TabsTrigger>
          <TabsTrigger value="family" className="text-xs">
            <Users className="w-3.5 h-3.5 mr-1.5" />
            Familiares
          </TabsTrigger>
        </TabsList>

        <TabsContent value="medical" className="mt-0">
          <div className="flex flex-wrap gap-2">
            {data.medical.map((item, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="surgical" className="mt-0">
          <div className="flex flex-wrap gap-2">
            {data.surgical.map((item, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="vaccinations" className="mt-0">
          <div className="flex flex-wrap gap-2">
            {data.vaccinations.map((item, i) => (
              <Badge key={i} variant="outline" className="text-xs bg-success-light text-success border-success/20">
                {item}
              </Badge>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="lifestyle" className="mt-0">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-xs text-muted-foreground">Tabaco</p>
              <p className="text-sm font-medium">{data.lifestyle.smoking}</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-xs text-muted-foreground">Alcohol</p>
              <p className="text-sm font-medium">{data.lifestyle.alcohol}</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-xs text-muted-foreground">Ejercicio</p>
              <p className="text-sm font-medium">{data.lifestyle.exercise}</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-xs text-muted-foreground">Dieta</p>
              <p className="text-sm font-medium">{data.lifestyle.diet}</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="family" className="mt-0">
          <div className="flex flex-wrap gap-2">
            {data.familyHistory.map((item, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
