import Logo from "../logo";

const AuthHeader = () => {
  return (
    <header className="bg-transparent  fixed ">
      <div className="flex items-center p-4 ">
        <Logo complete={true} />
      </div>
    </header>
  );
};

export default AuthHeader;
