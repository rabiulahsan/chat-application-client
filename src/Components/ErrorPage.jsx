import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  //   console.log(status);
  console.log(error);
  return <div className="">error page</div>;
};

export default ErrorPage;
