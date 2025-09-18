import { useIsMobile } from "@/hooks/use-mobile";

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const CustomHeader = ({ title, children }: Props) => {
  const isMobile = useIsMobile();
  return (
    <>
      <div
        className={`border-b-1 pb-2 py-3.5 ${
          isMobile ? "flex items-center  bg-[var(--sidebar)]" : ""
        }`}
      >
        <h1 className=" ml-5 text-xl font-bold ">{title}</h1>
        {children}
      </div>
    </>
  );
};
