import Image from "next/image";

export function BodyButton({
  region,
}: {
  region: { id: string; name: string };
}) {
  //This button needs to receive:
  //The region from the db.
  //Find the image with that region.
  //When clicked, bring up the diagnostics for that region.
  //So it also needs the diagnostics per region on standby.

  const processedRegionName = region.name.toLowerCase().replaceAll(" ", "");
  const imageUrl = `/backMaleModel/${processedRegionName}.png`;

  return <Image src={imageUrl} alt={region.name} width={100} height={100} />;
}
