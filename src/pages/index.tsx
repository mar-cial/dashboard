import React from "react";
import Link from "next/link";
import Head from "next/head";
import PageLayout from "~/components/pageLayout";

const Homepage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Dashboard | Home</title>
      </Head>

      <main className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">Welcome to dashboard.</h1>
        <p>
          In this project I am going to make a full stack application with the
          following:
        </p>

        <ul>
          <li>NextJs</li>
          <li>Supabase</li>
          <li>Typescript</li>
          <li>Postgres</li>
          <li>Tailwindcss</li>
        </ul>
      </main>

      <section>
        <Link
          href="/account"
          className="flex items-center justify-center rounded-md bg-red-500 py-2"
          passHref
        >
          Log in
        </Link>
      </section>
    </PageLayout>
  );
};

export default Homepage;
