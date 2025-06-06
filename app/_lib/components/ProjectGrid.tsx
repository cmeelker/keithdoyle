import Link from "next/link";
import { getProjects } from "../services/projectService";

export default async function ProjectGrid() {
  const projects = await getProjects();
  return projects.map((project) => (
    <div key={project.slug} className="project-card">
      <h2>
        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      </h2>
    </div>
  ));
}
