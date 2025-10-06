import { AuthCard } from "../components/auth-card";
import { RegisterForm } from "../components/forms/register-form";

const RegisterView = () => {
  return (
    <AuthCard
      title="Registrarse"
      description="Establece tus datos para continuar"
    >
      <RegisterForm />
    </AuthCard>
  );
};

export default RegisterView;
