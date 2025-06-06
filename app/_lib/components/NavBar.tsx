import Link from "next/link";
import FontSizeSlider from "./FontSizeSlider";

export default function NavBar() {
  return (
    <div className="flex w-full justify-between pt-7">
      <h1>
        <Link href="/about">Keith Doyle</Link>
      </h1>
      <FontSizeSlider />
    </div>
  );
}
