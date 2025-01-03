'use client'

import { memo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Gallery = memo(function Gallery() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [canScrollHorizontally, setCanScrollHorizontally] = useState(false); // Start met horizontale scroll uitgeschakeld
  const [isVerticalScroll, setIsVerticalScroll] = useState(false); // Track of er verticaal gescrolld is

  // Handle de scroll events om verticale en horizontale scroll te beheren
  useEffect(() => {
    const handleScroll = () => {
      // Als we bovenaan zijn en er is nog geen verticale scroll geweest, sta horizontale scroll toe
      if (window.scrollY === 0 && !isVerticalScroll) {
        setCanScrollHorizontally(true);
      } else {
        setCanScrollHorizontally(false);
      }

      // Controleer of er verticaal gescrolld is
      if (window.scrollY > 0) {
        setIsVerticalScroll(true);
      } else {
        setIsVerticalScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVerticalScroll]);

  return (
    <div className="w-screen h-screen snap-start bg-white text-slate-950 overflow-hidden flex flex-col">
      {/* Navbar is assumed to be above here */}

      <div className="flex justify-center pt-20">
        <h1 className="text-5xl font-bold text-[#533C3C] font-inter leading-tight">
          Gallery
        </h1>
      </div>

      {/* Container voor gallery content die verticale scroll toestaat */}
      <div
        className={`flex-grow flex flex-col justify-start items-center pt-10 p-8 overflow-y-auto ${canScrollHorizontally ? 'overflow-x-auto' : 'overflow-x-hidden'}`}
      >
        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-4">
          {/* Fotografie */}
          <div className="col-span-2 row-span-2 bg-gray-300 flex items-center justify-center">
            <p className="text-white text-xl font-bold">Fotografie</p>
          </div>

          {/* Upendo */}
          <Link href="/Upendo">
            <div
              className="relative transition-transform duration-300 ease-in-out hover:scale-105 bg-gray-300 flex items-center justify-center"
              onMouseEnter={() => setHoveredImage(1)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Image
                src={hoveredImage === 1 ? "/images/post_upendo_showcase.png" : "/images/pre_upendo_showcase.png"}
                alt="Upendo Showcase"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-contain"
              />
            </div>
          </Link>

          {/* Video Editing */}
          <div className="bg-gray-300 flex items-center justify-center">
            <p className="text-white text-xl font-bold">Video Editing</p>
          </div>

          {/* Extra */}
          <div className="bg-gray-300 flex items-center justify-center">
            <p className="text-white text-xl font-bold">Extra</p>
          </div>

          {/* Trend Focus */}
          <Link href="/TrendFocus">
            <div
              className="relative transition-transform duration-300 ease-in-out hover:scale-105 bg-gray-300 flex items-center justify-center"
              onMouseEnter={() => setHoveredImage(2)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Image
                src={hoveredImage === 2 ? "/images/post_trendfocus_showcase.png" : "/images/pre_trendfocus_showcase.png"}
                alt="Trend Focus Showcase"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-contain"
              />
            </div>
          </Link>

          {/* EK2024 */}
          <div className="bg-gray-300 flex items-center justify-center">
            <p className="text-white text-xl font-bold">EK2024</p>
          </div>

          {/* Question mark */}
          <div className="bg-gray-300 flex items-center justify-center">
            <p className="text-white text-xl font-bold">?</p>
          </div>

          {/* McGoal */}
          <Link href="/McGoal">
            <div
              className="relative transition-transform duration-300 ease-in-out hover:scale-105 bg-gray-300 flex items-center justify-center"
              onMouseEnter={() => setHoveredImage(3)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Image
                src={hoveredImage === 3 ? "/images/post_mcgoal_showcase.png" : "/images/pre_mcgoal_showcase.png"}
                alt="McGoal Showcase"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-contain"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Gallery;
