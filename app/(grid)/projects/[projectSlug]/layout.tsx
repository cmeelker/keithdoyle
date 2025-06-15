import ThreeDBorder from "@/app/_lib/components/3DBorder";
import InfoGalleryButton from "@/app/_lib/components/InfoGalleryButton";
import { getProject } from "@/app/_lib/services/projectService";
import Link from "next/link";
import { redirect } from "next/navigation";

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

  // TODO: Fix navigation for mobile with large font
  // Get width of nav, if bigger than parent (=overflow) than use different layout

  return (
    <div className="pointer-events-none absolute top-0 left-0 grid h-full w-full place-items-center">
      <ThreeDBorder className="z-50 h-5/6 w-full md:h-2/3 md:w-2/3">
        <div className="flex h-full w-full flex-col px-[12px] pt-[18px] md:px-[18px]">
          <nav className="mb-[39px] grid grid-cols-[1fr_2fr_1fr] text-center">
            <div className="text-left">
              <InfoGalleryButton
                projectSlug={project.slug}
                hasImages={project.media.images.length > 0}
              />
            </div>
            <h2 className="sm:whitespace-nowrap">
              {project.title}, {project.year}
            </h2>
            <div className="text-right">
              <Link href="/">close</Link>
            </div>
          </nav>
          <div className="hide-scroll-bar mb-6 flex-grow overflow-y-scroll">
            {children}
          </div>
        </div>
      </ThreeDBorder>
    </div>
  );
}
