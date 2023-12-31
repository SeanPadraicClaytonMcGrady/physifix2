import { useRouter } from "next/router";
import { api } from "~/utils/api";

export default function BodyButton({
  d,
  className,
  style,
  regionName,
}: {
  d: string;
  className: string;
  style: object;
  regionName: string;
}) {
  const { data: diagnostics } = api.get.getRegionDiagnostics.useQuery({
    name: regionName,
  });

  const diagnosticsJson = diagnostics
    ? JSON.stringify(diagnostics?.Diagnostic)
    : [];

  const router = useRouter();

  async function handleClick() {
    await router.push({
      pathname: `/region`,
      query: { name: regionName, diagnostics: diagnosticsJson },
    });
  }

  return (
    <path onClick={handleClick} className={className} d={d} style={style} />
  );
}
