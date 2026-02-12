import { MainLayout } from "@/components/layout/MainLayout";
import { BookOpen, FileText, Video, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const resources = [
  {
    id: 1,
    title: "Guía de Exploración Física",
    type: "PDF",
    icon: FileText,
    category: "Semiología",
    downloads: 156,
  },
  {
    id: 2,
    title: "Anamnesis estructurada",
    type: "Video",
    icon: Video,
    category: "Comunicación",
    downloads: 89,
  },
  {
    id: 3,
    title: "Escalas de valoración enfermería",
    type: "PDF",
    icon: FileText,
    category: "Enfermería",
    downloads: 234,
  },
];

const RecursosDocentes = () => {
  return (
    <MainLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-foreground">
            Recursos Docentes
          </h1>
          <p className="text-muted-foreground">
            Material de apoyo para el aprendizaje clínico
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.id}
                className="card-clinical p-5 hover-lift"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary-light">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {resource.type}
                  </Badge>
                </div>
                <h3 className="font-medium text-foreground mb-1">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {resource.category}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {resource.downloads} descargas
                  </span>
                  <Button variant="ghost" size="sm" className="gap-1.5">
                    <Download className="w-3.5 h-3.5" />
                    Descargar
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default RecursosDocentes;
