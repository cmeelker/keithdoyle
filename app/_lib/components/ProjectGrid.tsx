"use client";
import Link from "next/link";
import { Project } from "../models/Project";
import { useState, useEffect } from "react";
import { useCssVar } from "../hooks/useCssVar";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  // Range for x and y coordinates are -100 to 100
  function isBottomHalf(x: number, y: number) {
    return y > 0;
  }

  function isRightHalf(x: number, y: number) {
    return x > 0;
  }

  const [showFullTexts, setShowFullTexts] = useState(false);

  const fontSize = useCssVar("--font-size");
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (windowWidth < 1024 && fontSize > "30px") {
      setShowFullTexts(false);
    } else {
      setShowFullTexts(true);
    }
  }, [fontSize, windowWidth]);

  return (
    <div className="relative h-full lg:-mt-[calc(var(--font-size)*1.5)] lg:h-[calc(100%+(var(--font-size)*1.5))]">
      <div className="grid h-full grid-cols-[max-content_1fr_1fr_max-content] grid-rows-[max-content_1fr_1fr_max-content]">
        <div className="col-span-4 col-start-1 mx-auto">
          {showFullTexts ? <>(self)</> : <>(s)</>}
        </div>
        <div className="col-start-1 row-span-2 row-start-2 my-auto text-left">
          {showFullTexts ? <>(hobbies)</> : <>(h)</>}
        </div>
        <div className="col-start-4 row-span-2 row-start-2 my-auto text-right">
          {showFullTexts ? <>(research)</> : <>(r)</>}
        </div>
        <div className="col-span-4 col-start-1 row-start-4 mx-auto">
          {showFullTexts ? <>(collaborative)</> : <>(c)</>}
        </div>
        <div className="col-start-2 mt-1 ml-3 border-r-2 border-b-2 border-black"></div>
        <div className="col-start-3 mr-3 border-b-2 border-black"></div>
        <div className="col-start-2 row-start-3 mb-1 border-r-2 border-black"></div>
      </div>
      <div className="absolute inset-0 flex h-full">
        <div className="relative m-auto grid h-[90%] w-[90%] grid-cols-200 grid-rows-200">
          {projects.map((project, index) => {
            const isRight = isRightHalf(project.x, project.y);
            const isBottom = isBottomHalf(project.x, project.y);

            return (
              <h2
                key={project.id}
                style={{
                  gridColumnStart: project.x + 100,
                  gridRowStart: project.y + 100,
                }}
                className={`w-fit whitespace-nowrap ${isBottom && "-translate-y-[var(--font-size)]"} ${isRight && "-translate-x-full"}`}
              >
                <Link href={`/projects/${project.slug}`}>
                  {showFullTexts ? (
                    <div className="dot-tooltip">
                      {project.title}
                      <div className="dot"></div>
                    </div>
                  ) : (
                    <div className="dot-tooltip">
                      {index + 1}.<div className="dot"></div>
                    </div>
                  )}
                </Link>
              </h2>
            );
          })}
        </div>
      </div>
    </div>
  );
}
