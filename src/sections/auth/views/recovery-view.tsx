import React from "react";
import { AuthCard } from "../components/auth-card";
import { RecoveryForm } from "../components/forms/recovery-form";

export const RecoveryView: React.FC = () => {
  return (
    <>
      <AuthCard
        title="Recuperar contraseña"
        description="Escribe tu correo electrónico para continua"
      >
        <RecoveryForm />
      </AuthCard>
    </>
  );
};
