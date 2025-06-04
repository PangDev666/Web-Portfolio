"use client";
import React from "react";
import NavbarForNextPage from "@/app/components/NavbarForNextPage";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { motion } from "motion/react";
import FadeIn from "@/app/components/FadeIn";
import { assets } from "@/assets/assets";

const websiteTran = () => {
  return (
    <section className="font-Ovo">
      <div>
        <NavbarForNextPage />
        <div className="h-[100px]"></div>
      </div>

      {/* --------------- Hero --------------- */}
      <div className="py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xl font-semibold tracking-tight text-neutral-700 sm:text-4xl">
              <p>Websit Translate | Development</p>
            </div>
            <div className="mt-6 text-base leading-8 text-gray-500">
              <p>
                I have been assigned a task to develop the website for a certain
                factory. I gather information from each department in the
                factory, structure it, and create the website.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="items-center justify-center mt-10 flow-root sm:mt-20">
              <div className=" rounded-xl lg:rounded-2xl">
                <Image
                  src={assets.project1}
                  alt="Website Development"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* --------------- Role ---------------
      <FadeIn>
        <div className="flex flex-col justify-center max-w-7xl px-4 pt-6 pb-16 mx-auto sm:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-1">
            <div className="p-4 flex flex-col border rounded-lg">
              <div className="block mb-2 text-xl font-semibold text-neutral-700">
                Challenge
              </div>
              <p className="mt-2 text-base text-gray-500">
                Designing a factory website that is simple yet engaging, easy to
                use, and intuitive in its interface
              </p>

              <div className="block mt-2 text-sm font-semibold text-neutral-700">
                Collect data
              </div>
              <p className=" text-sm text-gray-500">
                Looking for a simple website with minimal animations, and the
                ability to switch between English and Thai languages.
              </p>
            </div>

            <div className="p-4 flex flex-col border rounded-lg">
              <div className="block mb-2 text-xl font-semibold text-neutral-700">
                Solution
              </div>
              <p className="mt-2 text-base text-gray-500">
                From the task of creating a factory website that requires a
                simple and user-friendly interface, allowing customers to
                navigate without confusion on our website. This includes the
                capability to switch from Thai to English to expand our
                international customer base. We have gathered information from
                the Sales (SL) department to study promotions and the HR
                department regarding intriguing factory data, including the
                factory's history.
              </p>
            </div>

            <div className="p-4 flex flex-col border rounded-lg">
              <div className="block mb-2 text-xl font-semibold text-neutral-700">
                Role
              </div>
              <p className="mt-2 text-base text-gray-500">
                I am responsible for the entire project from start to finish,
                including gathering information, designing the website's
                appearance, coding, and user testing.
              </p>
            </div>

            <div className="p-4 flex flex-col border rounded-lg">
              <div className="block mb-2 text-xl font-semibold text-neutral-700">
                Programs
              </div>
              <p className="mt-2 text-base text-gray-500">
                I use Figma for design, Photoshop for image editing, and Visual
                Studio Code for crafting the website. I utilize the
                framer-motion package for creating motion effects and nex-i18n
                for implementing local languages.
              </p>

              <div className="flex mt-2">
                <Image
                  className="mx-1"
                  src="/asset/figma.png"
                  alt="program"
                  width={50}
                  height={50}
                />
                <Image
                  className="mx-1"
                  src="/asset/ps.png"
                  alt="program"
                  width={50}
                  height={50}
                />
                <Image
                  className="mx-1"
                  src="/asset/node.png"
                  alt="program"
                  width={50}
                  height={50}
                />
                <Image
                  className="mx-1"
                  src="/asset/visual.png"
                  alt="program"
                  width={50}
                  height={50}
                />
                <Image
                  className="mx-1"
                  src="/asset/next.png"
                  alt="program"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </FadeIn> */}
      {/* --------------- Figma Design --------------- */}
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-28 pt-6 pb-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-xl font-bold text-neutral-700 mt-14">Figma</h2>
            <p className="leading-relaxed text-base text-gray-500">
              Drafting the design is straightforward when I gather information
              or requirements from various departments in the factory. I draft
              several options to find the best one.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="flex justify-center">
              <Image src={assets.Webfigma} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* --------------- Gif TH to EN --------------- */}
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-28 pt-6 pb-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-xl font-bold text-neutral-700 mt-14">
              Next-i18n
            </h2>
            <p className="mb-8 leading-relaxed text-base text-gray-500">
              Based on the requirement that the website should be
              language-switchable, I studied next-i18n to create middleware,
              generated a language list, and set English as the default
              language. I created JSON files and used them to substitute
              variables according to different languages for easy code
              formatting.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="flex justify-center">
              <Image src={assets.i18n} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default websiteTran;
