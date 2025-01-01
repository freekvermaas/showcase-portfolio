import { memo } from "react";

const Hero = memo(function Hero() {
  return (
    <div className="flex-shrink-0 w-screen h-screen snap-start bg-white text-slate-50 p-8 flex flex-col justify-center items-start">
      <div>
        <h1 className="text-black text-base font-extralight font-inter ml-4 md:ml-8 lg:ml-16">
          Portfolio
        </h1>
        <h2 className="text-black text-4xl md:text-5xl font-inter ml-4 md:ml-8 lg:ml-16">
          <span className="font-bold">FREEK</span> <span className="font-extralight italic">VERMAAS</span>
        </h2>
      </div>
    </div>
  );
});

export default Hero;
