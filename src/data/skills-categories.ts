export type SkillLevel = "Uso diario" | "Con experiencia" | "Aprendiendo";

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Partial<Record<SkillLevel, string[]>>;
}

// Order in which the levels are shown inside each card.
export const SKILL_LEVELS: SkillLevel[] = ["Uso diario", "Con experiencia", "Aprendiendo"];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend y diseño",
    icon: "🎨",
    skills: {
      "Uso diario": [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5 / CSS3",
        "Tailwind CSS",
        "Responsive Design",
      ],
      "Con experiencia": [
        "Atomic Design",
        "Design Systems",
        "UI/UX",
        "Animaciones",
        "Accesibilidad",
        "Vue.js",
        "SCSS / Sass",
        "Styled Components",
      ],
    },
  },
  {
    title: "Backend y bases de datos",
    icon: "⚙️",
    skills: {
      "Uso diario": ["APIs REST"],
      "Con experiencia": [
        "Node.js",
        "PostgreSQL",
        "Supabase (Auth, RLS, Realtime)",
        "NestJS",
        "Express",
        "MySQL",
        "MongoDB",
      ],
    },
  },
  {
    title: "IA, pagos e integraciones",
    icon: "✨",
    skills: {
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
      "Uso diario": ["Git / GitHub", "Bitbucket", "VS Code"],
      "Con experiencia": [
        "Vercel",
        "GitHub Actions",
        "CI/CD",
        "Docker",
        "Render",
        "Vite",
        "Vitest / Jest",
        "Postman",
        "Figma",
      ],
      Aprendiendo: ["AWS"],
    },
  },
];
