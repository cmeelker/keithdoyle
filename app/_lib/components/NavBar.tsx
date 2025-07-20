"use client";

import Link from "next/link";
import FontSizeSlider from "./FontSizeSlider";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const KeithDoyleHref = pathname === "/" ? "/about" : "/";
  const navTitle = pathname === "/" ? "Keith Doyle" : "Back";

  return (
    <div className="flex w-full flex-wrap-reverse justify-between pt-5 md:pt-7">
      <h1 className="z-40">
        <Link href={KeithDoyleHref}>{navTitle}</Link>
      </h1>
      <div className="z-50 ml-auto self-end">
        <FontSizeSlider />
      </div>
    </div>
  );
}
