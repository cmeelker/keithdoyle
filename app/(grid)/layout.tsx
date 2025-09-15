import Footer from "../_lib/components/Footer";
import ProjectGrid from "../_lib/components/ProjectGrid";
import { getGridLabels } from "../_lib/services/gridService";
import { getProjects } from "../_lib/services/projectService";

export const dynamic = "force-dynamic";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const projects = await getProjects();
  const gridLabels = await getGridLabels();

  return (
    <div className="h-full">
      <div className="h-full pb-5">
        <ProjectGrid gridLabels={gridLabels} projects={projects} />
      </div>
      {children}
      <div className="absolute right-4.5 bottom-1 md:right-10 md:bottom-2">
        <Footer />
      </div>
    </div>
  );
}
