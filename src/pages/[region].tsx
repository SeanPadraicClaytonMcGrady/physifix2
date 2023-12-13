import { useRouter } from "next/router";
import { AuthShowcase } from "./components/AuthShowcase";
import { DropdownMenu } from "./components/DropdownMenu";

type Diagnostic = {
  id: string;
  name: string;
  videos: string[];
  description: string;
  userId: string | null;
  regionId: string | null;
  region: string | null;
};

type DiagnosticArray = Diagnostic[];

export default function Region() {
  const router = useRouter();

  const { name, diagnostics } = router.query;

  const diagnosticsParsed = JSON.parse(
    diagnostics as string,
  ) as DiagnosticArray;

  //We need to map diagnosticsParsed onto DropdownMenu. Then we need to worry about organizing & arranging.

  return (
    <>
      <AuthShowcase />
      <div className="  bg-black text-center text-white">
        <h1 className="items-center justify-center text-2xl">{name}</h1>
        <h2>
          Try these diagnostics one-by-one. If they trigger pain, research &
          follow their instructions.
        </h2>
      </div>
      <div className="flex h-screen w-screen flex-col items-center justify-start gap-8  bg-black text-white">
        {diagnosticsParsed.map((diagnostic) => {
          return <DropdownMenu diagnostic={diagnostic} />;
        })}
      </div>
    </>
  );
}
