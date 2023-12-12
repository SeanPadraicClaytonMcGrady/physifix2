import { useSession } from "next-auth/react";
import { useState } from "react";
import { api } from "~/utils/api";
import { BodyButton } from "./BodyButton";

export function BodyModel() {
  const { data: sessionData } = useSession();
  const [front, setFront] = useState<boolean>(true);

  //It will contain the relevant diagnostics from the db.
  //Upon clicking, you will open a new page

  const { data: regions } = api.get.getAllRegions.useQuery();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
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
