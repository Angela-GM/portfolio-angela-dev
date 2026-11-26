export interface Project {
  id: number;
  title: string;
  description: string;
  /** One sentence shown on the card. */
  summary: string;
  /** Three short results shown on the card. */
  keyPoints: string[];
  /** Full technical detail, shown in the "Cómo está hecho" disclosure. */
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
    summary:
      "Web para encontrar tu próximo libro en español, con un coach de lectura con IA. Producto propio, de la idea a producción.",
    keyPoints: [
      "Catálogo que se amplía solo cada día, con cada libro comprobado por ISBN en dos fuentes.",
      "Coach con IA que solo recomienda libros reales del catálogo.",
      "Páginas pensadas para aparecer en Google.",
    ],
    highlights: [
      "Pipeline de datos que ingesta libros por ISBN desde OpenLibrary, los contrasta con una segunda fuente y decide si publicarlos o mandarlos a una cola de revisión.",
      "Coach de lectura con IA: el libro se elige con lógica propia sobre el catálogo y el modelo solo redacta la explicación, con salvaguardas y un límite de coste por sesión.",
      "Páginas pensadas para SEO con ISR y JSON-LD, buscador que tolera erratas y acentos, y una ingesta diaria automatizada con GitHub Actions y Vercel Cron.",
      "PostgreSQL en Supabase con RLS y un rol de solo lectura para la web; tests sin red con respuestas grabadas.",
    ],
    image: "/projects/bookloop.webp",
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
    summary:
      "Plataforma B2B para enviar presupuestos y hacer su seguimiento, con recordatorios automáticos para no perder ventas.",
    keyPoints: [
      "El cliente acepta el presupuesto desde un enlace, sin crearse cuenta.",
      "Recordatorios por email a los 3 y 7 días.",
      "Suscripciones y packs de créditos con Stripe.",
    ],
    highlights: [
      "Seguimiento automático: un cron diario envía correos de recordatorio a los 3 y 7 días con Resend.",
      "Aceptación pública segura: lectura y cambio de estado centralizados en funciones PostgreSQL (RPC SECURITY DEFINER) con RLS en todas las tablas.",
      "Panel en tiempo real con Supabase Realtime: cuando el cliente acepta, el estado cambia al instante sin recargar.",
      "Suscripciones y packs de créditos con Stripe Checkout y webhooks.",
    ],
    image: "/projects/the-closer.webp",
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
  {
    id: 3,
    title: "Agent Team",
    description:
      "Equipo de tres agentes de IA que trabajan juntos sobre una web: el Orquestador divide la petición en tareas, Develop escribe el código y Testing lo revisa y lo devuelve si falla, hasta que todo pasa. En pantalla se ve en directo qué hace cada agente y en qué estado está cada tarea.",
    summary:
      "Tres agentes de IA (Orquestador, Develop y Testing) que se reparten una petición y la llevan a cabo sobre una web, en directo.",
    keyPoints: [
      "Testing devuelve el código a Develop hasta que pasa, con un máximo de 5 intentos.",
      "Panel en tiempo real con lo que hace cada agente.",
      "Coste cero: Gemini en plan gratuito y Groq de respaldo.",
    ],
    highlights: [
      "Bucle Develop ↔ Testing con un tope de 5 intentos por tarea, para que un rechazo infinito no agote la cuota del modelo; solo el código aprobado entra en la web.",
      "Testing combina comprobaciones automáticas sin IA (estructura HTML, enlaces rotos, etiquetas de formularios, sintaxis de JavaScript) con una revisión del modelo contra los criterios de aceptación.",
      "Ejecución paso a paso guardada en Supabase, para no superar el límite de tiempo de Vercel y poder retomar el trabajo si se cierra la pestaña; panel en tiempo real con Supabase Realtime.",
      "Coste cero: Gemini en plan gratuito con varios modelos en cadena y Groq de respaldo, RLS en todas las tablas y la vista previa en un iframe aislado de la sesión.",
    ],
    image: "/projects/agent-team.webp",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Gemini",
      "Agentes de IA",
      "Tailwind CSS",
      "Vercel",
    ],
    demoUrl: "https://agent-team-drab.vercel.app",
    codeUrl: "https://github.com/Angela-GM/agent-team",
  },
];
