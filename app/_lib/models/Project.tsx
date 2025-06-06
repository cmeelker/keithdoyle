
import { Document } from "@contentful/rich-text-types";
import { ContentfulImage, mapImage } from "./Image";


export interface Project {
  id: number;
  slug: string;
  title: string;
  year: string;
  description: Document;
  media: ProjectMedia;
}

export interface ProjectMedia {
  images: ContentfulImage[];
}

export function mapProject(project: any): Project {
  return {
    id: project.sys.id,
    slug: project.fields.slug,
    title: project.fields.title,
    year: project.fields.year,
    description: project.fields.description,
    media: {
      images: project.fields.images?.map((image: any) => mapImage(image)) || [],
    },
  };
}
