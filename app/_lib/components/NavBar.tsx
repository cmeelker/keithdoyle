import Link from "next/link";
import FontSizeSlider from "./FontSizeSlider";

export default function NavBar() {
  return (
    <div className="flex w-full justify-between pt-7 flex-wrap-reverse">
      <h1>
        <Link href="/about">Keith Doyle</Link>
      </h1>
      <div className="self-end ml-auto z-50">
        <FontSizeSlider />
      </div>
    </div>
  );
}
