interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const CustomHeader = ({ title, children }: Props) => {
  return (
    <>
      <div className="border-b-1 pb-2 py-3.5">
        <h1 className=" ml-5 text-xl font-bold ">{title}</h1>
        {children}
      </div>
    </>
  );
};
