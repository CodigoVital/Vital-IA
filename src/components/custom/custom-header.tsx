import { useIsMobile } from "@/hooks/use-mobile";

interface Props {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export const CustomHeader = ({ title, children, className }: Props) => {
  const isMobile = useIsMobile();
  return (
    <>
      <div
        className={`border-b-3 pb-2 py-3.5  ${className} ${
          isMobile ? "flex items-center  bg-[var(--sidebar)]" : ""
        }`}
      >
        <h1 className="ml-5 text-xl font-lato font-bold text-primary-custom-text  ">
          {title}
        </h1>
        {children}
      </div>
    </>
  );
};
