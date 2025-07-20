"use client";
import { Document } from "@contentful/rich-text-types";
import Richtext from "./Richtext";
import Footer from "./Footer";
import { useCssVar } from "../hooks/useCssVar";
import { useRef } from "react";

export default function About({ text }: { text: Document }) {
  const fontSize = Number(useCssVar("--font-size").split("px")[0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex h-full flex-col" ref={scrollRef}>
      <div
        className="max-w-5xl flex-grow md:mb-5"
        style={{ maxWidth: fontSize < 50 ? "64rem" : "100%" }}
      >
        <div className="mb-15">
          <Richtext document={text} />
        </div>
      </div>
      <div className="mb-1 flex justify-between text-right md:mb-2">
        <button
          className="text-lg/2 hover:cursor-pointer"
          onClick={scrollToTop}
        >
          Scroll up
        </button>
        <Footer />
      </div>
    </div>
  );
}
