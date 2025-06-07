import Link from "next/link";
import FontSizeSlider from "./FontSizeSlider";

export default function NavBar() {
  return (
    <div className="flex w-full flex-wrap-reverse justify-between pt-5 md:pt-7">
      <h1 className="z-40">
        <Link href="/about">Keith Doyle</Link>
      </h1>
      <div className="z-50 ml-auto self-end">
        <FontSizeSlider />
      </div>
    </div>
  );
}
