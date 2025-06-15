"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InfoGalleryButton({
  projectSlug,
  hasImages,
}: {
  projectSlug: string;
  hasImages: boolean;
}) {
  const pathname = usePathname();

  if (pathname.endsWith("info") && hasImages) {
    return (
      <Link href={`/projects/${projectSlug}`} className="underline">
        gallery
      </Link>
    );
  }

  return (
    <Link href={`/projects/${projectSlug}/info`} className="underline">
      info
    </Link>
  );
}
