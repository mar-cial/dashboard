import React from "react";
import Link from "next/link";
import { Azeret_Mono } from "@next/font/google";
import Head from "next/head";
import PageHeader from "~/components/pageHeader";

const mainFont = Azeret_Mono({ subsets: ["latin"] });

const Homepage = () => {
  return (
    <div
      className={`flex min-h-screen flex-col gap-6 bg-zinc-900 p-8 text-zinc-200 ${mainFont.className}`}
    >
      <Head>
        <title>Dashboard | Home</title>
      </Head>

      <PageHeader />
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
        <Link href='/dashboard' className="bg-red-500 rounded-md flex justify-center items-center py-2" passHref>Go to dashboard</Link>
      </section>
    </div>
  );
};

export default Homepage;
