"use client";
import React, { useState } from "react";
import SigninButton from "../SigninButton";
import { DM_Sans } from "next/font/google";

const DmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

const Navbar = () => {
  const [tooglenav, settooglenav] = useState(false);
  return (
    <>
      <div
        className={`${DmSans.className} font-medium md:flex hidden justify-center items-center fixed h-32 w-full top-0 left-0 my-0 px-20 grayscale-0 text-primary z-50 bg-text shadow-minimal shadow-sm `}
      >
        <div className="hidden md:grid w-full h-28 grid-flow-row grid-cols-2">
          <div className="relative h-full logo flex-grow flex justify-start items-center overflow-hidden">
            <img className="relative w-1/5" src="minimal.png" />
          </div>
          {/* <div className=" logo flex-grow"></div> */}
          <div className="hideen md:flex flex-grow  flex-row justify-between items-center list-none p-0 m-0">
            <div className=" w-full flex flex-row justify-between items-center list-none p-0 m-0">
              <div className="relative flex-grow flex justify-center items-center  text-black ">
                <h2 className="indivne-block">Home</h2>
              </div>
              <div className="relative flex-grow flex justify-center items-center  text-black ">
                <h2>Products</h2>
              </div>
              <div className="relative flex-grow flex justify-center items-center  text-black ">
                <h2>Gallery</h2>
              </div>
              <div className="relative flex-grow flex justify-center items-center ">
                <SigninButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${DmSans.className} font-medium md:hidden flex justify-center items-center fixed w-full top-0 left-0 my-0 grayscale-0 text-primary z-50 bg-text shadow-minimal shadow-sm `}
      >        
        <div className="relative grid md:hidden w-full h-20 grid-flow-row grid-cols-1">
          <div className="relative h-full logo flex-grow flex justify-start items-center overflow-hidden">
            <img className="relative h-full" src="minimal.png" />
          </div>
          {/* <div className=" logo flex-grow"></div> */}
        </div>
      </div>


      <div className="sm:hidden  flex flex-grow flex-row  fixed h-16  justify-between   top-0 left-0 p-4">
        <div className="flex-grow">
          <div
            className="w-10 h-10 bg-orange-900 toogle-nav"
            onClick={() => {
              settooglenav(!tooglenav);
              console.log(tooglenav);
            }}
          ></div>
        </div>
        <div className="flex-grow logo">
          <h1>The Minimal Strokes</h1>
        </div>
      </div>
      <div
        className={`${
          tooglenav ? "left-0" : "-left-full"
        } md:hidden z-40 w-full h-full absolute top-0 left-0`}
        onClick={() => {
          settooglenav(!tooglenav);
          console.log(tooglenav);
        }}
      ></div>
      <div
        className={` ${
          tooglenav ? "left-0" : "-left-full"
        } md:hidden z-50 ease-in-out duration-200 fixed h-full   top-0 w-1/3 bg-amber-700 text-white bg-opacity-90 flex flex-col justify-between items-center list-none p-0 m-0`}
      >
        <div className=" w-full flex flex-col gap-4 justify-between items-start list-none p-0 m-0">
          <div className="relative flex-grow flex justify-center items-center   ">
            <h2 className="indivne-block">Home</h2>
          </div>
          <div className="relative flex-grow flex justify-center items-center   ">
            <h2>Products</h2>
          </div>
          <div className="relative flex-grow flex justify-center items-center   ">
            <h2>Gallery</h2>
          </div>
          <div className="relative flex-grow flex justify-center items-center ">
            <SigninButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
