import ReactNode from "react";

const Props = {
  children: ReactNode,
};
const Alert = ({ children } = Props) => {
  return (
    <>
      <div className="alert alert-primary mt-5" role="alert">
        {children}
      </div>
      <div className="alert alert-secondary mt-1" role="alert">
        {children}
      </div>
      <div className="alert alert-danger mt-1" role="alert">
        {children}
      </div>
    </>
  );
};

export default Alert;
