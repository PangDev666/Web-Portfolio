"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import NavbarForNextPage from "@/app/components/NavbarForNextPage";
import Footer from "@/app/components/Footer";
import { motion } from "motion/react";

const itService = () => {
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
              <p>IT Service | PowerApp</p>
            </div>
            <div className="mt-6 text-base leading-8 text-gray-500">
              <p>
                IT Service application designed to assist users facing hardware
                issues in reporting IT-related repairs and tracking the status
                of repair requests.
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
                <Image src={assets.BGitService} alt="" />
              </div>
            </div>
          </motion.div>

          <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
            <div className="bg-cover bg-center text-center overflow-hidden"></div>
            <div className="max-w-3xl mx-auto">
              <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="bg-white relative top-0 -mt-40 p-5 sm:p-10">
                  <h1
                    href="#"
                    className="text-neutral-700 font-bold text-xl mb-2"
                  >
                    IT Service | PowerApp
                  </h1>
                  <p className="text-base text-gray-500 leading-8 my-5">
                    An application designed to assist users in the factory in
                    reporting hardware issues and tracking the progress of
                    repairs, utilizing the Microsoft Power Platform. This
                    software suite aids in data analysis, solution creation,
                    workflow automation, and even allows for the creation of a
                    Chatbot with minimal coding. It integrates various
                    technologies, including AI, data collection, and data
                    connectors.
                  </p>

                  <h3 className="text-xl text-neutral-700 font-bold my-5">
                    What is IT Service App?
                  </h3>

                  <p className="text-base text-gray-500 leading-8 my-5">
                    An application developed with Power Apps that helps you
                    collect repair request data from users, reducing the time
                    spent on transitioning from phone-based to app-based repair
                    notifications. The app also stores repair request
                    information for each department, allowing users to track the
                    progress of their requests through different stages.
                  </p>

                  <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                    Power Apps is business application development software
                    designed for mobile, tablet, and web development. It enables
                    non-programmers to create their own applications. It can
                    work in conjunction with Power Automate and Power BI,
                    emphasizing low-code development.
                  </blockquote>

                  <p className="text-base text-gray-500 leading-8 mt-5">
                    Power Automate is a Robotic Process Automation (RPA)
                    software. I use RPA to send notifications via Outlook when
                    employees report issues. RPA sends email notifications to
                    inform employees about their reported issues, and once the
                    IT team completes the repairs, RPA notifies the employees of
                    the resolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------- Figma --------------- */}
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-28 pb-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-xl font-bold text-neutral-700 mt-14">Figma</h2>
            <p className="mb-8 leading-relaxed text-base text-gray-500">
              I use the Figma software to sketch the design of the application
              and create a layout similar to form designs, aiming to make it
              easy for users to understand and use.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="flex justify-center">
              <Image
                src={assets.ItServiceFigma}
                alt="Figma Design of IT Service App"
              />
            </div>
          </div>
        </div>
      </div>
      {/* --------------- PowerApp --------------- */}
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-28 py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full lg:pr-24 md:pr-16 md:w-1/2 w-5/6">
            <div className="flex justify-center">
              <Image src={assets.powerapp} alt="powerapp" />
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-xl font-bold text-neutral-700 mt-14">
              Power App
            </h2>
            <p className="mb-8 leading-relaxed text-base text-gray-500">
              I use Power Apps to create the UX/UI and utilize the C# language
              for coding.
            </p>
          </div>
        </div>
      </div>
      {/* --------------- PowerAutomate --------------- */}
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-28 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-xl font-bold text-neutral-700 mt-14">
              Power Automate
            </h2>
            <p className="mb-8 leading-relaxed text-base text-gray-500">
              I use Power Automate to create a notification bot for IT hardware,
              or to notify users about the status of tasks.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="flex justify-center">
              <Image src={assets.rpa} alt="Power Automate" />
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

export default itService;
