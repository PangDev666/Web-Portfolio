"use client";
import React, { useState } from "react";
import NavbarForNextPage from "@/app/components/NavbarForNextPage";
import Footer from "@/app/components/Footer";
import { motion } from "motion/react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const qrCode = () => {
  const slides = [
    {
      image: "/project/QRcode/project4com.jpg",
    },
    {
      image: "/project/QRcode/project4comphone.jpg",
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
              <p>Application form for leaving the premises</p>
            </div>
            <div className="mt-6 text-base leading-8 text-gray-500">
              <p>
                The form requests for leaving the premises in the factory. Fill
                in the information and generate a QR code
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

      {/* --------------- challenge --------------- */}
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-28 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-xl font-bold text-neutral-700 mt-14">
              Challenge
            </h2>
            <p className="leading-relaxed text-base text-gray-500">
              The challenge is transitioning from the traditional paper format
              to using mobile devices or computers. How can I ensure that users
              can seamlessly transition from paper without any noticeable
              disruptions? I need to make the form as close to paper-like as
              possible and design it to be extremely user-friendly. This
              involves creating a data entry form with only one button, which is
              the button to generate the QR code.
            </p>
          </div>
        </div>
      </div>
      {/* --------------- Role --------------- */}
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-28 pb-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-xl font-bold text-neutral-700 mt-14">Role</h2>
            <p className="leading-relaxed text-base text-gray-500">
              I was tasked with creating a form using HTML and then converting
              the data into a QR code. This QR code would allow caretakers to
              scan and display the entered information. I modeled the form after
              a paper version, developed it into an application where users can
              input data, created a button to generate the QR code, and then
              shared this app with another developer who would facilitate the
              scanning and displaying of the barcode within the Power App.
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

export default qrCode;
