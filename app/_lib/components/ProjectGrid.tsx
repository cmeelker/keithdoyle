import Link from "next/link";
import { getProjects } from "../services/projectService";

export default async function ProjectGrid() {
  const projects = await getProjects();

  return (
    <div className="grid h-full grid-cols-[max-content_1fr_1fr_max-content] grid-rows-[max-content_1fr_1fr_max-content] pb-4 lg:-mt-[calc(var(--font-size)*1.5)] lg:h-[calc(100%+(var(--font-size)*1.5))]">
      <div className="col-span-2 col-start-2 mx-auto">
        <div className="hidden md:block">(self)</div>
        <div className="md:hidden">(s)</div>
      </div>
      <div className="col-start-1 row-span-2 row-start-2 my-auto text-left">
        <div className="hidden md:block">(hobbies)</div>
        <div className="md:hidden">(h)</div>
      </div>
      <div className="col-start-4 row-span-2 row-start-2 my-auto text-right">
        <div className="hidden md:block">(research)</div>
        <div className="md:hidden">(r)</div>
      </div>
      <div className="col-span-2 col-start-2 row-start-4 mx-auto">
        <div className="hidden md:block">(collaborative)</div>
        <div className="md:hidden">(c)</div>
      </div>
    </div>
  );
}
