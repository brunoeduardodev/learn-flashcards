import type { GetServerSideProps } from "next";
import { getServerAuthSession } from "../../server/auth";

const AppPage = () => {
  return <h1>You are logged in!</h1>;
};
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
