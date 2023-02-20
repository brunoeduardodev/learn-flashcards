import { Logo } from "../../icons";
import Link from "next/link";
import { useSession } from "next-auth/react";

export const HeaderLogo = () => {
  const { status } = useSession();

  return (
    <Link href={status === "authenticated" ? "/app" : "/"}>
      <Logo />
    </Link>
  );
};
