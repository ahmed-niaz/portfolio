import { Cpu, Database, Globe, TrendingUp } from "lucide-react";

export const codeLines = [
  "// Initializing developer profile...",
  "",
  "class MidLevelDeveloper {",
  "  constructor() {",
  "    this.name = 'Niaz';",
  "    this.title = 'Shopify Developer';",
  "    this.experience = '3-5 years';",
  "    this.status = 'Available for hire';",
  "  }",
  "",
  "  currentStack() {",
  "    return {",
  "      frontend: ['React', 'TypeScript', 'Next.js'],",
  "      backend: ['Node.js', 'Python', 'PostgreSQL'],",
  "      tools: ['Docker', 'AWS', 'Git', 'CI/CD']",
  "    };",
  "  }",
  "",
  "  recentAchievements() {",
  "    return [",
  "      '✓ Led team of 3 developers',",
  "      '✓ Reduced API latency by 40%',",
  "      '✓ Built 5+ production apps',",
  "      '✓ 1000+ contributions this year'",
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
    title: "E-Commerce Platform",
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
    title: "Real-Time Analytics Dashboard",
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
    title: "API Gateway Service",
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
    title: "CI/CD Automation Tool",
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
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "Go", level: 70 },
    { name: "SQL", level: 80 },
  ],
  frameworks: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 90 },
    { name: "Express", level: 90 },
    { name: "FastAPI", level: 75 },
  ],
  tools: [
    { name: "Git", level: 95 },
    { name: "Docker", level: 85 },
    { name: "AWS", level: 75 },
    { name: "PostgreSQL", level: 85 },
    { name: "Redis", level: 80 },
  ],
  concepts: [
    { name: "REST APIs", level: 95 },
    { name: "Microservices", level: 80 },
    { name: "CI/CD", level: 85 },
    { name: "Testing", level: 90 },
    { name: "System Design", level: 75 },
  ],
};
