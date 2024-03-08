import React from "react";
import { Hero, Navbar, Sidebar, Popup } from "../components";

const Home = () => {
  return (
    <div className="flex  h-screen">
      <div>
        <Sidebar />
      </div>

      <div className="flex-col w-full">
        <Navbar />
        <Popup />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
