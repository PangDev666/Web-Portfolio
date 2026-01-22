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
      image: "/project/scada/ch.png",
    },
    {
      image: "/project/scada/mesData.png",
    },
    {
      image: "/project/scada/mes.png",
    },
    {
      image: "/project/scada/node-red.png",
    },
    {
      image: "/project/scada/co-1.png",
    },
    {
      image: "/project/scada/fen3.png",
    },
    {
      image: "/project/scada/heater&blower.png",
    },
    {
      image: "/project/scada/inverter.png",
    },
    {
      image: "/project/scada/powerMonitor.png",
    },
    {
      image: "/project/scada/solarcell.png",
    },
    {
      image: "/project/scada/solarcell-ch.png",
    },
    {
      image: "/project/scada/tank1.png",
    },
    {
      image: "/project/scada/fe.png",
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
              <p>SCADA & Industrial System Development</p>
            </div>
            <div className="mt-6 text-base leading-8 text-gray-500">
              <p>
                SCADA is a centralized control and data acquisition system used to monitor, control, and collect data from various industrial processes in real time, enabling operators to track system status, issue commands, and manage large-scale systems.
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
              This was my first experience working with a SCADA system, which presented a significant challenge. I dedicated time to learning and developing the system in collaboration with the engineering and maintenance teams. It was my first hands-on experience with SCADA, and exploring this new field was both engaging and highly motivating.
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
              Integrated PLC systems with SCADA and MES platforms to collect real-time machine data, designed web-based SCADA dashboards, and developed JavaScript-based logic via Node-RED to calculate and visualize machine downtime for production monitoring.
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
