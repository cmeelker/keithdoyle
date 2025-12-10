"use client";
import { useEffect, useState, useMemo } from "react";
import { ContentfulImage } from "../models/Image";
import Image from "next/image";
import { useFontSize } from "../hooks/useFontSize";
import { ContentfulVimeo } from "../models/Vimeo";

type MediaItem =
  | { type: "image"; data: ContentfulImage }
  | { type: "video"; data: ContentfulVimeo };

export default function Gallery({
  images,
  videos,
}: {
  images: ContentfulImage[];
  videos: ContentfulVimeo[];
}) {
  const media = useMemo<MediaItem[]>(() => {
    const imageItems: MediaItem[] = images.map((img) => ({
      type: "image" as const,
      data: img,
    }));
    const videoItems: MediaItem[] = videos.map((vid) => ({
      type: "video" as const,
      data: vid,
    }));
    return [...imageItems, ...videoItems];
  }, [images, videos]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [flexGap, setFlexGap] = useState(24);
  const { fontSize } = useFontSize();

  useEffect(() => {
    setFlexGap(24 * (1 - (fontSize - 18) / 54));
  }, [fontSize]);

  function goToNext(): void {
    if (currentIndex < media.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  const currentMedia = media[currentIndex];

  return (
    <div className="flex h-full flex-col items-center" style={{ gap: flexGap }}>
      <div className="relative m-auto h-full w-full md:w-[90%]">
        {currentMedia?.type === "image" ? (
          <Image
            className="cursor-pointer object-contain"
            src={currentMedia.data.url}
            alt={currentMedia.data.alt || ""}
            fill={true}
            onClick={() => goToNext()}
          />
        ) : currentMedia?.type === "video" ? (
          <iframe
            loading="eager"
            src={`https://player.vimeo.com/video/${currentMedia.data.vimeoId}`}
            width="100%"
            height="100%"
          ></iframe>
        ) : null}
      </div>
      <div className="flex items-center gap-4">
        <p>
          {currentIndex + 1}/{media.length}
        </p>
        <button onClick={goToNext} className="underline">
          next
        </button>
      </div>
    </div>
  );
}
