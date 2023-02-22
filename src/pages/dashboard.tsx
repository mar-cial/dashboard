import Head from "next/head";
import PageLayout from "~/components/pageLayout";


const DashboardPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Dashboard | Control panel</title>
      </Head>

      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">Hello</h2>
        <p>Welcome to your dashboard.</p>
      </section>

      <div></div>
    </PageLayout>
  );
};

export default DashboardPage;
