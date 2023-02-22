import Link from "next/link";
import { MdHome, MdDashboard, MdLogin, MdLogout } from "react-icons/md";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Azeret_Mono } from "@next/font/google";

const mainFont = Azeret_Mono({ subsets: ["latin"] });

const PageHeader = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <header
      className={`flex justify-between ${mainFont.className} items-center rounded-md bg-zinc-800 p-2`}
    >
      <h1 className="text-sm">Dashboard</h1>

      <nav className="flex gap-2">
        <Link href="/" passHref>
          <MdHome />
        </Link>
        <Link href="/dashboard" passHref>
          <MdDashboard />
        </Link>
        {!session ? (
          <Link href={"/login"} passHref className="text-sm">
            <MdLogin />
          </Link>
        ) : (
          <button
            className="text-sm"
            onClick={async () => {
              const { error } = await supabase.auth.signOut();
              console.log(error);
            }}
          >
            <MdLogout />
          </button>
        )}
      </nav>
    </header>
  );
};

export default PageHeader;
