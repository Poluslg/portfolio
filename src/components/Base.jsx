import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Background from "./Background";

const Base = () => {
  return (
    <>
      <Header />
      <div>
        <div className="fixed top-0 h-[100vh] w-full">
          <Background />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Base;
