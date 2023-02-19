import { cva, cx } from "class-variance-authority";
import type { ComponentProps } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa";
import { signIn } from "next-auth/react";

type SocialTarget = "google" | "discord";

type Props = {
  target: SocialTarget;
} & ComponentProps<"button">;

const styles = cva(
  "flex w-full items-center gap-3 rounded-md px-6 py-3 pl-4 font-bold ransition-colors ",
  {
    variants: {
      target: {
        google: "bg-white hover:bg-opacity-90 active:bg-opacity-80 text-black",
        discord:
          "text-white bg-discord-500 hover:bg-discord-600 active:bg-discord-700",
      },
    },
  }
);

const TargetInfo = {
  google: {
    Icon: FcGoogle,
    text: "Continue with Google",
    provider: "google",
  },
  discord: {
    Icon: FaDiscord,
    text: "Continue with Discord",
    provider: "discord",
  },
} as const;

export const SocialLoginButton = ({ target, className, ...props }: Props) => {
  const { text, Icon, provider } = TargetInfo[target];

  return (
    <button
      className={cx(className, styles({ target }))}
      {...props}
      onClick={() => {
        void signIn(provider);
      }}
    >
      <Icon className={`h-auto w-6`} />
      {text}
    </button>
  );
};
