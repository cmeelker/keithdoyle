import Richtext from "../_lib/components/Richtext";
import { getAboutPage } from "../_lib/services/aboutService";

export default async function About() {
  const { text } = await getAboutPage();

  return (
    <div className="hide-scroll-bar overflow-scroll">
      <Richtext document={text} />
    </div>
  );
}
