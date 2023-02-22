import Head from "next/head";
import { Azeret_Mono } from "@next/font/google";
import PageHeader from "~/components/pageHeader";

const mainFont = Azeret_Mono({ subsets: ["latin"] });
const DashboardPage = () => {
  return (
    <div
      className={`flex flex-col gap-6 min-h-screen bg-zinc-900 text-zinc-200 p-8 ${mainFont.className}`}
    >
      <PageHeader />
      <Head>
        <title>Dashboard | Control panel</title>
      </Head>

      <section>
        <h2>Hello</h2>
        <p>Welcome to your dashboard.</p>
      </section>
    </div>
  );
};

export default DashboardPage;
