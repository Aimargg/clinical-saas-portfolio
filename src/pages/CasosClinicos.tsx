import { MainLayout } from "@/components/layout/MainLayout";
import { FolderHeart, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const mockCases = [
  {
    id: 1,
    title: "Síndrome Coronario Agudo",
    specialty: "Cardiología",
    difficulty: "Avanzado",
    author: "Prof. García",
    students: 24,
  },
  {
    id: 2,
    title: "Diabetes descompensada",
    specialty: "Endocrinología",
    difficulty: "Intermedio",
    author: "Prof. Martínez",
    students: 18,
  },
  {
    id: 3,
    title: "Neumonía adquirida en la comunidad",
    specialty: "Neumología",
    difficulty: "Básico",
    author: "Prof. López",
    students: 32,
  },
];

const CasosClinicos = () => {
  return (
    <MainLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">
              Casos Clínicos
            </h1>
            <p className="text-muted-foreground">
              Explora y trabaja en casos clínicos asignados
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Nuevo Caso
          </Button>
        </div>

        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar casos..."
            className="pl-9"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockCases.map((caso) => (
            <div
              key={caso.id}
              className="card-clinical p-5 hover-lift cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light">
                  <FolderHeart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{caso.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {caso.specialty}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="text-xs">
                  {caso.difficulty}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {caso.students} estudiantes
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Creado por {caso.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default CasosClinicos;
