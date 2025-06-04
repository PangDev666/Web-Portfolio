"use client";
import React, { useState } from "react";
import NavbarForNextPage from "@/app/components/NavbarForNextPage";
import Footer from "@/app/components/Footer";
import { motion } from "motion/react";
import FadeIn from "@/app/components/FadeIn";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const websiteUNP = () => {
  const slides = [
    {
      image: "/project/webUNP/webUNP1.jpg",
    },
    {
      image: "/project/webUNP/webUNP6.jpg",
    },
    {
      image: "/project/webUNP/webUNP3.jpg",
    },
    {
      image: "/project/webUNP/webUNP5.jpg",
    },
    {
      image: "/project/webUNP/webUNP10.jpg",
    },
    {
      image: "/project/webUNP/webUNP4.jpg",
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
      <div className=" py-12 sm:py-24">
        <div className="text-gray-600 body-font">
          <div className="container mx-auto flex px-28 pb-16 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="text-xl font-semibold tracking-tight text-neutral-700 sm:text-4xl">
                <p>Website Manufacturing | Development</p>
              </div>
              <div className="mt-6 text-base leading-8 text-gray-500">
                <p>
                  IT Service application designed to assist users facing
                  hardware issues in reporting IT-related repairs and tracking
                  the status of repair requests.
                </p>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <div className="flex justify-center">
                <video
                  className="flex justify-center"
                  src="/project/webUNP/webVDO.mp4"
                  type="video/mp4"
                  controls
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------- Image Slider  ------ */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xl font-semibold tracking-tight text-neutral-700 sm:text-4xl">
            <p>Full stack website</p>
          </div>
          <div className="mt-6 text-base leading-8 text-gray-500">
            <p>
              I have built a full-stack website for a factory, featuring both a
              frontend and backend. It is intended for customers or anyone
              interested in the products to visit and explore. This is just a
              part of the website and not the complete version.
            </p>
          </div>
        </div>
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
      </div>
      {/* --------------- Role --------------- */}
      <FadeIn>
        <div className=" py-12 sm:py-24">
          <div className="flex flex-col justify-center max-w-7xl px-4 pt-6 pb-16 mx-auto sm:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-1">
              <div className="p-4 flex flex-col border rounded-lg">
                <div className="block mb-2 text-xl font-semibold text-neutral-700">
                  Challenge
                </div>
                <p className="mt-2 text-base text-gray-500">
                  Designing a factory website that is simple yet engaging, easy
                  to use, and intuitive in its interface and it must include a
                  backend to manage and update information, modify promotions,
                  or showcase various activities — making it easier for website
                  administrators to make changes through the admin panel.
                </p>
              </div>

              <div className="p-4 flex flex-col border rounded-lg">
                <div className="block mb-2 text-xl font-semibold text-neutral-700">
                  Solution
                </div>
                <p className="mt-2 text-base text-gray-500">
                  From the task of creating a factory website that requires a
                  simple and user-friendly interface, allowing customers to
                  navigate without confusion on our website. We have gathered
                  information from the Sales (SL) department to study promotions
                  and the HR department regarding intriguing factory data,
                  including the factory's history.
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
                  I started by using Figma for the initial design to ensure it
                  met the expectations of the project owner. I used Photoshop to
                  edit images and set the tone of the website. Then, I began
                  developing the website with VS Code using Next.js, and I used
                  MongoDB to store all the data.
                </p>

                <div className="flex mt-2">
                  <Image
                    className="mx-1"
                    src="/asset/visual.png"
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
                    src="/asset/next.png"
                    alt="program"
                    width={50}
                    height={50}
                  />
                  <Image
                    className="mx-1"
                    src="/asset/mongodb.png"
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
                    src="/asset/figma.png"
                    alt="program"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div>
        <Footer />
      </div>
    </section>
  );
};

export default websiteUNP;
