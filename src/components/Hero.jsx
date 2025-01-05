import { memo } from "react";

const Hero = memo(function Hero() {
  return (
    <div className="flex-shrink-0 w-screen h-screen snap-start bg-white text-slate-50 p-8 flex flex-col justify-center items-start pt-20">
      <div className="flex flex-col justify-center mt-20">
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-start w-[75%]">
          <div className="">
            <p className="text-base font-inter font-extralight text-black">Portfolio</p>
          </div>
          <div className="">
            <h1 className="text-4xl md:text-5xl text-black">
              <span className="font-extrabold font-inter">FREEK</span>{" "}
              <span className="font-light italic font-inter">VERMAAS</span>
            </h1>
          </div>
          <div>
            <img src="/images/imtheman.svg" alt="Code Image" className="w-[80%] h-[20px]"/>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-1.5">
        <div className="w-[75%] h-[100%]">
          <img src="/images/tempimage1.png" alt="Hero Image" className="w-full"/>
        </div>
      </div>
      </div>
    </div>
  );
});

export default Hero;
