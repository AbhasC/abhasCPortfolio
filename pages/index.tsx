import ContactMe from "@/modules/contact-me";
import Landing from "@/modules/landing";
import Expertise from "@/modules/expertise";
import AboutMe from "@/modules/about-me";
import Work from "@/modules/work";

export default function Home() {
  return (
    <main id="home" aria-label="home">
      <Landing />
      <AboutMe />
      <Expertise />
      <Work />
      <ContactMe />
    </main>
  );
}
