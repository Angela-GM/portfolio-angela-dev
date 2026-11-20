export type SkillLevel = "Uso diario" | "Con experiencia" | "Aprendiendo";

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Partial<Record<SkillLevel, string[]>>;
}

// Order in which the levels are shown inside each card.
export const SKILL_LEVELS: SkillLevel[] = ["Uso diario", "Con experiencia", "Aprendiendo"];

// "Uso diario": what the current projects (Bookloop, The Closer, freelance work)
// are built with. "Con experiencia": used in previous jobs, per the CV.
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend y diseño",
    icon: "🎨",
    skills: {
      "Uso diario": [
        "React",
        "Next.js (App Router)",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5 / CSS3",
        "Tailwind CSS",
        "Atomic Design",
        "Responsive Design",
      ],
      "Con experiencia": [
        "Figma",
        "UI/UX y prototipado",
        "Accesibilidad",
        "Design Systems",
        "Formik + Yup",
        "Redux",
        "React Query",
        "Styled Components",
        "Vue.js",
        "React Native",
      ],
    },
  },
  {
    title: "Backend y bases de datos",
    icon: "⚙️",
    skills: {
      "Uso diario": [
        "Node.js",
        "PostgreSQL",
        "SQL",
        "Supabase (Auth, RLS, Realtime, RPC)",
        "Next.js API Routes y Server Actions",
        "APIs REST",
        "Cron jobs",
        "Zod",
      ],
      "Con experiencia": [
        "NestJS",
        "Express",
        "MySQL (TypeORM)",
        "MongoDB (Mongoose)",
        "Prisma",
        "JWT / Passport",
        "Swagger",
        "SDKs publicados en npm",
      ],
    },
  },
  {
    title: "IA e integraciones",
    icon: "✨",
    skills: {
      "Uso diario": ["Claude / Claude Code", "Gentle AI"],
      "Con experiencia": [
        "Gemini",
        "OpenAI API",
        "Embeddings y pgvector",
        "Stripe (suscripciones y webhooks)",
        "Resend",
        "SEO técnico (ISR, JSON-LD)",
      ],
    },
  },
  {
    title: "DevOps y herramientas",
    icon: "🛠️",
    skills: {
      "Uso diario": ["Git / GitHub", "Vercel", "GitHub Actions", "VS Code"],
      "Con experiencia": [
        "Docker",
        "Bitbucket y Pipelines (CI/CD)",
        "Render",
        "Postman",
        "Vite",
      ],
      Aprendiendo: ["AWS"],
    },
  },
  {
    title: "Testing y metodologías",
    icon: "✅",
    skills: {
      "Uso diario": ["Clean Code", "SOLID"],
      "Con experiencia": [
        "TDD",
        "Jest",
        "Vitest",
        "Node test runner",
        "Scrum",
        "Kanban",
        "Jira",
        "MVC",
      ],
    },
  },
];
