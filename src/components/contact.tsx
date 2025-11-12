"use client";

import { FolderGit2, Mail, Send, Workflow } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="font-mono text-primary mb-4">
            <span className="text-muted-foreground">{"// "}</span>Let&apos;s
            Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-mono">
            <span className="text-primary">async</span> contactDeveloper()
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Terminal Contact Form */}
          <div className="backdrop-blur-glass bg-[hsl(var(--glass-bg))] border-2 border-[hsl(var(--border))] rounded-lg overflow-hidden">
            <div className="bg-[hsl(var(--muted))] px-4 py-2 border-b border-[hsl(var(--border))] font-mono text-xs text-muted-foreground">
              contact_form.tsx
            </div>

            <div className="p-6">
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 font-mono text-sm"
                >
                  <div>
                    <label className="block mb-2">
                      <span className="text-secondary">const</span>{" "}
                      <span className="text-foreground">name</span>{" "}
                      <span className="text-muted-foreground">=</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded px-3 py-2 text-primary focus:outline-none focus:border-primary"
                      placeholder='"Your Name"'
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2">
                      <span className="text-secondary">const</span>{" "}
                      <span className="text-foreground">email</span>{" "}
                      <span className="text-muted-foreground">=</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded px-3 py-2 text-primary focus:outline-none focus:border-primary"
                      placeholder='"your@email.com"'
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2">
                      <span className="text-secondary">const</span>{" "}
                      <span className="text-foreground">message</span>{" "}
                      <span className="text-muted-foreground">=</span>
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded px-3 py-2 text-primary focus:outline-none focus:border-primary resize-none"
                      rows={4}
                      placeholder='"Tell me about your project..."'
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground rounded py-2 font-semibold hover:shadow-[0_0_20px_hsl(var(--primary)/0.6)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    await sendMessage()
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 font-mono">
                  <div className="text-primary text-6xl mb-4">✓</div>
                  <div className="text-primary">
                    <span className="text-secondary">return</span>{" "}
                    <span className="text-primary">
                      &quot;Message sent successfully!&quot;
                    </span>
                    ;
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info & Links */}
          <div className="space-y-6">
            {/* Email */}
            <div className="backdrop-blur-glass bg-[hsl(var(--glass-bg))] border-2 border-[hsl(var(--border))] rounded-lg p-6 font-mono hover:border-primary transition-all">
              <div className="text-sm text-muted-foreground mb-2">
                <span className="text-secondary">const</span> email{" "}
                <span className="text-muted-foreground">=</span>
              </div>
              <a
                href="mailto:niazahmed.an@gmail.com"
                className="text-primary hover:text-secondary transition-colors flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                &quot;niazahmed.an@gmail.com&quot;
              </a>
            </div>

            {/* Social Links */}
            <div className="backdrop-blur-glass bg-[hsl(var(--glass-bg))] border-2 border-[hsl(var(--border))] rounded-lg p-6 font-mono hover:border-primary transition-all">
              <div className="text-sm text-muted-foreground mb-4">
                <span className="text-secondary">const</span> socials{" "}
                <span className="text-muted-foreground">= {"{"}</span>
              </div>

              <div className="space-y-3 pl-4">
                <a
                  href="https://github.com/ahmed-niaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary hover:text-secondary transition-colors"
                >
                  <FolderGit2 className="h-5 w-5" />
                  <span>github: `/ahmed-niaz`</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmed-niaz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary hover:text-secondary transition-colors"
                >
                  <Workflow className="h-5 w-5" />
                  <span>linkedin: `/in/ahmed-niaz`</span>
                </a>
              </div>

              <div className="text-sm text-muted-foreground mt-4">{"}"}</div>
            </div>

            {/* Code Comment */}
            <div className="font-mono text-sm text-muted-foreground p-6">
              <div className="border-l-2 border-primary/30 pl-4">
                <span className="text-primary">{"// "}</span>
                Open to freelance opportunities and
                <br />
                <span className="text-primary">{"// "}</span>
                full-time positions. Let&apos;s build
                <br />
                <span className="text-primary">{"// "}</span>
                something amazing together!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
