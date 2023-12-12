import Image from "next/image";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

export function BodyButton({
  region,
}: {
  region: { id: string; name: string };
}) {
  //Query diagnostics data for dynamic region page.
  const { data: diagnostics } = api.get.getRegionDiagnostics.useQuery({
    name: region.name,
  });

  //This is wrong++++++++++++++++
  //Turn diagnostics into json strings then send it to dynamic page.
  //Then you'll have everything you need in orderly fashion.
  const diagnosticsJson = JSON.stringify(diagnostics?.Diagnostic);

  //Enable router for sending props to dynamic page.
  const router = useRouter();

  //Create image address to make the button.
  const processedRegionName = region.name.toLowerCase().replaceAll(" ", "");
  const imageUrl = `/backMaleModel/${processedRegionName}.png`;

  async function handleClick() {
    await router.push({
      pathname: `/region`,
      query: { name: region.name, diagnostics: diagnosticsJson },
    });
  }

  return (
    <button
      className="relative"
      onClick={async () => {
        await handleClick();
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
