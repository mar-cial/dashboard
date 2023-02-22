import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import { Azeret_Mono } from "@next/font/google";

const mainFont = Azeret_Mono({ subsets: ["latin"] });

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { AppProps } from "next/app";
import { env } from "~/env.mjs";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session
}>) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient({supabaseKey: env.NEXT_PUBLIC_SUPABASE_KEY, supabaseUrl: env.NEXT_PUBLIC_SUPABASE_URL}))

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} className={mainFont.className} />
    </SessionContextProvider>
  )
}

export default MyApp;
