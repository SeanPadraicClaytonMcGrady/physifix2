import { useEffect, useState } from "react";

export function DiagnosticInformant({
  diagnostic,
}: {
  diagnostic:
    | {
        id: string;
        name: string;
        videos: string[];
        description: string;
        userId: string | null;
        regionId: string | null;
      }
    | undefined;
}) {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number>(0);

  if (!diagnostic) {
    return null;
  } else {
    return (
      <>
        <div className="flex h-4/5 w-4/5 flex-col justify-center text-center">
          <iframe
            className="h-full w-full"
            key={selectedVideoIndex}
            src={diagnostic.videos[selectedVideoIndex]}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <a className="block whitespace-normal break-words px-4 py-2 text-sm text-white">
            {diagnostic.description}
          </a>
        </div>
      </>
    );
  }
}
