import React from "react";
import { LoginForm } from "../components/forms/login-form";
import { AuthCard } from "../components/auth-card";

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
