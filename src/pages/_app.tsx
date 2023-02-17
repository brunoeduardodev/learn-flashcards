import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "../utils/api";

import "../styles/globals.css";
import { MainLayout } from "../layouts/main";

import { Inter } from "@next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
