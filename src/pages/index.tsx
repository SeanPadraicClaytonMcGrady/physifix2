import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";

import { api } from "~/utils/api";
import { BodyButton } from "./components/BodyButton";

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
      <BodyModel />
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  return (
    <div className="border-width-2 flex flex-row items-center justify-around  bg-red-800">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>{sessionData.user?.name}</span>}
      </p>
      <h1 className="text-3xl text-white">PhysiFix</h1>
      <button
        className="rounded-full bg-red-800 px-10 py-3 text-2xl  text-white no-underline transition hover:bg-red-700"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}

function BodyModel() {
  const { data: sessionData } = useSession();
  const [front, setFront] = useState<boolean>(true);
  //We need to make a BodyButton component.
  //It will be a button that receives a region from a mapping of regions
  //from the db.
  //It will use the string as the name of the button & image.
  //It will contain the relevant diagnostics from the db.
  //Upon clicking, you will open a new page

  const { data: regions } = api.get.getAllRegions.useQuery();

  return (
    <div className="flex h-screen w-screen flex-col items-center bg-black">
      {!sessionData && (
        <p className="text-3xl text-white">Sign in to get full functionality</p>
      )}

      {regions?.map((region) => {
        return <BodyButton key={region.id} region={region} />;
      })}

      <button
        className="w-14 rounded-xl bg-red-800 text-white transition hover:bg-red-500"
        onClick={() => setFront(!front)}
      >
        {front ? "Front" : "Back"}
      </button>
    </div>
  );
}
