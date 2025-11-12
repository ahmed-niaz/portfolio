import { skillsData } from "@/assets/data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="font-mono text-primary mb-4">
            <span className="text-muted-foreground">{"// "}</span>Technical
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-2">
            <span className="text-primary">function</span> getSkills() {"{"}
          </h2>
        </div>

        {/* Skills Display */}
        <div className="pl-4 md:pl-8 space-y-10">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="font-mono">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-secondary">const</span>
                <span className="text-foreground text-lg">{category}</span>
                <span className="text-muted-foreground">=</span>
                <span className="text-accent">{`{`}</span>
              </div>
              <div className="pl-6 md:pl-12 space-y-4">
                {skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-primary group-hover:text-secondary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-[hsl(var(--muted))] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 group-hover:shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    {idx < skills.length - 1 && (
                      <span className="text-muted-foreground text-xs">,</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-accent pl-6 md:pl-8 mb-4 mt-4">{`};`}</div>
            </div>
          ))}

          {/* Return Statement */}
          <div className="font-mono space-y-2">
            <div className="text-secondary">return {"{"}</div>
            <div className="pl-8 text-muted-foreground">
              languages, frameworks, tools, concepts
            </div>
            <div className="text-secondary">{"}"};</div>
          </div>
        </div>

        {/* Closing Bracket */}
        <div className="font-mono text-4xl md:text-5xl font-bold mt-8">
          {"}"}
        </div>

        {/* Status Bar */}
        <div className="mt-12 backdrop-blur-glass bg-[hsl(var(--glass-bg))] border-2 border-[hsl(var(--border))] rounded-lg p-4 font-mono text-sm">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-muted-foreground">Status:</span>
              <span className="text-primary">Available for hire</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Experience:</span>
              <span className="text-primary">5+ years</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Projects:</span>
              <span className="text-primary">50+ completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
