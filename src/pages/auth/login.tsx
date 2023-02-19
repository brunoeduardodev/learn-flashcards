import type { NextPage } from "next";
import { SocialLoginButton } from "../../components/auth/social-login-button";

const LoginPage: NextPage = () => {
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

export default LoginPage;
