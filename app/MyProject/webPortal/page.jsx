'use client'
import React from "react";
import NavbarForNextPage from "@/app/components/NavbarForNextPage";
import Footer from "@/app/components/Footer";
import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import {
  Page, Section, Hero, Reveal, Shot, StatCards, Gallery, TextCard, card, muted, strong,
} from "@/app/components/project/ProjectBlocks";

const g = (n) => `/project/webPortal/0${n}.jpg`;

const data = {
  label: "Full-stack web app | 2026",
  title: "UNIPRO Web Service Portal",
  intro:
    "One page that gathers every work system in the company. I rebuilt a hard-coded HTML/jQuery link page into a full-stack app, so staff find systems faster and admins update content without touching code.",
  tags: ["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Power BI Embedded", "Docker"],
  cover: g(1),
};

const before = {
  src: g(2),
  points: [
    "A static HTML page with around 200 links written into the code",
    "A long three-column list with no search",
    "No way to keep the links you use every day",
    "Every change meant editing the file and uploading it to the server by hand",
  ],
};

const after = {
  src: g(1),
  points: [
    "160+ links in a database, managed from an admin panel",
    "Instant search, starred favourites and department Quick Nav",
    "Power BI KPI reports and company news on the home page",
    "Admins add a link or report with no code change and no redeploy",
  ],
};

const stats = [
  { value: "160+", label: "system links in one place" },
  { value: "4", label: "menu groups: Portal, Service, KPI On Web, Quick Nav" },
  { value: "2", label: "admin roles: news & background, and link management" },
  { value: "0", label: "code changes needed to add a link or report" },
];

const gallery = [
  { src: g(3), caption: "Search filters every link as you type, including hidden keywords" },
  { src: g(4), caption: "Service category: repair requests, forms and reports" },
  { src: g(5), caption: "KPI On Web: Power BI reports grouped by department" },
  { src: g(6), caption: "Admin sign-in, locked for 30 minutes after 3 failed attempts" },
  { src: g(7), caption: "Admin: post company news with an image and caption" },
];

const architecture = [
  ["Frontend", "Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4"],
  ["Backend", "Route Handlers, Prisma ORM 7, PostgreSQL, signed session cookies"],
  ["Reports", "Power BI Embedded through the company token service, with a Content-Security-Policy"],
  ["Deploy", "GitHub PR flow → Dokploy (Docker) auto-build, Cloudflare CDN"],
];

const features = [
  { title: "Instant search", text: "Results update while typing and match both names and hidden keywords, in Thai or English." },
  { title: "Favourites", text: "Star a link to pin it to the top. Favourites are saved per browser." },
  { title: "KPI On Web", text: "Reports embedded by department, added from the admin panel in four steps. Staff need no Power BI account." },
  { title: "Self-service admin", text: "Add, hide and reorder links, post news and change the background video." },
  { title: "Files in the database", text: "Uploads are stored in PostgreSQL and streamed with HTTP Range, so moving servers loses nothing." },
  { title: "Mobile first", text: "Search and favourites sit at the top on a 390px screen, and the background video turns off to save data." },
];

const Compare = ({ tag, item, highlight }) => (
  <Reveal delay={highlight ? 0.2 : 0} className={`${card} flex flex-col`}>
    <span
      className={`w-max text-sm px-4 py-1 rounded-full ${highlight ? "bg-black/80 text-white dark:bg-white dark:text-black" : "border-[0.5px] border-gray-400 dark:border-white/50"}`}
    >
      {tag}
    </span>
    <Shot src={item.src} alt={tag} className="mt-5" />
    <ul className="mt-5 space-y-2">
      {item.points.map((p) => (
        <li key={p} className={`text-sm leading-6 flex gap-2 ${muted}`}>
          <span className={strong}>{highlight ? "✓" : "–"}</span>
          {p}
        </li>
      ))}
    </ul>
  </Reveal>
);

const WebPortal = () => (
  <section>
    <NavbarForNextPage />
    <div className="h-[100px]"></div>
    <Page>
      <Hero data={data} variant="split" />

      <Section label="The redesign" title="Before and after">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Compare tag="Before" item={before} />
          <Compare tag="After" item={after} highlight />
        </div>
      </Section>

      <StatCards stats={stats} />

      <Section label="Screens" title="A closer look">
        <Gallery images={gallery} />
      </Section>

      <Section label="Architecture" title="How it is built">
        <Reveal className="flex flex-col lg:flex-row items-stretch gap-3 mt-12">
          {architecture.map(([group, items], i) => (
            <React.Fragment key={group}>
              <div className={`${card} flex-1`}>
                <p className={`text-sm ${muted}`}>0{i + 1}</p>
                <h3 className={`text-lg font-semibold mt-1 ${strong}`}>{group}</h3>
                <p className={`mt-3 text-sm leading-6 ${muted}`}>{items}</p>
              </div>
              {i < architecture.length - 1 && (
                <div className={`flex items-center justify-center ${muted}`}>
                  <BsArrowRight className="hidden lg:block" size={22} />
                  <BsArrowDown className="lg:hidden" size={22} />
                </div>
              )}
            </React.Fragment>
          ))}
        </Reveal>
        <Reveal delay={0.2} className="mt-6">
          <TextCard
            title="My role"
            text="I owned the project end to end: redesigning the UI for desktop and mobile, building the frontend, API and database, embedding Power BI, and setting up deployment with Dokploy and Cloudflare."
          />
        </Reveal>
      </Section>

      <Section label="Highlights" title="Key features">
        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((f) => (
            <TextCard key={f.title} title={f.title} text={f.text} />
          ))}
        </Reveal>
      </Section>
    </Page>
    <Footer />
  </section>
);

export default WebPortal;
