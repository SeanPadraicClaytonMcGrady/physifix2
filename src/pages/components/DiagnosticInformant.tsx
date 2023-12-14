import { useEffect, useRef, useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

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
    // const totalVideos = diagnostic.videos.length;

    // function handleWheel(event: WheelEvent) {
    //   if (event.deltaY < 0) {
    //     setSelectedVideoIndex((prevIndex) =>
    //       prevIndex === totalVideos - 1 ? 0 : prevIndex + 1,
    //     );
    //   } else {
    //     setSelectedVideoIndex((prevIndex) =>
    //       prevIndex === 0 ? totalVideos - 1 : prevIndex - 1,
    //     );
    //   }
    // }

    // useEffect(() => {
    //   window.addEventListener("wheel", handleWheel);
    //   return () => {
    //     window.removeEventListener("wheel", handleWheel);
    //   };
    // }, []);

    function handleVideoSelection(direction: string) {
      if (direction === "previous" && selectedVideoIndex > 0) {
        setSelectedVideoIndex((currentIndex) => {
          return currentIndex - 1;
        });
      }
      if (
        direction === "next" &&
        diagnostic &&
        selectedVideoIndex < diagnostic.videos.length - 1
      ) {
        setSelectedVideoIndex((currentIndex) => {
          return currentIndex + 1;
        });
      }
    }

    return (
      <>
        <div
          className="flex h-4/5 w-4/5 flex-col justify-center  text-center"
          // onWheel={handleWheel}
        >
          <div className="text-xl">{diagnostic.name}</div>
          <iframe
            className="h-full w-full"
            key={selectedVideoIndex}
            src={diagnostic.videos[selectedVideoIndex]}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <div className=" flex flex-row justify-evenly">
            {selectedVideoIndex !== 0 && (
              <button onClick={() => handleVideoSelection("previous")}>
                <GoArrowUp className="text-3xl" />
              </button>
            )}
            {selectedVideoIndex !== diagnostic.videos.length - 1 && (
              <button onClick={() => handleVideoSelection("next")}>
                <GoArrowDown className="text-3xl" />
              </button>
            )}
          </div>
          <a className="block whitespace-normal break-words px-4 py-2 text-lg font-medium text-white">
            {diagnostic.description}
          </a>
        </div>
      </>
    );
  }
}
