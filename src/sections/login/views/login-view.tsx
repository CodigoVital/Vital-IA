import React from "react";
import { LoginForm } from "../components/login-form";
import { AuthCard } from "../components/auth-card";

export const LoginView: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6">
        <AuthCard
          title="Welcome Back"
          description="Please login to your account"
        >
          <LoginForm />
        </AuthCard>
      </div>
    </div>
  );
};
