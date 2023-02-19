import type { ReactNode } from "react";
import { MainLayout } from "../main";
import { Header } from "../../components/app/header";

type MainAppLayoutProps = {
  children: ReactNode;
};
export const MainAppLayout = ({ children }: MainAppLayoutProps) => {
  return (
    <MainLayout>
      <div className="flex h-full w-full flex-col items-center">
        <Header />
        {children}
      </div>
    </MainLayout>
  );
};
