import ContactMe from "@/modules/contact-me";
import Landing from "@/modules/landing";
import Projects from "@/modules/projects";

export default function Home() {
  return (
    <main id="home" aria-label="home">
      <Landing />
      <Projects />
      <ContactMe />
    </main>
  );
}
