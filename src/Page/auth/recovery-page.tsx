import { useRecoverySession } from "@/sections/auth/hooks/use-recovery-session";
import { RecoveryView } from "@/sections/auth/views/recovery-view";


export const RecoveryPage = () => {
  useRecoverySession();
  return (
    <div className="flex min-h-svh w-full items-center bg-[var(--color-custom-secondary)] justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RecoveryView />
      </div>
    </div>
  );
};
export default RecoveryPage;
