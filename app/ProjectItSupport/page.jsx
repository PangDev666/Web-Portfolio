"use client";
import React from "react";
import NavbarForNextPage from "../components/NavbarForNextPage";
import ItSupport from "../components/project/ItSupport";
import Footer from '../components/Footer';

const ItSupportProject = () => {

  return (
    <div>
      <NavbarForNextPage />
      <div className="h-[100px]"></div>
      <ItSupport/>
      <div className="h-[100px]"></div>
      <Footer />
    </div>
  );
};

export default ItSupportProject;
