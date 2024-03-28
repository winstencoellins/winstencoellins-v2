import About from "@/components/mobile/about";
import Experience from "@/components/mobile/experience";
import Hero from "@/components/mobile/hero";
import Projects from "@/components/mobile/projects";

export default function Home() {
  return (
    <div>
      {/* Mobile View */}
      <div className="w-10/12 mx-auto tracking-wide">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}
