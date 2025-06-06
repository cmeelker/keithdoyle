import contentfulClient from "../clients/contentful";
import { mapAbout } from "../models/About";


export async function getAboutPage() {
  const client = contentfulClient();

  const res = await client
    .getEntries({ content_type: "about" })
    .then((response) =>
      response.items.find((item) => item.fields.title === "About")
    );

  return mapAbout(res);
}
