"use client";
import React, { useState } from "react";
import NavbarForNextPage from "@/app/components/NavbarForNextPage";
import Footer from "@/app/components/Footer";
import { motion } from "motion/react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const deliveryTicket = () => {
  const slides = [
    {
      image: "/project/deliveryTicket/project2.2.jpg",
    },
    {
      image: "/project/deliveryTicket/userTicket.jpg",
    },
    {
      image: "/project/deliveryTicket/hostOrder.jpg",
    },
    {
      image: "/project/deliveryTicket/hostReport.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

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
              <p>Delivery Ticket | PowerApp</p>
            </div>
            <div className="mt-6 text-base leading-8 text-gray-500">
              <p>
                Power App is a Microsoft application used within organizations
                for creating delivery tickets. It is an application designed to
                streamline the process of delivering goods to other
                organizations, aiming to reduce paper usage.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* --------------- Image Slider  --------------- */}
            <div className="pt-16 px-4 max-w-[1100px] h-[600px] w-full m-auto relative group">
              <div
                style={{
                  backgroundImage: `url(${slides[currentIndex].image})`,
                }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
              ></div>
              {/* Left Arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* Right Arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
              <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className="text-2xl cursor-pointer"
                  >
                    <RxDotFilled />
                  </div>
                ))}
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
              I have been tasked with creating a Delivery Ticket application,
              transitioning from the traditional paper-based system to a digital
              one. The challenge lies in the shift from paper to digital and
              ensuring that the application is user-friendly with interfaces for
              both the host and user. I chose the Microsoft platform because it
              is user-friendly, and users can quickly adapt and learn its
              functionalities.
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
      {/* --------------- The Problem --------------- */}
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-28 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-xl font-bold text-neutral-700 mt-14">
              The Problem
            </h2>
            <p className="leading-relaxed text-base text-gray-500">
              The challenge I faced is the transition from paper to digital,
              where the format needs to be somewhat similar to the original to
              ensure users can easily understand and adapt to the new system.
              There have been usability issues, especially for user, but we've
              managed to overcome them through training sessions on system
              usage.
            </p>
          </div>
        </div>
      </div>
      {/* --------------- Final --------------- */}
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-28 pb-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-xl font-bold text-neutral-700 mt-14">Final</h2>
            <p className="leading-relaxed text-base text-gray-500">
              We conducted a trial by introducing the digital system alongside
              the paper-based one to help users acclimate and understand the
              system quickly. We gathered feedback on user preferences and any
              changes they wanted to ensure ease of use. After a month of
              running the trial alongside paper, we transitioned fully to the
              app
            </p>
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

export default deliveryTicket;
