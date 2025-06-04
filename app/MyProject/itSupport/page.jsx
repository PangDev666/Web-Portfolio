"use client";
import React from "react";
import NavbarForNextPage from "@/app/components/NavbarForNextPage";
import Footer from "@/app/components/Footer";
import { motion } from "motion/react";

const itSupport = () => {
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
              <p>IT Support | Support User</p>
            </div>
            <div className="mt-6 text-base leading-8 text-gray-500">
              <p>
                TI Support Experience: During my time as a Technical Support
                Intern, I gained in-depth hands-on experience in the field of IT
                support, focusing on both hardware and software troubleshooting.
                My primary responsibilities included diagnosing and resolving a
                variety of end-user issues, from hardware malfunctions to
                software configuration problems. I performed system
                upgrades—including RAM, SSDs, and peripheral installations—to
                improve workstation performance and ensure compatibility with
                current business applications. I also provided reactive and
                proactive maintenance on desktop and laptop PCs, including
                reimaging systems, OS reinstallation, BIOS configuration, and
                hardware replacement. Additionally, I handled basic network
                troubleshooting (e.g., checking LAN/Wi-Fi connectivity, IP
                configuration, printer sharing) and supported software tools
                such as Microsoft Office, Windows Active Directory environments,
                and device management platforms. Furthermore, I contributed to
                improving internal IT processes by documenting common issues and
                resolutions, helping reduce future downtime. I maintained and
                repaired other electronic devices used within the organization,
                such as barcode scanners, projectors, and network switches,
                showcasing versatility in managing diverse IT infrastructure.
                This experience sharpened my ability to provide prompt and
                effective support under pressure, work collaboratively with
                cross-functional teams, and continuously improve system
                performance and user satisfaction.
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

export default itSupport;
