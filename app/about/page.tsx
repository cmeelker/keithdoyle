import About from "../_lib/components/About";

import { getAboutPage } from "../_lib/services/aboutService";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const { text } = await getAboutPage();

  return <About text={text} />;
}
