import Footer from "@/components/footer";
import About from "@/components/mobile/about";
import Experience from "@/components/mobile/experience";
import Hero from "@/components/mobile/hero";
import Projects from "@/components/mobile/projects";

export default function Home() {
  return (
    <div>
      {/* Mobile View */}
      <div className="w-10/12 mx-auto tracking-wide lg:max-w-7xl lg:mx-auto lg:flex lg:flex-row">
        <Hero />
        <div className="lg:w-1/2 lg:ml-[50%]">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}
