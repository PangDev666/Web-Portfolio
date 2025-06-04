"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import NavbarForNextPage from "@/app/components/NavbarForNextPage";
import Footer from "@/app/components/Footer";
import { motion } from "motion/react";

const itAssets = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);

  return (
    <section className="font-Ovo">
      <div>
        <NavbarForNextPage />
        <div className="h-[100px]"></div>
      </div>

      {/* --------------- Hero --------------- */}
      <div className="pt-12 pb-8 sm:pt-24 sm:pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xl font-semibold tracking-tight text-neutral-700 sm:text-4xl">
              <p>IT Asset | PowerApp</p>
            </div>
            <div className="mt-6 text-base leading-8 text-gray-500">
              <p>
                IT Asset application that stores IT equipment data, developed
                using the Microsoft Power Platform.
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
                <Image src={assets.projectAS1} alt="" />
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
              Asset IT from Power App is an application designed to collect
              information on IT equipment. It allows you to select items to add
              to the cart and deduct stock when submitting the data. The
              submission captures details on which department took the equipment
              and provides stock quantity information. It also helps monitor
              when your IT equipment is running low on stock.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center pb-28 gap-3 p-4">
          <div>
            <Image
              className="flex justify-center items-center border h-auto w-96 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-lg"
              src={assets.projectAS2}
              alt="itasset"
              type="button"
              onClick={() => setShowModal(true)}
            />
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Home Page</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            x
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                          The main page of Asset It will be divided into two
                          sections: Control Product and Product Cart.
                        </p>
                        <div className="flex items-center justify-center ">
                          <Image
                            className="w-auto h-60 border border-neutral-500"
                            src={assets.itasset1}
                            alt="itasset"
                          />
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>

          <div>
            <Image
              className="flex justify-center items-center border h-auto w-96 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-lg"
              src={assets.projectAS3}
              alt="itasset"
              type="button"
              onClick={() => setShowModal1(true)}
            />
            {showModal1 ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Control Product
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal1(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            x
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                          The Control page is used for editing. When we need to
                          add items to stock or add items that don't have data
                          yet, we can access the Control page to make edits.
                        </p>
                        <div className="flex items-center justify-center ">
                          <Image
                            className="w-auto h-60 border border-neutral-500"
                            src={assets.itasset3}
                            alt="itasset"
                          />
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal1(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>

          <div>
            <Image
              className="flex justify-center items-center border h-auto w-96 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-lg"
              src={assets.projectAS4}
              alt="itasset"
              type="button"
              onClick={() => setShowModal2(true)}
            />
            {showModal2 ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Product Cart</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal2(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            x
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                          In the product cart, when a user requests IT
                          equipment, you can select the desired IT equipment to
                          add to the cart and then confirm. The application will
                          deduct the IT stock accordingly. If the equipment is
                          not available, it cannot be added to the cart.
                        </p>
                        <div className="flex items-center justify-center ">
                          <Image
                            className="w-auto h-60 border border-neutral-500"
                            src={assets.itasset2}
                            alt="itasset"
                          />
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal2(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
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

export default itAssets;
