interface Props {
  title: string;
}

export const CustomHeader = ({ title }: Props) => {
  return (
    <>
      <div className="border-b-1 pb-2 py-3.5">
        <h1 className=" ml-5 text-xl font-bold ">{title}</h1>
      </div>
    </>
  );
};
