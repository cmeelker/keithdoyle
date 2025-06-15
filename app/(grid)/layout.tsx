import ProjectGrid from "../_lib/components/ProjectGrid";
import { getProjects } from "../_lib/services/projectService";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const projects = await getProjects();

  return (
    <div className="h-full">
      <div className="h-full pb-5">
        <ProjectGrid projects={projects} />
      </div>
      {children}
    </div>
  );
}
