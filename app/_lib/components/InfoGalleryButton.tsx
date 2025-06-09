"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InfoGalleryButton({
  projectSlug,
}: {
  projectSlug: string;
}) {
  const pathname = usePathname();

  if (pathname.endsWith("info")) {
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
