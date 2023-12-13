import { useState } from "react";
import Head from "next/head";

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
  if (!diagnostic) {
    return null;
  } else {
    return (
      <div className="flex h-3/4 w-3/4 flex-col justify-center text-center">
        {diagnostic.videos.map((videoLink, index) => {
          return (
            <iframe
              className="h-full w-full"
              key={index}
              src={videoLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          );
        })}
        <a className="block whitespace-normal break-words px-4 py-2 text-sm text-white">
          {diagnostic.description}
        </a>
      </div>
    );
  }
}
