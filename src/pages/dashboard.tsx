import Head from "next/head";
import { Azeret_Mono } from "@next/font/google";
import PageHeader from "~/components/pageHeader";
import { GetServerSideProps } from "next";

const mainFont = Azeret_Mono({ subsets: ["latin"] });


const DashboardPage = () => {
  return (
    <div
      className={`flex min-h-screen flex-col gap-6 bg-zinc-900 p-8 text-zinc-200 ${mainFont.className}`}
    >
      <PageHeader />
      <Head>
        <title>Dashboard | Control panel</title>
      </Head>

      <section>
        <h2>Hello</h2>
        <p>Welcome to your dashboard.</p>
      </section>

      <div>
        
      </div>
    </div>
  );
};

export default DashboardPage;
