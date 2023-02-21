import { signOut, useSession } from "next-auth/react";
import { cva, cx } from "class-variance-authority";
import { FiX } from "react-icons/fi";
import { Button } from "../../button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const containerStyles = cva(
  "absolute top-0 flex w-[320px] flex-col bg-indigo-900 z-10 transition-all duration-300 ease-in-out h-[100svh]",
  {
    variants: {
      open: {
        true: "right-0",
        false: "right-[-320px]",
      },
    },
  }
);

export const UserMenu = ({ isOpen, onClose }: Props) => {
  const session = useSession();

  return (
    <>
      {isOpen && (
        <div className="absolute inset-0 h-[100svh]" onClick={onClose}></div>
      )}
      <div className={containerStyles({ open: isOpen })}>
        {isOpen && (
          <>
            <button
              className="absolute right-4 top-4 flex items-center justify-center text-white"
              onClick={onClose}
            >
              <FiX className={"h-6 w-6"} />
            </button>

            {session.data && (
              <div className="flex items-center gap-4 p-6">
                <img
                  className="h-10 w-10 rounded-full border border-white"
                  src={session.data.user.image || ""}
                  alt={session.data.user.name || "User"}
                  width={40}
                  height={40}
                />
                <div className="flex flex-col">
                  <h1 className="font-bold text-white">
                    {session.data.user.name}
                  </h1>
                </div>
              </div>
            )}
            <Button
              className={"mt-auto"}
              size={"md"}
              align={"center"}
              color={"opacity"}
              onClick={() => void signOut()}
            >
              Logout
            </Button>
          </>
        )}
      </div>
    </>
  );
};
