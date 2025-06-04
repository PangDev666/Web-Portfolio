"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import NavbarForNextPage from "@/app/components/NavbarForNextPage";
import Footer from "@/app/components/Footer";
import { motion } from "motion/react";

const webService = () => {
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
              <p>Website Service | Developer</p>
            </div>
            <div className="mt-6 text-base leading-8 text-gray-500">
              <p>Intranet website</p>
            </div>
          </div>
          <motion.div
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mt-10 flow-root sm:mt-20">
              <div className="-m-2 rounded-xl  p-2 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image src={assets.webService} alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* --------------- Challenge --------------- */}
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-28 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-xl font-bold text-neutral-700 mt-14">
              Challenge
            </h2>
            <p className="leading-relaxed text-base text-gray-500">
              Developed an internal company website designed for ease of use,
              serving as a centralized hub with quick-access button links to key
              platforms such as email and OneDrive. Integrated the site with
              Microsoft Power Platform to enable real-time tracking and
              visualization of sales performance data
            </p>
          </div>
        </div>
      </div>
      {/* --------------- Role --------------- */}
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-28 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-xl font-bold text-neutral-700 mt-14">Role</h2>
            <p className="leading-relaxed text-base text-gray-500">
              I am responsible for the entire project from start to finish,
              including gathering information, designing the website's
              appearance, coding, and user testing.
            </p>
          </div>
        </div>
      </div>
      {/* --------------- Tools --------------- */}
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-28 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-xl font-bold text-neutral-700 mt-14">Tools</h2>
            <div className="flex mt-2">
              <Image
                className="mx-1"
                src="/asset/html.png"
                alt="program"
                width={40}
                height={20}
              />
              <Image
                className="mx-1"
                src="/asset/css.png"
                alt="program"
                width={40}
                height={20}
              />
              <Image
                className="mx-1"
                src="/asset/JavaScript.png"
                alt="program"
                width={40}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-[100px]"></div>
        <Footer />
      </div>
    </section>
  );
};

export default webService;
