import { getProject } from "@/app/_lib/services/projectService";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

interface ProjectPageProps {
  projectSlug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProjectPageProps>;
}): Promise<Metadata> {
  const { projectSlug } = await params;
  const project = await getProject(projectSlug);

  return {
    title: `Keith Doyle / ${project.title}`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<ProjectPageProps>;
}) {
  const { projectSlug } = await params;

  const project = await getProject(projectSlug).catch(() => {
    redirect("/");
  });

  return (
    <div className="w-full h-full grid place-items-center absolute top-0 left-0 pointer-events-none">
      <section className="w-2/3 h-2/3 border-4 border-black pointer-events-auto">
        {project.title}
      </section>
    </div>
  );
}
