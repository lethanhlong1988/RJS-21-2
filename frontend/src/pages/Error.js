import { useRouteError } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

import PageContent from "../components/PageContent";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  let title = "An error occurred!!!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }
  
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
export default ErrorPage;
