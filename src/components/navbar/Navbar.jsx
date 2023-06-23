"use client"
import React, { useState } from "react";
import SigninButton from "../SigninButton";

const Navbar = () => {

  const [tooglenav, settooglenav] = useState(false)
  return (
    <>
      <div className="sm:flex hidden flex-grow flex-row fixed h-[15vh] w-full top-0 left-0 py-24 px-40">
      <div className=" logo flex-grow  flex justify-start items-center"><h1 className="inline">The Minimal Strokes</h1></div>
      <div className=" logo flex-grow"></div>
      <div className=" flex-grow flex flex-row justify-between items-center list-none p-0 m-0">
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
    <div className="sm:hidden  flex flex-grow flex-row  fixed h-16  justify-between   top-0 left-0 p-4">
    <div className="flex-grow">
      <div className="w-10 h-10 bg-orange-900 toogle-nav" onClick={()=>{
        settooglenav(!tooglenav);
        console.log(tooglenav)
      }}></div>
    </div>
      <div className="flex-grow logo"><h1>The Minimal Strokes</h1></div>

      
    </div>
    <div className={`${tooglenav ? "left-0" : "-left-full"} z-40 w-full h-full absolute top-0 left-0`} onClick={()=>{
      settooglenav(!tooglenav);
        console.log(tooglenav)
    }}></div>
    <div className={` ${tooglenav ? "left-0" : "-left-full"} z-50 ease-in-out duration-200 fixed h-full   top-0 w-1/3 bg-amber-700 text-white bg-opacity-90 flex flex-col justify-between items-center list-none p-0 m-0`}>
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
