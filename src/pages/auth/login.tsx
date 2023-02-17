import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPage: NextPage = () => {
  return (
    <>
      <main className={"align-center mt-16 flex flex-col gap-10 text-center"}>
        <h1 className={"text-4xl font-bold"}>Sign In</h1>

        <div className="flex w-full flex-col gap-6">
          <button
            className={
              "flex w-full items-center gap-3 rounded-md bg-discord-500 px-6 py-3 pl-4 font-bold text-white transition-colors hover:bg-discord-600 active:bg-discord-700"
            }
            onClick={() => {
              void signIn("discord");
            }}
          >
            <FaDiscord className={"h-auto w-6"} />
            Continue with Discord
          </button>

          <button
            className={
              "flex w-full items-center gap-3 rounded-md bg-white px-6 py-3 pl-4 font-bold text-black transition-colors hover:bg-opacity-90 active:bg-opacity-80"
            }
            onClick={() => {
              void signIn("discord");
            }}
          >
            <FcGoogle className={"h-auto w-6"} />
            Continue with Google
          </button>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
