type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  return (
    <div className="bg-white p-3 rounded">
      <h5>Status : {props.status}</h5>
      {(() => {
        if (props.status === "loading")
          return (
            <div className="bg-yellow-100 rounded text-yellow-900 px-3">
              Loading...
            </div>
          );
        else if (props.status === "success")
          return (
            <div className="bg-green-100 rounded text-green-900 px-3">Success</div>
          );
        return <div className="bg-red-100 rounded text-red-900 px-3">Error</div>;
      })()}
    </div>
  );
};
