import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const SectionTitle = ({ children }: Props) => {
  return <h3 className={"text-2xl font-bold"}>{children}</h3>;
};
