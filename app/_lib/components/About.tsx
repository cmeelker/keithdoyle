"use client";
import { Document } from "@contentful/rich-text-types";
import Richtext from "./Richtext";
import Footer from "./Footer";
import { useCssVar } from "../hooks/useCssVar";

export default function About({ text }: { text: Document }) {
  const fontSize = Number(useCssVar("--font-size").split("px")[0]);

  return (
    <div className="hide-scroll-bar flex h-full flex-col overflow-scroll">
      <div
        className="mb-15 max-w-5xl flex-grow md:mb-5"
        style={{ maxWidth: fontSize < 50 ? "64rem" : "100%" }}
      >
        <Richtext document={text} />
      </div>
      <div className="mb-1 text-right md:mb-2">
        <Footer />
      </div>
    </div>
  );
}
