import { LoginView } from "@/sections/login/views/login-view";

export const RecoveryPage = () => {
  return (
    <div className="flex min-h-svh w-full items-center bg-[var(--color-custom-secondary)] justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginView />
      </div>
    </div>
  );
};
export default RecoveryPage;
