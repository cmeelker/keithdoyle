import ThreeDBorder from "@/app/_lib/components/3DBorder";
import ProjectPageNavBar from "@/app/_lib/components/ProjectPageNavBar";
import { getProject } from "@/app/_lib/services/projectService";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export interface ProjectPageProps {
  projectSlug: string;
}

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<ProjectPageProps>;
}>) {
  const { projectSlug } = await params;

  const project = await getProject(projectSlug).catch(() => {
    redirect("/");
  });

  return (
    <div className="pointer-events-none absolute top-0 left-0 grid h-full w-full place-items-center">
      <ThreeDBorder className="z-50 h-5/6 w-full md:h-2/3 md:w-3/5">
        <div className="flex h-full w-full flex-col px-[12px] pt-[9px] md:px-[18px]">
          <ProjectPageNavBar project={project} />
          <div className="hide-scroll-bar flex-grow overflow-y-scroll">
            {children}
          </div>
        </div>
      </ThreeDBorder>
    </div>
  );
}
