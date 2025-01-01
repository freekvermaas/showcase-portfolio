import { memo } from "react";

const Hero = memo(function Hero() {
  return (
    <div className="flex-shrink-0 w-screen h-screen snap-start bg-white text-slate-50 p-8 flex flex-col justify-center items-start">
      <div className="mb-20 md:mb-40 lg:mb-60">
        <h1 className="text-black text-base font-extralight font-inter ml-4 md:ml-8 lg:ml-16">
          Portfolio
        </h1>
        <h2 className="text-black text-4xl md:text-5xl font-inter ml-4 md:ml-8 lg:ml-16">
          <span className="font-bold">FREEK</span> <span className="font-extralight italic">VERMAAS</span>
        </h2>
        <img src="/images/code1.png" className="w-full h-auto mt-1 ml-0.5 md:ml-1 lg:ml-2"/>
      </div>
    </div>
  );
});

export default Hero;
