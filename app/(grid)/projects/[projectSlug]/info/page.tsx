import Richtext from "@/app/_lib/components/Richtext";
import { getProject } from "@/app/_lib/services/projectService";
import { ProjectPageProps } from "../layout";

export const dynamic = "force-dynamic";

export default async function ProjectInfoPage({
  params,
}: {
  params: Promise<ProjectPageProps>;
}) {
  const { projectSlug } = await params;
  const project = await getProject(projectSlug);

  return <Richtext document={project.description} />;
}
