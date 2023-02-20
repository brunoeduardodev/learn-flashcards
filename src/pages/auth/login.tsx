import type { NextPage } from "next";
import { SocialLoginButton } from "../../components/auth/social-login-button";
import type { WithLayout } from "../../layouts";
import { MainAppLayout } from "../../layouts/app/main";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage: WithLayout<NextPage> = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      void router.replace("/app");
    }
  }, [session.status, router]);
  return (
    <>
      <div
        className={
          "align-center mt-16 flex w-full flex-col gap-10 px-8 text-center"
        }
      >
        <h1 className={"text-4xl font-bold"}>Sign In</h1>

        <div className="flex flex-col gap-6">
          <SocialLoginButton target={"google"} />
          <SocialLoginButton target={"discord"} />
        </div>
      </div>
    </>
  );
};

LoginPage.Layout = MainAppLayout;

export default LoginPage;
