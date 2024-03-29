import Footer from "@/components/footer";
import About from "@/components/about";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

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
