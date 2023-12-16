import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { GiEntryDoor, GiExitDoor } from "react-icons/gi";
import { FaBookBookmark } from "react-icons/fa6";

export default function AuthShowcase() {
  const { data: sessionData } = useSession();

  const router = useRouter();

  async function handleHomeNavigation() {
    await router.push("/");
  }

  return (
    <div className="border-width-2 flex flex-row items-center justify-around  bg-red-800">
      <div className="w-1/5 text-center text-4xl text-white">
        {sessionData && <FaBookBookmark />}
      </div>
      {/* <h1 className="text-3xl text-white">PhysiFix</h1> */}
      <button
        onClick={handleHomeNavigation}
        className="rounded-full px-4 text-3xl text-white transition hover:bg-red-700"
      >
        PhysiFix
      </button>
      <div className="flex w-1/5 justify-center text-center text-2xl text-white">
        <button
          className="flex justify-center rounded-full bg-red-800 px-2 py-1 text-4xl transition hover:bg-red-700"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? <GiExitDoor /> : <GiEntryDoor />}
        </button>
      </div>
    </div>
  );
}
