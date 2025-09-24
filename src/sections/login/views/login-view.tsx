import React from "react";
import { LoginForm } from "../components/login-form";
import { AuthCard } from "../components/auth-card";

export const LoginView: React.FC = () => {
  return (
    <>
      <AuthCard title="Welcome Back" description="Please login to your account">
        <LoginForm />
      </AuthCard>
    </>
  );
};
