import { Logo } from "../icons/logo";
import { useSession } from "next-auth/react";
import Image from "next/image";

export const Header = () => {
  const { status, data } = useSession();

  return (
    <header className={"p flex w-full items-center justify-between p-4"}>
      <Logo />
      {status === "authenticated" && data?.user?.image && (
        <img
          className="h-10 w-10 rounded-full border border-white"
          src={data.user.image}
          alt={data.user.name || "User"}
          width={40}
          height={40}
        />
      )}
    </header>
  );
};
