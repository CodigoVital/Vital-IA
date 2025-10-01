import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "../logo";

const AuthHeader = () => {
  const isMobile = useIsMobile();
  if (isMobile) return null;
  return (
    <header className="bg-transparent fixed flex justify-between items-center w-full">
      <div className="p-4">
        <Logo complete={true} />
      </div>
      <div className="p-4">
        <ul className="flex gap-4 flex-row">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
          <li>
            <a href="#">Recovery</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AuthHeader;
