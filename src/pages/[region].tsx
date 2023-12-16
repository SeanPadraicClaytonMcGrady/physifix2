import { useRouter } from "next/router";
import AuthShowcase from "./components/AuthShowcase";
import DiagnosticInformant from "./components/DiagnosticInformant";
import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

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
  const [selectedDiagnosticIndex, setSelectedDiagnosticIndex] =
    useState<number>(0);

  const { name, diagnostics } = router.query;

  const diagnosticsParsed = diagnostics
    ? (JSON.parse(diagnostics as string) as DiagnosticArray)
    : [];

  function handleDiagnosticSelection(direction: string) {
    if (direction === "left" && selectedDiagnosticIndex > 0) {
      setSelectedDiagnosticIndex((currentIndex) => {
        return currentIndex - 1;
      });
    }
    if (
      direction === "right" &&
      selectedDiagnosticIndex < diagnosticsParsed.length - 1
    ) {
      setSelectedDiagnosticIndex((currentIndex) => {
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
          <div className="w-1/5 text-center">
            {selectedDiagnosticIndex !== 0 && (
              <button
                className="gap-0"
                onClick={() => handleDiagnosticSelection("left")}
              >
                <GoArrowLeft
                  className={" rounded-xl text-3xl transition hover:bg-red-800"}
                />
              </button>
            )}
          </div>
          <h1 className="items-center justify-center text-2xl">{name}</h1>
          <div className="w-1/5 text-center">
            {selectedDiagnosticIndex !== diagnosticsParsed.length - 1 && (
              <button onClick={() => handleDiagnosticSelection("right")}>
                <GoArrowRight
                  className={" rounded-xl text-3xl transition hover:bg-red-800"}
                />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center justify-start gap-8  bg-black text-white">
        {diagnosticsParsed[selectedDiagnosticIndex] && (
          <DiagnosticInformant
            diagnostic={diagnosticsParsed[selectedDiagnosticIndex]}
          />
        )}
      </div>
    </>
  );
}
