import { useRouter } from "next/router";
import { AuthShowcase } from "./components/AuthShowcase";
import { DropdownMenu } from "./components/DropDownMenu";

type DiagnosticArray = {
  Diagnostic: {
    id: string;
    name: string;
    videos: string[];
    description: string;
    userId: string | null;
    regionId: string | null;
  }[];
};

export default function Region() {
  const router = useRouter();

  const { name, diagnostics } = router.query;

  console.log(diagnostics);

  const diagnosticsParsed = JSON.parse(
    diagnostics as string,
  ) as DiagnosticArray;

  console.log(diagnosticsParsed);

  //We need to map diagnosticsParsed onto DropdownMenu. Then we need to worry about organizing & arranging.

  return (
    <>
      <AuthShowcase />
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white">
        <DropdownMenu diagnostic={diagnosticsParsed.Diagnostic} />
      </div>
    </>
  );
}
