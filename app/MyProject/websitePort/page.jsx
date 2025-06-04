"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import NavbarForNextPage from "@/app/components/NavbarForNextPage";
import Footer from "@/app/components/Footer";
import { motion } from "motion/react";

const websitePort = () => {
  return (
    <section>
     <div>
        <NavbarForNextPage />
        <div className="h-[100px]"></div>
      </div>

      {/* --------------- Hero --------------- */}
      <div className="pt-12 pb-8 sm:pt-24 sm:pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xl font-semibold tracking-tight text-neutral-700 sm:text-4xl">
              <p>Website Portfolio | Developer</p>
            </div>
            <div className="mt-6 text-base leading-8 text-gray-500">
              <p>
                A website to present myself and showcase my work as an IT engineer.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mt-10 flow-root sm:mt-20">
              <div className="-m-2 rounded-xl  p-2 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image src={assets.BGport} alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
            {/* --------------- Wireframes --------------- */}
      <div className="text-gray-600 body-font">
        <div className="px-28 items-center">
          <div className="lg:flex-grow py-10 lg:pr-24 md:pr-16 flex md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="leading-relaxed text-base text-gray-500">
              This is a portfolio website created to present myself and showcase all of my work since I started my career. The website is developed using Next.js, and I use Tailwind CSS to create utility-based class lists that allow me to style each element by mixing and matching classes. I also use Framer Motion to design animations, which integrates well with React. I built this website to collect and highlight my various projects and to better introduce who I am. If you're interested in my work or lifestyle, feel free to explore the site!
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="h-[100px]"></div>
        <Footer />
      </div>
      </section>
  )
}

export default websitePort