import { getProject } from "@/app/_lib/services/projectService";
import { ProjectPageProps } from "./layout";

import Gallery from "@/app/_lib/components/Gallery";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ProjectPage({
  params,
}: {
  params: Promise<ProjectPageProps>;
}) {
  const { projectSlug } = await params;
  const project = await getProject(projectSlug);

  if (project.media.images.length === 0) {
    redirect(`/projects/${project.slug}/info`);
  }

  return <Gallery images={project.media.images} />;
}
