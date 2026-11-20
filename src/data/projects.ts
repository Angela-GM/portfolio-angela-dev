export interface Project {
  id: number;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Bookloop",
    description:
      "Web para encontrar tu próximo libro en español con Tilo, un búho lector: fichas de obras, libros parecidos, sagas en orden de lectura, guías temáticas y un coach de lectura con IA. Producto propio, de la idea a producción.",
    highlights: [
      "Pipeline de datos que ingesta libros por ISBN desde OpenLibrary, los contrasta con una segunda fuente y decide si publicarlos o mandarlos a una cola de revisión.",
      "Coach de lectura con IA: el libro se elige con lógica propia sobre el catálogo y el modelo solo redacta la explicación, con salvaguardas y un límite de coste por sesión.",
      "Páginas pensadas para SEO con ISR y JSON-LD, buscador que tolera erratas y acentos, y una ingesta diaria automatizada con GitHub Actions y Vercel Cron.",
      "PostgreSQL en Supabase con RLS y un rol de solo lectura para la web; tests sin red con respuestas grabadas.",
    ],
    image: "/projects/bookloop.png",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Gemini",
      "Vercel",
      "GitHub Actions",
      "SEO",
    ],
    demoUrl: "https://bookloop.es",
  },
  {
    id: 2,
    title: "The Closer",
    description:
      "Plataforma B2B para enviar presupuestos y hacer su seguimiento. El cliente final ve y acepta el presupuesto desde un enlace, y la app le recuerda automáticamente los que siguen pendientes para que no se pierdan ventas por falta de seguimiento.",
    highlights: [
      "Seguimiento automático: un cron diario envía correos de recordatorio a los 3 y 7 días con Resend.",
      "Aceptación pública segura: lectura y cambio de estado centralizados en funciones PostgreSQL (RPC SECURITY DEFINER) con RLS en todas las tablas.",
      "Panel en tiempo real con Supabase Realtime: cuando el cliente acepta, el estado cambia al instante sin recargar.",
      "Suscripciones y packs de créditos con Stripe Checkout y webhooks.",
    ],
    image: "/projects/the-closer.png",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Resend",
      "Stripe",
      "Tailwind CSS",
      "Atomic Design",
    ],
    demoUrl: "https://thecloserapp.es",
  },
];
