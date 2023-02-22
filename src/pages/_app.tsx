import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import { Azeret_Mono } from "@next/font/google";

const mainFont = Azeret_Mono({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} className={mainFont.className} />;
};

export default MyApp;
