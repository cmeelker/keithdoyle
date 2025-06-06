import { Document } from "@contentful/rich-text-types";
export interface About {
  text: Document;
}

export function mapAbout(about: any): About {
  return {
    text: about.fields.text,
  };
}
