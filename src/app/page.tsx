import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

import Navigation from "@/components/navigation";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-code text-foreground">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
