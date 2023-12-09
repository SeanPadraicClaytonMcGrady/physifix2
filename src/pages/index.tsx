import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";

import { api } from "~/utils/api";

export default function Home() {
  return (
    <>
      <Head>
        <title className="">Physifix</title>
        <meta
          name="description"
          content="A self-diagnosis website for aches & pains"
        />
      </Head>
      <AuthShowcase />
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  return (
    <div className="border-width-2 flex flex-row items-center justify-around gap-4 bg-red-800">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>{sessionData.user?.name}</span>}
      </p>
      <h1 className="text-3xl text-white">Physifix</h1>
      <button
        className="rounded-full bg-red-800 px-10 py-3 text-2xl  text-white no-underline transition hover:bg-red-700"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
