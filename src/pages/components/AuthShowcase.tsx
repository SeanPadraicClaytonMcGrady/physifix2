import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export function AuthShowcase() {
  const { data: sessionData } = useSession();

  const router = useRouter();

  async function handleHomeNavigation() {
    await router.push("/");
  }

  return (
    <div className="border-width-2 flex flex-row items-center justify-around  bg-red-800">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>{sessionData.user?.name}</span>}
      </p>
      {/* <h1 className="text-3xl text-white">PhysiFix</h1> */}
      <button onClick={handleHomeNavigation} className="text-3xl text-white">
        Physifix
      </button>
      <button
        className="rounded-full bg-red-800 px-10 py-3 text-2xl  text-white no-underline transition hover:bg-red-700"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
