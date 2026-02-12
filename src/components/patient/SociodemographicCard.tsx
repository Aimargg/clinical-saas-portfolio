import { User, Home, MapPin, Phone, Briefcase, Heart } from "lucide-react";

interface SociodemographicData {
  birthDate: string;
  gender: string;
  address: string;
  phone: string;
  occupation: string;
  baselineStatus: string;
  familySituation: string;
  dependencyLevel: string;
}

interface SociodemographicCardProps {
  data: SociodemographicData;
}

const InfoRow = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-3">
    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted shrink-0">
      <Icon className="w-4 h-4 text-muted-foreground" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-medium text-foreground truncate">{value}</p>
    </div>
  </div>
);

export function SociodemographicCard({ data }: SociodemographicCardProps) {
  return (
    <div className="card-clinical p-5 hover-lift">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-light">
          <User className="w-4 h-4 text-primary" />
        </div>
        <h3 className="font-semibold text-foreground">Datos Sociodemográficos</h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <InfoRow
          icon={User}
          label="Fecha de nacimiento"
          value={data.birthDate}
        />
        <InfoRow icon={User} label="Género" value={data.gender} />
        <InfoRow icon={MapPin} label="Dirección" value={data.address} />
        <InfoRow icon={Phone} label="Teléfono" value={data.phone} />
        <InfoRow icon={Briefcase} label="Ocupación" value={data.occupation} />
        <InfoRow icon={Home} label="Situación basal" value={data.baselineStatus} />
        <InfoRow
          icon={Heart}
          label="Situación familiar"
          value={data.familySituation}
        />
        <InfoRow
          icon={User}
          label="Grado dependencia"
          value={data.dependencyLevel}
        />
      </div>
    </div>
  );
}
