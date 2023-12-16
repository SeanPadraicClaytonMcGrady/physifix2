import { useSession } from "next-auth/react";
import { useState } from "react";

import MuscleSystemSVG from "./MuscleSystemSVG";

export default function BodyModel() {
  const { data: sessionData } = useSession();
  const [front, setFront] = useState<boolean>(true);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-start bg-black">
      {!sessionData && (
        <p className="text-3xl text-white">Sign in to get full functionality</p>
      )}

      <button
        className="w-14 gap-4 rounded-xl bg-red-800 text-white transition hover:bg-red-500"
        onClick={() => setFront(!front)}
      >
        {front ? "Front" : "Back"}
      </button>
      <MuscleSystemSVG front={front} />
    </div>
  );
}
