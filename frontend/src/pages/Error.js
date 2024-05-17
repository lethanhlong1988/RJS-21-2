import MainNavigation from "../components/MainNavigation";

import PageContent from "../components/PageContent";

function ErrorPage() {
  let title = "An error occurred!!!";
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>Massage</p>
      </PageContent>
    </>
  );
}
export default ErrorPage;
