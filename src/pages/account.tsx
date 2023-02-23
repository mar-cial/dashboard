import Head from "next/head";
import PageLayout from "~/components/pageLayout";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from '~/components/account'

const AccountPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <PageLayout>
      <Head>
        <title>Dashboard | Account</title>
      </Head>

      <section>
        <h2 className="text-3xl font-semibold">Log in</h2>
      </section>

      {!session ? (
        <Auth
          providers={["apple", "facebook", "github", "google"]}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <Account session={session} />
      )}
    </PageLayout>
  );
};

export default AccountPage;
