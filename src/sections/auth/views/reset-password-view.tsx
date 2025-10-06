import { AuthCard } from "../components/auth-card";
import ResetPasswordForm from "../components/forms/reset-password-form";

const ResetPasswordView = () => {
  return (
    <AuthCard
      title="Registrarse"
      description="Establece tus datos para continuar"
    >
      <ResetPasswordForm />
    </AuthCard>
  );
};

export default ResetPasswordView;
