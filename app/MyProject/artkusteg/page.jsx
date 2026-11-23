'use client'
import React from "react";
import NavbarForNextPage from "@/app/components/NavbarForNextPage";
import Footer from "@/app/components/Footer";
import {
  Page, Section, Hero, Reveal, Shot, TextCard, TechStack, card, muted, strong,
} from "@/app/components/project/ProjectBlocks";

const g = (n) => `/project/artkusteg/0${n}.jpg`;

const data = {
  label: "Brand website | 2026",
  title: "ArtKUSTEG Product Website",
  intro:
    "The brand website for ArtKUSTEG, Unipro Manufacturing's acoustic panels made from recycled PET. It has to carry both the design story and the engineering proof, so architects and buyers can choose a product and get in touch on their own.",
  tags: ["HTML / CSS / JS", "PHP", "model-viewer 3D", "Python", "Playwright", "TH / EN"],
  cover: g(1),
  link: { href: "https://artkusteg.com", label: "Visit artkusteg.com" },
};

const stats = [
  { value: "47", label: "pages in the sitemap" },
  { value: "2", label: "languages, instant TH/EN switch" },
  { value: "59", label: "colours in 3 ranges" },
  { value: "34", label: "portfolio projects" },
];

const palette = [
  { hex: "#0E1B2E", name: "Deep navy", use: "Page background" },
  { hex: "#15233A", name: "Navy", use: "Sections and cards" },
  { hex: "#C2A063", name: "Gold", use: "Accent and calls to action" },
  { hex: "#F1F3F6", name: "Mist", use: "Text and light sections" },
];

const showcase = [
  {
    src: g(2),
    title: "Scroll-driven bottle crush",
    text: "From plastic bottle to acoustic panel. One wheel notch moves one frame, and frames swap instantly, so the bottle feels like it is really being crushed as you scroll.",
  },
  {
    src: g(3),
    title: "Everything in one popup",
    text: "Each of the 9 products opens in one popup with 59 colours, fabric zoom, photos and a 3D model you can rotate.",
  },
  {
    src: g(4),
    title: "Filterable portfolio",
    text: "34 real installations, filtered by venue type, with 10 full case pages for the projects that tell the best story.",
  },
  {
    src: g(5),
    title: "Engineering proof",
    text: "Absorption-by-frequency data for every product, so architects can check the numbers without asking for a spec sheet.",
  },
  {
    src: g(6),
    title: "Admin with no manual",
    text: "The content admin is laid out like the site itself, with every field in Thai and English, an unsaved-change marker and delete confirmation.",
  },
  {
    src: g(7),
    title: "Built to be found",
    text: "FAQ and long-form guides answer real buyer questions in short Q&A blocks, with structured data that search engines and AI answers can quote.",
  },
];

const story = [
  [
    "Challenge",
    "Three very different visitors: architects who need acoustic data and spec files, contractors who need references and certifications, and people with a noise problem who want plain answers. The site had to take each of them from \"I have a sound problem\" to \"request the catalogue\" in a few clicks.",
  ],
  [
    "Solution",
    "A bilingual, mobile-first site on a clear design system. Product, proof and portfolio are each one click from the home page, and the marketing team updates everything from their own admin.",
  ],
  [
    "My role",
    "I designed and built the site: the design system, page layouts, scroll interactions, product and portfolio pages, the bilingual admin, SEO and AI-search setup, and the performance and security hardening.",
  ],
];

const stack = [
  ["Frontend", "HTML5, CSS custom properties, vanilla JavaScript, model-viewer (3D)"],
  ["Backend", "PHP API for content saves, image uploads and SMTP contact form; one JSON source of truth"],
  ["Build & SEO", "Python scripts for SEO/schema, hashed file names and WebP conversion (Pillow)"],
  ["QA & tools", "Playwright + Microsoft Edge, Git, Google Tag Manager, Claude Code"],
];

const Artkusteg = () => (
  <section>
    <NavbarForNextPage />
    <div className="h-[100px]"></div>
    <Page>
      <Hero data={data} variant="centered" />

      {/* Stats strip */}
      <Reveal>
        <ul className="grid grid-cols-2 md:grid-cols-4 my-20 border-y border-gray-400 dark:border-white/50">
          {stats.map((s, i) => (
            <li
              key={s.label}
              className={`py-8 px-4 text-center border-gray-400 dark:border-white/50 ${i % 2 ? "border-l" : ""} ${i > 0 ? "md:border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""}`}
            >
              <p className="text-5xl">{s.value}</p>
              <p className={`mt-2 text-sm ${muted}`}>{s.label}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Design system */}
      <Section label="Design system" title="Navy, gold and calm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          <Reveal className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {palette.map((c) => (
              <div key={c.hex} className="rounded-lg overflow-hidden border border-gray-400 dark:border-white/50">
                <div className="h-28" style={{ background: c.hex }} />
                <div className="p-3">
                  <p className={`text-sm font-semibold ${strong}`}>{c.name}</p>
                  <p className={`text-xs ${muted}`}>{c.hex}</p>
                  <p className={`text-xs mt-1 ${muted}`}>{c.use}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.2} className={`${card} flex flex-col justify-between gap-6`}>
            <div>
              <p className={`text-sm ${muted}`}>Headings</p>
              <p className={`text-2xl ${strong}`}>Montserrat + Prompt</p>
            </div>
            <div>
              <p className={`text-sm ${muted}`}>Body</p>
              <p className={`text-2xl ${strong}`}>Inter + Sarabun</p>
            </div>
            <p className={`text-sm leading-6 ${muted}`}>
              Text colours pass WCAG AA, Thai gets a taller line height, and every tap target is at least 44px with a visible focus ring.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Zigzag showcase */}
      <Section label="Showcase" title="What visitors see">
        <div className="mt-16 space-y-20">
          {showcase.map((item, i) => (
            <div
              key={item.src}
              className={`flex flex-col gap-8 md:gap-12 items-center ${i % 2 ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              <Reveal className="md:w-3/5">
                <Shot src={item.src} alt={item.title} className="hover:shadow-black dark:hover:shadow-white duration-500" />
              </Reveal>
              <Reveal delay={0.2} className="md:w-2/5">
                <p className={`text-sm ${muted}`}>0{i + 1}</p>
                <h3 className={`text-2xl sm:text-3xl mt-1 ${strong}`}>{item.title}</h3>
                <p className={`mt-4 leading-7 ${muted}`}>{item.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      {/* Story */}
      <Section label="Case study" title="How it came together">
        <Reveal className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {story.map(([title, text]) => (
            <TextCard key={title} title={title} text={text} />
          ))}
        </Reveal>
        <Reveal delay={0.2} className="mt-6">
          <TechStack stack={stack} />
        </Reveal>
      </Section>
    </Page>
    <Footer />
  </section>
);

export default Artkusteg;
