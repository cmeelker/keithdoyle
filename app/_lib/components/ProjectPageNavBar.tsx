"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Project } from "../models/Project";
import { useEffect, useRef, useState } from "react";
import { useFontSize } from "../hooks/useFontSize";

export default function ProjectPageNavBar({ project }: { project: Project }) {
  const pathname = usePathname();
  const [navMarginBottom, setNavMarginBottom] = useState(39);
  const [approximateNavTextWidth, setApproximateNavTextWidth] = useState(0);
  const [useTwoRowLayout, setUseTwoRowLayout] = useState(false);
  const [navWidth, setNavWidth] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const { fontSize } = useFontSize();

  const hasImages = project.media.images.length > 0;

  const navText = `gallery ${project.title}, ${project.year} close`;

  useEffect(() => {
    setNavMarginBottom(36 * (1 - (fontSize - 18) / 54));
    setApproximateNavTextWidth(navText.length * fontSize * 0.4);
    setUseTwoRowLayout(approximateNavTextWidth > navWidth);
  }, [fontSize, navWidth]);

  useEffect(() => {
    const updateWidth = () => {
      if (navRef.current) setNavWidth(navRef.current.clientWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  const topLeftLink = (
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
  );

  const projecTitle = (
    <h2 className="sm:whitespace-nowrap">
      {project.title}, {project.year}
    </h2>
  );

  const closeButton = (
    <div className="text-right">
      <Link href="/">close</Link>
    </div>
  );

  if (useTwoRowLayout) {
    return (
      <nav
        ref={navRef}
        className="flex flex-col text-center"
        style={{ marginBottom: `${navMarginBottom}px` }}
      >
        <div className="-mb-[calc(0.4*var(--font-size))] flex w-full flex-wrap justify-between">
          {topLeftLink}
          {closeButton}
        </div>

        {projecTitle}
      </nav>
    );
  }

  return (
    <nav
      ref={navRef}
      className="grid grid-cols-[1fr_2fr_1fr] text-center"
      style={{ marginBottom: `${navMarginBottom}px` }}
    >
      {topLeftLink}
      {projecTitle}
      {closeButton}
    </nav>
  );
}
