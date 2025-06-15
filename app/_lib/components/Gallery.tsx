"use client";
import { useState } from "react";
import { ContentfulImage } from "../models/Image";
import Image from "next/image";

export default function Gallery({ images }: { images: ContentfulImage[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function goToNextImage(): void {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  }

  return (
    <div className="flex h-full flex-col items-center gap-6">
      <div className="relative m-auto h-full w-full md:w-[90%]">
        <Image
          className="cursor-pointer object-cover"
          src={images[currentImageIndex].url}
          alt={images[currentImageIndex].alt || ""}
          fill={true}
          onClick={() => goToNextImage()}
        />
      </div>
      <div>
        {currentImageIndex + 1}/{images.length}
      </div>
    </div>
  );
}
