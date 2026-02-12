import { PatientHeader } from "./PatientHeader";
import { AlertCard } from "./AlertCard";
import { SociodemographicCard } from "./SociodemographicCard";
import { AntecedentsCard } from "./AntecedentsCard";
import { EpisodeTimeline } from "./EpisodeTimeline";
import { ProgressCard } from "./ProgressCard";

// Mock data - in production this would come from Supabase
const mockPatient = {
  name: "María García López",
  nhc: "2024-001234",
  age: 67,
  gender: "Femenino",
  birthDate: "15/03/1957",
};

const mockAllergies = ["Penicilina", "Metamizol", "Látex"];

const mockSociodemographic = {
  birthDate: "15/03/1957",
  gender: "Femenino",
  address: "C/ Mayor 45, 2º B, Pamplona",
  phone: "948 123 456",
  occupation: "Jubilada (ex-administrativa)",
  baselineStatus: "Domicilio familiar",
  familySituation: "Vive con su marido",
  dependencyLevel: "Independiente (Barthel 100)",
};

const mockAntecedents = {
  medical: [
    "Hipertensión arterial",
    "Diabetes Mellitus tipo 2",
    "Dislipemia",
    "Artrosis de rodilla bilateral",
    "Hipotiroidismo",
  ],
  surgical: [
    "Apendicectomía (1985)",
    "Colecistectomía laparoscópica (2010)",
    "Prótesis de rodilla derecha (2019)",
  ],
  vaccinations: [
    "COVID-19 (3 dosis)",
    "Gripe 2023-24",
    "Neumococo",
    "Tétanos",
  ],
  lifestyle: {
    smoking: "Exfumadora (dejó hace 10 años)",
    alcohol: "Consumo ocasional",
    exercise: "Camina 30 min/día",
    diet: "Mediterránea, baja en sal",
  },
  familyHistory: [
    "Padre: IAM a los 65 años",
    "Madre: DM2, fallecida a los 82",
    "Hermano: Hipertensión",
  ],
};

const mockEpisodes = [
  {
    id: "1",
    type: "urgency" as const,
    title: "Dolor torácico atípico",
    date: "28/01/2024",
    provider: "Dr. Martínez (Urgencias)",
    status: "open" as const,
    summary: "Paciente acude por dolor torácico de 2 horas de evolución. ECG normal, troponinas negativas. Pendiente de valoración por cardiología.",
  },
  {
    id: "2",
    type: "consult" as const,
    title: "Revisión Endocrinología",
    date: "15/01/2024",
    provider: "Dra. Fernández (Endocrino)",
    status: "closed" as const,
    summary: "Control de diabetes. HbA1c 7.2%. Ajuste de tratamiento con Metformina 850mg/12h.",
  },
  {
    id: "3",
    type: "primary" as const,
    title: "Control hipertensión",
    date: "08/01/2024",
    provider: "Dr. López (CAP Iturrama)",
    status: "closed" as const,
    summary: "TA 145/85. Buen cumplimiento terapéutico. Se mantiene Enalapril 20mg.",
  },
  {
    id: "4",
    type: "hospital" as const,
    title: "Ingreso por neumonía",
    date: "10/11/2023",
    provider: "Dr. Ruiz (Medicina Interna)",
    status: "closed" as const,
    summary: "Neumonía adquirida en la comunidad. Tratamiento con Levofloxacino 500mg/24h x 7 días. Evolución favorable. Alta a domicilio.",
  },
];

const mockProgress = [
  { label: "Datos personales", completed: 8, total: 8 },
  { label: "Antecedentes", completed: 12, total: 15 },
  { label: "Episodios", completed: 4, total: 4 },
  { label: "Medicación", completed: 5, total: 6 },
  { label: "Valoración enfermería", completed: 3, total: 10 },
  { label: "Plan de cuidados", completed: 0, total: 8 },
];

export function PatientDashboard() {
  return (
    <div className="min-h-screen">
      <PatientHeader patient={mockPatient} />

      <div className="p-6 space-y-6">
        {/* Top Row - Alerts & Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AlertCard
              allergies={mockAllergies}
              lastWishes="Documento de voluntades anticipadas registrado el 10/05/2022. No desea medidas de soporte vital extraordinarias."
            />
          </div>
          <div>
            <ProgressCard sections={mockProgress} />
          </div>
        </div>

        {/* Middle Row - Demographics & Antecedents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SociodemographicCard data={mockSociodemographic} />
          <AntecedentsCard data={mockAntecedents} />
        </div>

        {/* Bottom - Episode Timeline */}
        <EpisodeTimeline episodes={mockEpisodes} />
      </div>
    </div>
  );
}
