'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavbarForNextPage from "@/app/components/NavbarForNextPage";
import Footer from "@/app/components/Footer";
import { IoClose } from "react-icons/io5";
import {
  Page, Section, Hero, Reveal, Shot, TextCard, TechStack, card, muted, strong,
} from "@/app/components/project/ProjectBlocks";

const g = (n) => `/project/itHelpdesk/0${n}.jpg`;

const data = {
  label: "Power Platform | 2026",
  title: "IT Helpdesk Ticket System",
  intro:
    "A rebuilt IT repair request app for the whole company. Staff report a problem in three steps and follow it on a live timeline, while the IT team gets one dashboard for every ticket, walk-in request and spare part in stock.",
  tags: ["Power Apps", "SharePoint", "Power Automate", "Microsoft 365"],
  cover: g(1),
};

const findings = [
  { value: "714", label: "spellings of reporter names for just 230 people, because names were typed by hand" },
  { value: "0", label: "repair times measured, because the old system only kept dates" },
  { value: "1/3", label: "of 2026 tickets filed under \"Other\", so nobody knew what really broke" },
  { value: "~350", label: "walk-in and phone cases a year that never made it into the system" },
];

const steps = [
  { title: "Pick a category", text: "One of 9 problem categories, shown as large icons." },
  { title: "Pick a symptom", text: "The closest of 54 symptoms, so tickets can be counted properly." },
  { title: "Describe it", text: "Add details and a photo. Name and department come from the Microsoft 365 login." },
];

const lifecycle = [
  { title: "Reported", who: "User sends the ticket", note: "Email to the IT team" },
  { title: "Accepted", who: "IT presses Accept", note: "Time and owner recorded" },
  { title: "Repairing", who: "IT presses Start", note: "Repair clock starts" },
  { title: "Fixed", who: "IT writes the fix", note: "Email asks the reporter to confirm" },
  { title: "Closed", who: "Reporter presses \"Works now\"", note: "Ticket closes" },
];

const screens = [
  { src: g(2), caption: "Step 1 of reporting: choose one of 9 categories" },
  { src: g(3), caption: "Ticket form with the reporter's name filled in from their Microsoft account" },
  { src: g(4), caption: "Ticket detail with a 5-point status timeline" },
  { src: g(5), caption: "Equipment requests show live stock levels" },
  { src: g(6), caption: "Inventory screen for receiving items and monthly recounts" },
  { src: g(7), caption: "Automatic Outlook email when a new ticket arrives" },
];

const extras = [
  { title: "Walk-in logging", text: "IT records phone and walk-in requests in one form, so they are counted separately and nothing goes missing." },
  { title: "Spare-part stock", text: "Users see stock levels when requesting equipment, and stock is deducted when IT marks an item delivered." },
  { title: "Only the emails that matter", text: "Emails go out at four points only, each subject starting with the ticket number so it can be searched later." },
];

const stack = [
  ["App", "Power Apps (9 responsive screens, role-based home screen)"],
  ["Data", "SharePoint – 7 lists: tickets, status history, categories, symptoms, IT staff, stock, holidays"],
  ["Automation", "Power Automate flow sending Outlook emails on status changes"],
  ["Sign-in", "Microsoft 365 company accounts, no new passwords"],
];

const Lightbox = ({ item, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-[60] bg-black/80 flex flex-col items-center justify-center p-4"
    >
      <button aria-label="Close" onClick={onClose} className="absolute top-4 right-4 text-white">
        <IoClose size={32} />
      </button>
      <div className="relative w-full max-w-6xl aspect-video" onClick={(e) => e.stopPropagation()}>
        <Image src={item.src} alt={item.caption} fill sizes="100vw" className="object-contain" />
      </div>
      <p className="text-white/90 text-sm mt-4 text-center font-Ovo">{item.caption}</p>
    </div>
  );
};

const ItHelpdesk = () => {
  const [open, setOpen] = useState(null);

  return (
    <section>
      <NavbarForNextPage />
      <div className="h-[100px]"></div>
      <Page>
        <Hero data={data} variant="reverse" />

        {/* The problem, in numbers */}
        <Section label="Before the redesign" title="What 3,078 old tickets showed">
          <Reveal className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 mt-14 max-w-4xl mx-auto">
            {findings.map((f) => (
              <div key={f.value} className="flex gap-6 items-start border-l-2 border-gray-400 dark:border-white/50 pl-6">
                <p className={`text-5xl shrink-0 ${strong}`}>{f.value}</p>
                <p className={`text-sm leading-6 pt-2 ${muted}`}>{f.label}</p>
              </div>
            ))}
          </Reveal>
        </Section>

        {/* Report in 3 steps */}
        <Section label="For staff" title="Report a problem in 3 steps">
          <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {steps.map((s, i) => (
              <div key={s.title} className={card}>
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black/80 text-white dark:bg-white dark:text-black">
                  {i + 1}
                </span>
                <h3 className={`text-lg font-semibold mt-4 ${strong}`}>{s.title}</h3>
                <p className={`mt-2 text-sm leading-6 ${muted}`}>{s.text}</p>
              </div>
            ))}
          </Reveal>
        </Section>

        {/* Ticket lifecycle */}
        <Section label="For IT" title="Every ticket, timed">
          <Reveal className="mt-14">
            <ol className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              <span className="hidden lg:block absolute top-5 left-[10%] right-[10%] h-px bg-gray-400 dark:bg-white/50" />
              <span className="lg:hidden absolute top-5 bottom-5 left-5 w-px bg-gray-400 dark:bg-white/50" />
              {lifecycle.map((s, i) => (
                <li key={s.title} className="relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center">
                  <span className="relative z-10 w-10 h-10 shrink-0 flex items-center justify-center rounded-full border border-gray-400 bg-white dark:bg-darkTheme dark:border-white">
                    {i + 1}
                  </span>
                  <div className="lg:mt-4">
                    <h3 className={`text-lg font-semibold ${strong}`}>{s.title}</h3>
                    <p className={`text-sm ${muted}`}>{s.who}</p>
                    <p className={`text-xs mt-1 ${muted}`}>{s.note}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className={`mt-10 text-sm text-center max-w-2xl mx-auto ${muted}`}>
              Each step is a button that stamps the time, so repair times can finally be measured. If the reporter presses
              &quot;Still broken&quot;, the ticket goes back to the same technician and counts as a repeat repair.
            </p>
          </Reveal>
        </Section>

        {/* Screens grid */}
        <Section label="Screens" title="Inside the app">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {screens.map((s, i) => (
              <Reveal key={s.src} delay={(i % 3) * 0.1}>
                <button
                  onClick={() => setOpen(s)}
                  className="block w-full text-left group"
                  aria-label={`Enlarge: ${s.caption}`}
                >
                  <Shot src={s.src} alt={s.caption} className="group-hover:shadow-black dark:group-hover:shadow-white group-hover:-translate-y-1 duration-500" />
                  <p className={`text-sm mt-3 ${muted}`}>{s.caption}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Solution, extras, role */}
        <Section label="Case study" title="Behind the screens">
          <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {extras.map((f) => (
              <TextCard key={f.title} title={f.title} text={f.text} />
            ))}
          </Reveal>
          <Reveal delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <TextCard
              title="My role"
              text="I analysed the data from the old system, designed the ticket lifecycle and the 9 screens, built the app, the SharePoint lists and the Power Automate email flow, and wrote the user, IT and admin manuals."
            />
            <TechStack stack={stack} />
          </Reveal>
        </Section>
      </Page>
      <Footer />
      {open && <Lightbox item={open} onClose={() => setOpen(null)} />}
    </section>
  );
};

export default ItHelpdesk;
