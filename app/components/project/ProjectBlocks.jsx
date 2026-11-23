'use client'
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

// Shared building blocks for project detail pages (same look as All Projects).

export const card =
  "border border-gray-400 rounded-lg p-6 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50";

export const muted = "text-gray-600 dark:text-white/80";
export const strong = "text-gray-700 dark:text-white";

export const Page = ({ children }) => (
  <div className="w-full px-[8%] lg:px-[12%] py-10 font-Ovo">{children}</div>
);

export const Section = ({ label, title, children, className = "" }) => (
  <section className={`my-24 ${className}`}>
    {title && <SectionTitle label={label} title={title} />}
    {children}
  </section>
);

export const SectionTitle = ({ label, title }) => (
  <>
    <motion.h4
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="text-center mb-2 text-lg"
    >
      {label}
    </motion.h4>
    <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="text-center text-4xl sm:text-5xl"
    >
      {title}
    </motion.h2>
  </>
);

export const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className={className}
  >
    {children}
  </motion.div>
);

const HeroText = ({ data, center }) => (
  <div className={`flex-1 ${center ? "text-center max-w-3xl mx-auto" : ""}`}>
    <motion.h4
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="mb-2 text-lg"
    >
      {data.label}
    </motion.h4>
    <motion.h1
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="text-4xl sm:text-6xl leading-tight"
    >
      {data.title}
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className={`mt-6 ${muted}`}
    >
      {data.intro}
    </motion.p>
    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className={`flex flex-wrap gap-2 mt-6 ${center ? "justify-center" : ""}`}
    >
      {data.tags.map((tag) => (
        <li
          key={tag}
          className="text-sm px-4 py-1 border-[0.5px] border-gray-400 rounded-full dark:border-white/50"
        >
          {tag}
        </li>
      ))}
    </motion.ul>
    {data.link && (
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        href={data.link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-max flex items-center gap-2 mt-8 py-3 px-8 rounded-full bg-black/80 text-white hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover ${center ? "mx-auto" : ""}`}
      >
        {data.link.label} &rarr;
      </motion.a>
    )}
  </div>
);

const HeroImage = ({ data, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className={`w-full ${className}`}
  >
    <Image
      src={data.cover}
      alt={data.title}
      width={1600}
      height={900}
      sizes="(max-width: 1024px) 100vw, 75vw"
      className="w-full h-auto rounded-lg border border-gray-400 shadow-black dark:border-white/50 dark:shadow-white"
      priority
    />
  </motion.div>
);

// variant: "split" (text | image), "reverse" (image | text), "centered" (text, then wide image)
export const Hero = ({ data, variant = "split" }) => {
  if (variant === "centered") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="my-10"
      >
        <HeroText data={data} center />
        <HeroImage data={data} className="mt-14 max-w-6xl mx-auto" />
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`flex flex-col items-center gap-12 my-10 ${variant === "reverse" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <HeroText data={data} />
      <HeroImage data={data} className="flex-1" />
    </motion.div>
  );
};

export const StatCards = ({ stats }) => (
  <motion.ul
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.6 }}
    className="grid-auto gap-6 my-16"
  >
    {stats.map((stat) => (
      <motion.li key={stat.label} whileHover={{ scale: 1.05 }} className={card}>
        <p className="text-4xl">{stat.value}</p>
        <p className={`mt-2 text-sm ${muted}`}>{stat.label}</p>
      </motion.li>
    ))}
  </motion.ul>
);

export const TechStack = ({ stack, className = "" }) => (
  <div className={`${card} ${className}`}>
    <h3 className={`text-lg font-semibold ${strong}`}>Tech stack</h3>
    <ul className="mt-3 space-y-2">
      {stack.map(([group, items]) => (
        <li key={group} className={`text-sm leading-6 ${muted}`}>
          <span className={`font-semibold ${strong}`}>{group}:</span> {items}
        </li>
      ))}
    </ul>
  </div>
);

export const TextCard = ({ title, text, className = "" }) => (
  <div className={`${card} ${className}`}>
    <h3 className={`text-lg font-semibold ${strong}`}>{title}</h3>
    <p className={`mt-3 text-sm leading-6 ${muted}`}>{text}</p>
  </div>
);

export const Gallery = ({ images }) => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  const current = images[index];

  return (
    <div className="max-w-5xl mx-auto mt-12">
      <div className="relative group aspect-video rounded-lg overflow-hidden border border-gray-400 bg-gray-100 dark:border-white/50 dark:bg-darkHover/30">
        <Image
          key={current.src}
          src={current.src}
          alt={current.caption}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-contain"
        />
        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute top-1/2 -translate-y-1/2 left-3 rounded-full p-2 bg-black/30 text-white sm:opacity-0 sm:group-hover:opacity-100 duration-300"
        >
          <BsChevronCompactLeft size={28} />
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute top-1/2 -translate-y-1/2 right-3 rounded-full p-2 bg-black/30 text-white sm:opacity-0 sm:group-hover:opacity-100 duration-300"
        >
          <BsChevronCompactRight size={28} />
        </button>
      </div>
      <p className={`text-center text-sm mt-4 ${muted}`}>{current.caption}</p>
      <div className="flex justify-center mt-1">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)}
            aria-label={`Show image ${i + 1}`}
            className={`text-2xl ${i === index ? "text-black dark:text-white" : "text-gray-300 dark:text-white/30"}`}
          >
            <RxDotFilled />
          </button>
        ))}
      </div>
    </div>
  );
};

// Bordered screenshot, used by the zigzag, before/after and grid layouts.
export const Shot = ({ src, alt, className = "" }) => (
  <Image
    src={src}
    alt={alt}
    width={1600}
    height={900}
    sizes="(max-width: 768px) 100vw, 50vw"
    className={`w-full h-auto rounded-lg border border-gray-400 dark:border-white/50 ${className}`}
  />
);
