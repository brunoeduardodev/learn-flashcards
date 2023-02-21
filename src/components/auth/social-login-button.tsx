import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa";
import type { ButtonProps } from "../button";
import { Button } from "../button";
import { signIn } from "next-auth/react";

type SocialTarget = "google" | "discord";

type Props = {
  target: SocialTarget;
} & ButtonProps;

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
    <Button
      {...props}
      size={"md"}
      color={provider}
      Icon={Icon}
      className={className}
      onClick={() => void signIn(provider)}
    >
      {text}
    </Button>
  );
};
