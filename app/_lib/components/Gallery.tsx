"use client";
import { useEffect, useState } from "react";
import { ContentfulImage } from "../models/Image";
import Image from "next/image";
import { useFontSize } from "../hooks/useFontSize";

export default function Gallery({ images }: { images: ContentfulImage[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [flexGap, setFlexGap] = useState(24);
  const { fontSize } = useFontSize();

  useEffect(() => {
    setFlexGap(24 * (1 - (fontSize - 18) / 54));
  }, [fontSize]);

  function goToNextImage(): void {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  }

  return (
    <div className="flex h-full flex-col items-center" style={{ gap: flexGap }}>
      <div className="relative m-auto h-full w-full md:w-[90%]">
        <Image
          className="cursor-pointer object-contain"
          src={images[currentImageIndex].url}
          alt={images[currentImageIndex].alt || ""}
          fill={true}
          onClick={() => goToNextImage()}
        />
      </div>
      <p>
        {currentImageIndex + 1}/{images.length}
      </p>
    </div>
  );
}
