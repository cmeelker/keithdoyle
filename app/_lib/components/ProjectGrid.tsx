import Link from "next/link";
import { getProjects } from "../services/projectService";

export default async function ProjectGrid() {
  const projects = await getProjects();

  return (
    <div className="relative h-full lg:-mt-[calc(var(--font-size)*1.5)] lg:h-[calc(100%+(var(--font-size)*1.5))]">
      <div className="grid h-full grid-cols-[max-content_1fr_1fr_max-content] grid-rows-[max-content_1fr_1fr_max-content] bg-green-100">
        <div className="col-span-4 col-start-1 mx-auto">
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
        <div className="col-span-4 col-start-1 row-start-4 mx-auto">
          <div className="hidden md:block">(collaborative)</div>
          <div className="md:hidden">(c)</div>
        </div>
        <div className="col-start-2 mt-1 ml-3 border-r-2 border-b-2 border-black"></div>
        <div className="col-start-3 mr-3 border-b-2 border-black"></div>
        <div className="col-start-2 row-start-3 mb-1 border-r-2 border-black"></div>
      </div>
      <div className="absolute inset-0 flex h-full">
        <div className="m-auto h-[97%] w-[97%] border border-red-500"></div>
      </div>
    </div>
  );
}
