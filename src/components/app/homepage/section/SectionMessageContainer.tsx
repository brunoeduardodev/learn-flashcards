import type { ReactNode } from "react";

type SectionMessageContainerProps = {
  children: ReactNode;
};

export const SectionMessageContainer = ({
  children,
}: SectionMessageContainerProps) => {
  return (
    <div className="flex bg-white bg-opacity-10 p-2 font-bold">{children}</div>
  );
};
