import type { GetServerSideProps, NextPage } from "next";
import { getServerAuthSession } from "../../server/auth";
import type { WithLayout } from "../../layouts";
import { MainAppLayout } from "../../layouts/app/main";
import { Collections } from "../../components/app/homepage/sections/collections";

const AppPage: WithLayout<NextPage> = () => {
  return (
    <>
      <Collections />
    </>
  );
};

AppPage.Layout = MainAppLayout;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
export default AppPage;
