import { useState } from "react";
import Head from "next/head";

export function DropdownMenu({
  diagnostic,
}: {
  diagnostic: {
    id: string;
    name: string;
    videos: string[];
    description: string;
    userId: string | null;
    regionId: string | null;
  };
}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex w-screen flex-col items-center text-left">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
        onClick={toggleDropdown}
      >
        {diagnostic.name}
      </button>

      {isOpen && (
        <div className="mt-2 flex w-96 flex-col rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          {/* <div style={{ overflowY: "scroll", height: "384px" }}> */}
          {diagnostic.videos.map((videoLink, index) => {
            return (
              <iframe
                className="h-96 w-full"
                key={index}
                src={videoLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            );
          })}
          {/* </div> */}

          <a
            href="#"
            className="block whitespace-normal break-words px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            {diagnostic.description}
          </a>
        </div>
      )}
    </div>
  );
}
