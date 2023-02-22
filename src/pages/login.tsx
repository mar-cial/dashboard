import Head from "next/head";
import PageLayout from "~/components/pageLayout";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const LoginPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <PageLayout>
      <Head>
        <title>Dashboard | Login</title>
      </Head>

      <section>
        <h2 className="text-3xl font-semibold">Log in</h2>
      </section>

      {!session ? (
        <Auth
            supabaseClient={supabase}
            appearance={{theme: ThemeSupa}}
            theme="dark"
        />
      ): <div>Logged in.</div>}
    </PageLayout>
  );
};

export default LoginPage;
