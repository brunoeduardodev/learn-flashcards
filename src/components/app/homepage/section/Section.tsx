import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  return <section className="flex flex-col gap-2">{children}</section>;
};
