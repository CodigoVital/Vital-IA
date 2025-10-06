import React from "react";
import { AuthCard } from "../components/auth-card";
import { LoginForm } from "../components/forms/login-form";

export const LoginView: React.FC = () => {
  return (
    <>
      <AuthCard
        title="Bienvenido"
        description="Por favor inicia sesión en tu cuenta"
      >
        <LoginForm />
      </AuthCard>
    </>
  );
};
