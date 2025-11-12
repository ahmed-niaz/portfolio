import { Cpu, Database, Globe, TrendingUp } from "lucide-react";

export const codeLines = [
  "// Initializing developer profile...",
  "",
  "class MidLevelDeveloper {",
  "  constructor() {",
  "    this.name = 'Niaz';",
  "    this.title = 'Shopify Developer';",
  "    this.experience = 'almost a year';",
  "    this.status = 'Available for hire';",
  "  }",
  "",
  "  currentStack() {",
  "    return {",
  "      frontend: ['React', 'TypeScript', 'Next.js'],",
  "      backend: ['Node.js', 'PostgreSQL'],",
  "      tools: ['Git', 'VS Code']",
  "    };",
  "  }",
  "",
  "  recentAchievements() {",
  "    return [",
  "      '✓ Built 40+ e-commerce client projects',",
  "      '✓ Almost a year of professional experience',",
  "      '✓  Trying to contribute everyday',",
  "      ",
  "    ];",
  "  }",
  "}",
  "",
  "const developer = new MidLevelDeveloper();",
  "developer.currentStack();",
  "// > Ready to build amazing things!",
];

// projects

export const projects = [
  {
    id: "01",
    title: "E-Commerce Platform [dummy]",
    description:
      "Full-stack marketplace with real-time inventory, payment processing, and admin dashboard. Handling 10K+ daily transactions.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    icon: Globe,
    github: "https://github.com",
    demo: "https://example.com",
    metrics: "10K+ users",
    codeSnippet: `// Payment processing
const session = await stripe
  .checkout.sessions.create({
    line_items: cartItems,
    mode: 'payment',
    success_url: '/success'
  });`,
  },
  {
    id: "02",
    title: "Real-Time Analytics Dashboard [dummy]",
    description:
      "Live data visualization platform processing 100K+ events/min with WebSocket connections and data aggregation.",
    tech: ["React", "D3.js", "Socket.io", "MongoDB"],
    icon: TrendingUp,
    github: "https://github.com",
    demo: "https://example.com",
    metrics: "100K events/min",
    codeSnippet: `// Real-time data stream
socket.on('metrics', (data) => {
  const processed = aggregate(data);
  updateChart(processed);
  cache.set(key, processed, 60);
});`,
  },
  {
    id: "03",
    title: "API Gateway Service [dummy]",
    description:
      "Microservices architecture with rate limiting, authentication, and load balancing. 99.9% uptime SLA.",
    tech: ["Node.js", "Redis", "Docker", "AWS"],
    icon: Database,
    github: "https://github.com",
    demo: "https://example.com",
    metrics: "99.9% uptime",
    codeSnippet: `// Rate limiter middleware
const limiter = rateLimit({
  windowMs: 60000,
  max: 100,
  store: redisStore,
  handler: tooManyRequests
});`,
  },
  {
    id: "04",
    title: "CI/CD Automation Tool [dummy]",
    description:
      "DevOps pipeline automation reducing deployment time by 60%. Integrated with GitHub, Docker, and Kubernetes.",
    tech: ["Python", "Docker", "K8s", "GitHub Actions"],
    icon: Cpu,
    github: "https://github.com",
    demo: "https://example.com",
    metrics: "60% faster deploys",
    codeSnippet: `# Automated deployment
def deploy(service):
    build_image(service)
    push_to_registry()
    kubectl_apply()
    verify_health_check()`,
  },
];

// skills

export const skillsData = {
  languages: [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "Liquid" },
  ],
  libraries: [
    { name: "React.js" },
    { name: "React Router DOM" },
    { name: "Tailwind CSS" },
  ],
  frameworks: [{ name: "Next.js" }, { name: "Express.js" }],
  runtime: [{ name: "Node.js" }],
  tools: [
    { name: "Git" },
    { name: "GitHub" },
    { name: "VS Code" },
    { name: "Figma" },
    { name: "Shopify" },
  ],
  databases: [{ name: "MongoDB" }, { name: "PostgreSQL" }],
  orm: [{ name: "Mongoose" }, { name: "Prisma" }],
  libraries: [{ name: "React Router DOM" }],
};
