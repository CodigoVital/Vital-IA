
import RegisterView from "@/sections/login/views/register-view";

export const RegisterPage = () => {
  return (
    <div className="flex min-h-svh w-full items-center bg-[var(--color-custom-secondary)] justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RegisterView />
      </div>
    </div>
  );
};
export default RegisterPage;
