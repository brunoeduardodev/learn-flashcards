import type { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#060B27] to-[#070F3C] font-sans text-white">
      {children}
    </main>
  );
};
