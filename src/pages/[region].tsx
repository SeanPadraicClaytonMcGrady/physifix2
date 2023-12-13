import { useRouter } from "next/router";
import { AuthShowcase } from "./components/AuthShowcase";
import { DiagnosticInformant } from "./components/DiagnosticInformant";
import { useState } from "react";

export type Diagnostic = {
  id: string;
  name: string;
  videos: string[];
  description: string;
  userId: string | null;
  regionId: string | null;
  region: string | null;
};

export type DiagnosticArray = Diagnostic[];

export default function Region() {
  const router = useRouter();
  const [selectedDropdownIndex, setSelectedDropdownIndex] = useState<number>(0);

  const { name, diagnostics } = router.query;

  const diagnosticsParsed = JSON.parse(
    diagnostics as string,
  ) as DiagnosticArray;

  function handleDiagnosticSelection(direction: string) {
    if (direction === "left" && selectedDropdownIndex > 0) {
      setSelectedDropdownIndex((currentIndex) => {
        return currentIndex - 1;
      });
    }
    if (
      direction === "right" &&
      selectedDropdownIndex < diagnosticsParsed.length
    ) {
      setSelectedDropdownIndex((currentIndex) => {
        return currentIndex + 1;
      });
    }
  }

  //We need to map diagnosticsParsed onto DropdownMenu. Then we need to worry about organizing & arranging.

  return (
    <>
      <AuthShowcase />
      <div className="  bg-black text-center text-white">
        <div className="flex flex-row justify-evenly">
          <button onClick={() => handleDiagnosticSelection("left")}>
            Left
          </button>
          <h1 className="items-center justify-center text-2xl">{name}</h1>
          <button onClick={() => handleDiagnosticSelection("right")}>
            Right
          </button>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center justify-start gap-8  bg-black text-white">
        {diagnosticsParsed[selectedDropdownIndex] && (
          <DiagnosticInformant
            diagnostic={diagnosticsParsed[selectedDropdownIndex]}
          />
        )}
      </div>
    </>
  );
}
