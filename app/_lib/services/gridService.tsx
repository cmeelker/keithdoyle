import contentfulClient from "../clients/contentful";
import { GridLabels, mapGridLabels } from "../models/GridLabels";

export async function getGridLabels() {
  const client = contentfulClient();

  const res = await client
    .getEntries({ content_type: "gridLabels" })
    .then((response) =>
      response.items.find((item) => item.fields.title === "Grid labels"),
    );

  return mapGridLabels(res);
}
