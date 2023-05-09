type OscarProps = {
  children: React.ReactElement; //or you can use this for general "React.ReactNode"
};

export const Oscar = (props: OscarProps) => {
  return (
    <div className="border rounded relative border-gray-600 py-4 px-2">
      <h1 className="absolute -top-3 bg-gray-600 text-white px-3 rounded">the winner of oscar is.....</h1>
      {props.children}
    </div>
  );
};
