"use client";
import React, { useState } from "react";
import NavbarForNextPage from "@/app/components/NavbarForNextPage";
import Footer from "@/app/components/Footer";
import { motion } from "motion/react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const poster1 = () => {
  const slides = [
    {
      image: "/project/poster1/trent2.jpg",
    },
    {
      image: "/project/poster1/chaipradith.jpg",
    },
    {
      image: "/project/poster1/dreaming.jpg",
    },
    {
      image: "/project/poster1/panz.jpg",
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
      <div className="pt-12 pb-5 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xl font-semibold tracking-tight text-neutral-700 sm:text-4xl">
              <p>Graphics design | VDO & Poster</p>
            </div>
            <div className="mt-6 text-base leading-8 text-gray-500">
              <p>
                I have a strong interest in graphic design, even though it is
                not my primary job role. I enjoy learning and practicing design
                skills in my free time, especially through tools like Adobe
                Photoshop. This passion allows me to creatively express ideas
                and support various projects when opportunities arise.
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
                <Image src={assets.chaipradith} alt="" />
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
                    Graphics design
                  </h1>
                  <p className="text-base text-gray-500 leading-8 my-5">
                    Although not an official job, I am passionate about graphic
                    design and often dedicate my free time to learning and
                    practicing it. I enjoy creating posters and visual content
                    for those who need them, as a way to build experience and
                    improve my skills. Most of my work has been done using Adobe
                    Photoshop, where I focus on image editing, layout design,
                    and visual storytelling. This portfolio includes a selection
                    of my personal and practice projects that reflect my
                    interest and development in the field of design.
                  </p>

                  <p className="text-base text-gray-500 leading-8 my-5">
                    I'm passionate about integrating UX/UI design into my web
                    development projects. Although graphic design is not my
                    primary role, I always offer support in this area within my
                    organization—such as creating internal posters or visual
                    content. When building websites or applications, I
                    frequently design and implement custom visual elements to
                    enhance usability and user experience. I use tools like
                    Photoshop and Figma to refine layouts, create UI components,
                    and ensure cohesive visual language across platforms.
                    Additionally, I've explored Blender for 3D design and motion
                    graphics, which allows me to create more dynamic and
                    engaging content, especially when integrated into modern
                    websites or promotional media. This passion allows me to
                    bridge the gap between technical functionality and creative
                    visual storytelling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------- Blender 1 --------------- */}
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-28 pb-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-xl font-bold text-neutral-700 mt-14">
              Blender
            </h2>
            <p className="leading-relaxed text-base text-gray-500">
              Studied Blender to create 3D models and animations, expanding my
              skill set in digital content creation and visual design.
            </p>
          </div>
          <div className="xl:max-w-xl lg:w-full md:w-1/2 w-5/6">
            <div className="flex justify-center">
              <video
                src="/project/poster1/P.mp4"
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
      {/* --------------- Blender 2 --------------- */}
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-28 py-20 md:flex-row flex-col items-center">
          <div className="xl:max-w-xl lg:w-full md:w-1/2 w-5/6">
            <div className="flex justify-center">
              <video
                src="/project/poster1/CH.mp4"
                type="video/mp4"
                controls
                autoPlay
                muted
                loop
              ></video>
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-xl font-bold text-neutral-700 mt-14">
              Passionate about video graphic design
            </h2>
            <p className="mb-8 leading-relaxed text-base text-gray-500">
              in my free time, I study not only poster design but also video
              creation and editing.
            </p>
          </div>
        </div>
      </div>
      {/* --------------- Image Slider  ------ */}
      <div className=" py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xl font-semibold tracking-tight text-neutral-700 sm:text-4xl">
              <p>Adobe Photoshop</p>
            </div>
            <div className="mt-6 text-base leading-8 text-gray-500">
              <p>Selected works created using Adobe Photoshop.</p>
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
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
};

export default poster1;
