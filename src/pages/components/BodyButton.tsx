import Image from "next/image";

export function BodyButton({
  region,
}: {
  region: { id: string; name: string };
}) {
  //When clicked, bring up the diagnostics for that region.
  //--Need to create a fetch for the diagnostics.
  //--Need to map them into a pop-up box.
  //--It
  //So it also needs the diagnostics per region on standby.

  const processedRegionName = region.name.toLowerCase().replaceAll(" ", "");
  const imageUrl = `/backMaleModel/${processedRegionName}.png`;

  return (
    <button
      className="relative"
      onClick={() => {
        //The diagnostics page goes here.
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
