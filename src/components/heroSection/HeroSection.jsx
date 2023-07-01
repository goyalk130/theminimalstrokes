import Image from "next/image";
import React from "react";
import {Rammetto_One} from "next/font/google"

const rametto = Rammetto_One({subsets:["latin"],weight:["400"]})

const HeroSection = () => {
  return (
    <div className="min-h-max w-full bg-[#EDE0D4]  bg-cover bg-center bg-text grayscale-0">
      <div className={`${rametto.className}  md:bg-clip-text bg-fixed h-full w-full grid grid-rows-2 bg-cover gap-7  text-4xl text-primary  md:text-transparent bg-[url('https://res.cloudinary.com/dk0qsqbcy/image/upload/v1688004827/image_2_dnbymr.png')]  opacity-90 py-40 `}>
        {/* <div className="absolute z-50 top-0 left-0 h-full w-full bg-none flex justify-center items-center text-transparent text-9xl"> */}
          <h1 className="flex-grow  flex items-end justify-center p-0 tracking-[0.1em] backdrop-blur-lg">MINIMAL</h1>
          <h1 className="flex-grow flex items-start justify-center p-0 tracking-[0.1em] backdrop-blur-lg">STROKES</h1>
        {/* </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
