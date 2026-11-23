"use client";
import React from "react";
import NavbarForNextPage from "../components/NavbarForNextPage";
import WebApp from "../components/project/WebApp";
import Footer from '../components/Footer';

const WebAppProject = () => {

  return (
    <div>
      <NavbarForNextPage />
      <div className="h-[100px]"></div>
      <WebApp/>
      <div className="h-[100px]"></div>
      <Footer />
    </div>
  );
};

export default WebAppProject;
