import { Logo } from "../../icons/logo";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { UserMenu } from "./UserMenu";
import { HeaderLogo } from "./HeaderLogo";
import { useDisclosure } from "../../../hooks/useDisclosure";

export const Header = () => {
  const { status, data } = useSession();
  const { isOpen, close, open } = useDisclosure();

  return (
    <header className={"flex w-full items-center justify-between p-4"}>
      <HeaderLogo />

      {status === "authenticated" && data?.user?.image && (
        <img
          className="h-10 w-10 rounded-full border border-white"
          onClick={() => open()}
          src={data.user.image}
          alt={data.user.name || "User"}
          width={40}
          height={40}
        />
      )}

      <UserMenu isOpen={isOpen} onClose={close} />
    </header>
  );
};
