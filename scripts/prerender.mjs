// Build-time prerender: writes the HTML of each page with its content, meta
// tags and structured data already in place, so search engines and AI
// crawlers that don't run JavaScript can read the portfolio. Also writes
// sitemap.xml, robots.txt and llms.txt from the same data the page shows.
//
// Runs after `vite build` (client) and `vite build --ssr` (dist-ssr/).
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

// Canonical address of the site. Change it here (or with SITE_URL) if the
// portfolio moves to its own domain.
const SITE = (process.env.SITE_URL || "https://portfolio-angela-dev.vercel.app").replace(/\/$/, "");
// Google Search Console ownership tag (URL-prefix property), set in Vercel.
const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION || "";

const { render, projects, skillCategories, experiences, contactInfo } = await import(
  pathToFileURL(join(ssrDir, "entry-server.js")).href
);

// Contact details come from src/data/contact-info.ts, like on the page.
const contact = (title) => contactInfo.find((c) => c.title === title)?.value;
const PERSON = {
  name: "Angela Garcia",
  jobTitle: "Desarrolladora Frontend · Full Stack",
  email: contact("Email"),
  city: (contact("Ubicación") ?? "").split(",")[0],
  linkedin: "https://www.linkedin.com/in/angela-garcia-mu/",
  github: "https://github.com/Angela-GM",
};

const today = new Date().toISOString().slice(0, 10);
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const dailySkills = skillCategories.flatMap((c) => c.skills["Uso diario"] ?? []);

const homeDescription = `${PERSON.name}, desarrolladora Frontend · Full Stack en ${PERSON.city}. Construyo productos web de principio a fin con React, Next.js y Supabase, como Bookloop y The Closer.`;

const personId = `${SITE}/#person`;
const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: `${PERSON.name} · Portfolio`,
      inLanguage: "es",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE}/#profile`,
      url: `${SITE}/`,
      name: `${PERSON.name} · ${PERSON.jobTitle}`,
      description: homeDescription,
      inLanguage: "es",
      dateModified: today,
      isPartOf: { "@id": `${SITE}/#website` },
      mainEntity: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: PERSON.name,
      jobTitle: PERSON.jobTitle,
      description:
        "Desarrolladora Frontend · Full Stack: construye productos web de principio a fin, con el foco en el frontend.",
      url: `${SITE}/`,
      image: `${SITE}/avatar-angela.jpg`,
      ...(PERSON.email ? { email: `mailto:${PERSON.email}` } : {}),
      address: { "@type": "PostalAddress", addressLocality: PERSON.city, addressCountry: "ES" },
      sameAs: [PERSON.linkedin, PERSON.github],
      knowsAbout: dailySkills,
      knowsLanguage: ["es", "ca"],
      alumniOf: [
        { "@type": "EducationalOrganization", name: "Factoría F5" },
        { "@type": "EducationalOrganization", name: "Ironhack" },
        { "@type": "EducationalOrganization", name: "CIFO L'Hospitalet" },
      ],
    },
    ...projects.map((p) => ({
      "@type": "WebApplication",
      "@id": `${SITE}/#project-${p.id}`,
      name: p.title,
      description: p.description,
      url: p.demoUrl,
      image: `${SITE}${p.image}`,
      applicationCategory: "WebApplication",
      creator: { "@id": personId },
      keywords: p.tags.join(", "),
    })),
  ],
};

const pages = [
  {
    url: "/",
    out: "index.html",
    title: `${PERSON.name} · ${PERSON.jobTitle}`,
    description: homeDescription,
    canonical: `${SITE}/`,
    jsonLd: homeJsonLd,
    inSitemap: true,
  },
  {
    url: "/privacidad",
    out: "privacidad.html",
    title: `Política de privacidad · ${PERSON.name}`,
    description: `Qué datos recoge el formulario de contacto del portfolio de ${PERSON.name}, para qué se usan y cómo ejercer tus derechos.`,
    canonical: `${SITE}/privacidad`,
    inSitemap: true,
  },
  {
    url: "/404",
    out: "404.html",
    title: `Página no encontrada · ${PERSON.name}`,
    description: "Esta página no existe.",
    robots: "noindex",
  },
];

function headFor(page) {
  const image = `${SITE}/og-image.png`;
  const tags = [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<meta name="robots" content="${page.robots ?? "index, follow, max-image-preview:large"}" />`,
    page.canonical && `<link rel="canonical" href="${page.canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(PERSON.name)}" />`,
    `<meta property="og:locale" content="es_ES" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    page.canonical && `<meta property="og:url" content="${page.canonical}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(`${PERSON.name}, ${PERSON.jobTitle}`)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    page.url === "/" &&
      GOOGLE_SITE_VERIFICATION &&
      `<meta name="google-site-verification" content="${esc(GOOGLE_SITE_VERIFICATION)}" />`,
    // "<" escaped so the JSON can never close the script tag.
    page.jsonLd &&
      `<script type="application/ld+json">${JSON.stringify(page.jsonLd).replace(/</g, "\\u003c")}</script>`,
  ];
  return tags.filter(Boolean).join("\n    ");
}

const template = readFileSync(join(dist, "index.html"), "utf8");
const seoBlock = /<!-- seo:start[\s\S]*?<!-- seo:end -->/;
if (!seoBlock.test(template) || !template.includes("<!--app-html-->")) {
  throw new Error("index.html no tiene los marcadores seo:start/seo:end o <!--app-html-->");
}

for (const page of pages) {
  const html = template.replace(seoBlock, headFor(page)).replace("<!--app-html-->", render(page.url));
  const file = join(dist, page.out);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log(`prerender: ${page.url} -> dist/${page.out}`);
}

writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .filter((p) => p.inSitemap)
  .map((p) => `  <url>\n    <loc>${p.canonical}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join("\n")}
</urlset>
`
);

// Everything is public: search engines and AI search/answer crawlers
// (OAI-SearchBot, Claude-SearchBot, PerplexityBot...) are all allowed.
writeFileSync(
  join(dist, "robots.txt"),
  `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`
);

// Optional, experimental summary for LLM tools (https://llmstxt.org).
const current = experiences[0];
writeFileSync(
  join(dist, "llms.txt"),
  `# ${PERSON.name}

> ${PERSON.jobTitle} en ${PERSON.city} (España). Construye productos web de principio a fin, con el foco en el frontend: interfaces cuidadas, rápidas y fáciles de usar, apoyadas en un backend sólido.

- Portfolio: ${SITE}/
- LinkedIn: ${PERSON.linkedin}
- GitHub: ${PERSON.github}
${PERSON.email ? `- Contacto: ${PERSON.email}\n` : ""}
## Situación actual

${current.title} · ${current.company} (${current.period}).
${current.description.map((d) => `- ${d}`).join("\n")}

## Proyectos

${projects
  .map((p) => `- [${p.title}](${p.demoUrl}): ${p.description} Tecnologías: ${p.tags.join(", ")}.`)
  .join("\n")}

## Habilidades

${skillCategories
  .map(
    (c) =>
      `- ${c.title}: ${Object.entries(c.skills)
        .map(([level, list]) => `${level.toLowerCase()}: ${list.join(", ")}`)
        .join("; ")}.`
  )
  .join("\n")}

## Experiencia

${experiences.map((e) => `- ${e.title} · ${e.company} (${e.period})`).join("\n")}
`
);

console.log("prerender: sitemap.xml, robots.txt, llms.txt");
rmSync(ssrDir, { recursive: true, force: true });
