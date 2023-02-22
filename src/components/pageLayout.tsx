import { ReactNode } from "react";
const mainFont = Azeret_Mono({ subsets: ["latin"] });
import { Azeret_Mono } from "@next/font/google";
import PageHeader from "~/components/pageHeader";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`flex min-h-screen flex-col gap-6 bg-zinc-900 p-8 text-zinc-200 ${mainFont.className}`}
    >
      <PageHeader />
      {children}
    </div>
  );
};

export default PageLayout;
