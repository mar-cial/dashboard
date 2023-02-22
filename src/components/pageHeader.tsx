import { Azeret_Mono } from "@next/font/google";
import Link from "next/link";
import{ MdHome, MdDashboard } from 'react-icons/md'
const mainFont = Azeret_Mono({ subsets: ["latin"] });

const PageHeader = () => {
  return (
    <header className={`flex justify-between ${mainFont.className} bg-zinc-700 rounded-md p-2 items-center`}>
      <h1 className="text-sm">DashboardProject.</h1>

      <nav className="flex gap-2">
        <Link href='/' passHref><MdHome /></Link>
        <Link href='/dashboard' passHref><MdDashboard /></Link>
        
      </nav>
    </header>
  );
};

export default PageHeader;
