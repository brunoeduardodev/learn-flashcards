import type { ReactNode } from "react";

type SectionContentProps = {
  children: ReactNode;
};

export const SectionContent = ({ children }: SectionContentProps) => {
  return <div className="flex flex-wrap items-center gap-4">{children}</div>;
};
