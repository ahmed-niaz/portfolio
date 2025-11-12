import { projects } from "@/assets/data";
import { ExternalLink, FolderGit2 } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="font-mono text-primary mb-4">
            <span className="text-muted-foreground">{"// "}</span>Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-mono">
            <span className="text-primary">const</span> projects = [
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group backdrop-blur-glass bg-[hsl(var(--glass-bg))] border-2 border-[hsl(var(--border))] rounded-lg p-6 hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center border border-primary/30">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground">
                      project_{project.id}
                    </div>
                    <h3 className="font-mono font-semibold text-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="px-2 py-1 rounded text-xs font-mono bg-secondary/10 text-secondary border border-secondary/30">
                  {project.metrics}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              {/* Code Snippet */}
              <div className="bg-[hsl(var(--background))] rounded border border-[hsl(var(--border))] p-3 mb-4 overflow-x-auto">
                <pre className="font-mono text-xs text-primary leading-relaxed">
                  {project.codeSnippet}
                </pre>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-mono border border-[hsl(var(--border))] rounded hover:border-primary hover:text-primary transition-all"
                >
                  <FolderGit2 className="h-4 w-4" />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-mono bg-primary/10 border border-primary/30 text-primary rounded hover:bg-primary/20 transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Bracket */}
        <div className="font-mono text-4xl md:text-5xl font-bold">];</div>
      </div>
    </section>
  );
}
