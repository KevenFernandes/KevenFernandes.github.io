import { About } from "@/Components/About";
import { Contact } from "@/Components/Contact";
import { Hero } from "@/Components/Hero";
import { Project } from "@/Components/Project";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="flex flex-col gap-40">
        <About />
        <Project />
        <Contact />
      </div>
    </main>
  );
}
