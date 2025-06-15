"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Project } from "../models/Project";
import { useEffect, useState } from "react";
import { useCssVar } from "../hooks/useCssVar";

export default function ProjectPageNavBar({ project }: { project: Project }) {
  const pathname = usePathname();
  const hasImages = project.media.images.length > 0;

  const [navMarginBottom, setNavMarginBottom] = useState(39);
  const fontSize = Number(useCssVar("--font-size").split("px")[0]);

  useEffect(() => {
    setNavMarginBottom(36 * (1 - (fontSize - 18) / 54));
  }, [fontSize]);

  return (
    <nav
      className="mb-[39px] grid grid-cols-[1fr_2fr_1fr] text-center"
      style={{ marginBottom: `${navMarginBottom}px` }}
    >
      <div className="text-left">
        {pathname.endsWith("info") && hasImages ? (
          <Link href={`/projects/${project.slug}`} className="underline">
            gallery
          </Link>
        ) : (
          <Link href={`/projects/${project.slug}/info`} className="underline">
            info
          </Link>
        )}
      </div>
      <h2 className="sm:whitespace-nowrap">
        {project.title}, {project.year}
      </h2>
      <div className="text-right">
        <Link href="/">close</Link>
      </div>
    </nav>
  );
}
