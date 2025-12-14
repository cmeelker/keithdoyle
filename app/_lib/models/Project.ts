import { Document } from "@contentful/rich-text-types";
import { ContentfulImage, mapImage } from "./Image";
import { ContentfulVimeo, mapVimeo } from "./Vimeo";

export interface Project {
  id: number;
  slug: string;
  title: string;
  year: string;
  description: Document;
  media: ProjectMedia;
  x: number;
  y: number;
}

export interface ProjectMedia {
  images: ContentfulImage[];
  videos: ContentfulVimeo[];
}

export function mapProject(project: any): Project {
  return {
    id: project.sys.id,
    slug: project.fields.slug,
    title: project.fields.title,
    year: project.fields.year,
    description: project.fields.description,
    media: {
      images:
        project.fields.images
          ?.map((image: any) => mapImage(image))
          .filter(Boolean) || [],
      videos:
        project.fields.video
          ?.map((video: any) => mapVimeo(video))
          .filter(Boolean) || [],
    },
    x: project.fields.x,
    y: project.fields.y,
  };
}
