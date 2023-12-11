import Image from "next/image";
import { api } from "~/utils/api";

export function BodyButton({
  region,
}: {
  region: { id: string; name: string };
}) {
  const { data: diagnostics } = api.get.getRegionDiagnostics.useQuery({
    name: region.name,
  });

  const processedRegionName = region.name.toLowerCase().replaceAll(" ", "");
  const imageUrl = `/backMaleModel/${processedRegionName}.png`;

  return (
    <button
      className="relative"
      onClick={() => {
        console.log(diagnostics);
      }}
      key={region.id}
    >
      <Image
        className="transition hover:-hue-rotate-180 hover:filter"
        src={imageUrl}
        alt={region.name}
        width={100}
        height={100}
      />
    </button>
  );
}
