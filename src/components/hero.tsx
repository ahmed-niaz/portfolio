"use client";

import { Code2, Coffee, Download, Mail, Terminal, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { codeLines } from "../assets/data";

export default function Hero() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  // use effects

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentLine < codeLines.length) {
        setDisplayedCode((prev) => {
          const newCode = prev + (prev ? "\n" : "") + codeLines[currentLine];
          return newCode;
        });
        setCurrentLine((prev) => prev + 1);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentLine]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 font-robotoMono text-xs text-primary leading-relaxed overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {Array.from({ length: 100 })
                .map(() => Math.random().toString(36)[2])
                .join("")}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Terminal */}
          <div>
            {/* ASCII Art */}
            <div className="font-robotoMono text-primary text-xs mb-6 opacity-70">
              <pre>{`
   _____ ____  ____  ______
  / ___// __ \\/ __ \\/ ____/
 / /   / / / / / / / __/   
/ /___/ /_/ / /_/ / /___   
\\____/\\____/_____/_____/   
              `}</pre>
            </div>

            {/* Terminal Window */}
            <div className="backdrop-blur-glass bg-[hsl(var(--glass-bg))] border-2 border-[hsl(var(--border))] rounded-lg overflow-hidden shadow-[0_0_50px_hsl(var(--primary)/0.2)]">
              <div className="bg-[hsl(var(--muted))] px-4 py-2 flex items-center gap-2 border-b border-[hsl(var(--border))]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-robotoMono text-muted-foreground ml-4">
                  terminal.tsx
                </span>
              </div>

              <div className="p-6 font-robotoMono text-sm min-h-[400px]">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Terminal className="h-4 w-4" />
                  <span>developer@portfolio:~$</span>
                  <span className="animate-pulse">▊</span>
                </div>
                <pre className="text-primary leading-relaxed whitespace-pre-wrap">
                  {displayedCode}
                </pre>
              </div>
            </div>
          </div>

          {/* Right Side - Info & Stats */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold font-robotoMono mb-4">
                <span className="text-primary">Hello,</span>
                <br />
                <span className="text-foreground">I'm a Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground font-robotoMono mb-2">
                <span className="text-secondary">{">"}</span> Full Stack
                Engineer
              </p>
              <p className="text-lg text-muted-foreground font-robotoMono">
                <span className="text-secondary">{">"}</span> Building scalable
                web applications
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="backdrop-blur-glass bg-[hsl(var(--glass-bg))] border border-[hsl(var(--border))] rounded-lg p-4 hover:border-primary transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  <span className="font-robotoMono text-2xl font-bold text-primary">
                    50+
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-robotoMono">
                  Projects Built
                </p>
              </div>

              <div className="backdrop-blur-glass bg-[hsl(var(--glass-bg))] border border-[hsl(var(--border))] rounded-lg p-4 hover:border-primary transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-5 w-5 text-secondary" />
                  <span className="font-robotoMono text-2xl font-bold text-secondary">
                    5+
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-robotoMono">
                  Years Experience
                </p>
              </div>

              <div className="backdrop-blur-glass bg-[hsl(var(--glass-bg))] border border-[hsl(var(--border))] rounded-lg p-4 hover:border-primary transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Coffee className="h-5 w-5 text-accent" />
                  <span className="font-robotoMono text-2xl font-bold text-accent">
                    1000+
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-robotoMono">
                  Commits/Year
                </p>
              </div>

              <div className="backdrop-blur-glass bg-[hsl(var(--glass-bg))] border border-[hsl(var(--border))] rounded-lg p-4 hover:border-primary transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  <span className="font-robotoMono text-2xl font-bold text-primary">
                    15+
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-robotoMono">
                  Tech Stack
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded font-robotoMono font-semibold hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all"
              >
                <Terminal className="h-5 w-5" />
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded font-robotoMono font-semibold hover:bg-primary/10 transition-all"
              >
                <Mail className="h-5 w-5" />
                Hire Me
              </a>
              <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-secondary text-secondary rounded font-robotoMono font-semibold hover:bg-secondary/10 transition-all">
                <Download className="h-5 w-5" />
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
