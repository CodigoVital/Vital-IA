import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "../logo";

const AuthHeader = () => {
  const isMobile = useIsMobile();
  if (isMobile) return null;
  return (
    <header className="bg-transparent  fixed ">
      <div className="flex items-center p-4 ">
        <Logo complete={true} />
      </div>
    </header>
  );
};

export default AuthHeader;
