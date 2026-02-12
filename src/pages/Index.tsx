import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PatientDashboard } from "@/components/patient/PatientDashboard";
import { EmptyState } from "@/components/patient/EmptyState";

const Index = () => {
  // In production, this would be managed by route params or global state
  const [hasSelectedPatient, setHasSelectedPatient] = useState(true);

  return (
    <MainLayout>
      {hasSelectedPatient ? (
        <PatientDashboard />
      ) : (
        <EmptyState onSearch={() => setHasSelectedPatient(true)} />
      )}
    </MainLayout>
  );
};

export default Index;
