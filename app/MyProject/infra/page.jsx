"use client";
import React from "react";
import NavbarForNextPage from "@/app/components/NavbarForNextPage";
import Footer from "@/app/components/Footer";
import { motion } from "motion/react";

const infra = () => {
  return (
    <section>
      <div>
        <NavbarForNextPage />
        <div className="h-[100px]"></div>
      </div>
      {/* --------------- Hero --------------- */}
      <div className="pt-12 pb-8 sm:pt-24 sm:pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-xl font-semibold tracking-tight text-neutral-700 sm:text-4xl">
              <p>Infrastructure | Information</p>
            </div>
            <div className="mt-6 text-base leading-8 text-gray-500">
              <p>
                IT Infrastructure Experience Gained hands-on experience in IT
                infrastructure management by overseeing internal servers and
                firewall systems. Responsible for monitoring, maintaining, and
                ensuring the uptime and security of organizational server
                environments. Assisted in configuring and managing firewall
                rules to protect internal network traffic and support secure
                access. Supported troubleshooting of server-related issues,
                including storage, backups, and network connectivity.
                Collaborated with senior IT staff to implement security policies
                and system updates across the infrastructure.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default infra;
