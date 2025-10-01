import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "../logo";
import { headerData } from "../config/header-data";
import { Link } from "react-router";

const AuthHeader = () => {
  const isMobile = useIsMobile();
  if (isMobile) return null;
  return (
    <header className="bg-transparent fixed flex justify-between items-center w-full">
      <div className="p-3">
        <Logo complete={true} />
      </div>
      <div className="p-3">
        <ul className="flex gap-4 flex-row font-medium">
          {headerData.map((item) => (
            <li
              className="hover:bg-current/10 p-1  rounded font-monserrat"
              key={item.id}
            >
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default AuthHeader;
