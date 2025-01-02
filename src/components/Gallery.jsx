'use client'

import { memo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Gallery = memo(function Gallery() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="w-screen h-screen snap-start bg-white text-slate-950 overflow-hidden flex flex-col">
      <div className="flex justify-center pt-20">
        <h1 className="text-5xl font-bold text-[#533C3C] font-inter leading-tight">
          Gallery
        </h1>
      </div>
      <div className="flex-grow flex flex-col justify-start items-center pt-10">
        {/* First Image */}
        <Link href="/Upendo">
          <div
            className="relative transition-transform duration-300 ease-in-out hover:scale-105"
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

        {/* Second Image */}
        <Link href="/TrendFocus">
          <div
            className="relative transition-transform duration-300 ease-in-out hover:scale-105"
            onMouseEnter={() => setHoveredImage(2)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={hoveredImage === 2 ? "/images/post_trendfocus_showcase.png" : "/images/pre_trendfocus_showcase.png"}
              alt="Another Showcase"
              width={300}
              height={300}
              className="w-[300px] h-[300px] object-contain"
            />
          </div>
        </Link>
        {/* New Third Image */}
        <Link href="/McGoal">
          <div
            className="relative transition-transform duration-300 ease-in-out hover:scale-105"
            onMouseEnter={() => setHoveredImage(3)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={hoveredImage === 3 ? "/images/post_mcgoal_showcase.png" : "/images/pre_mcgoal_showcase.png"}
              alt="New Showcase"
              width={300}
              height={300}
              className="w-[300px] h-[300px] object-contain"
            />
          </div>
        </Link>
      </div>
    </div>
  );
});

export default Gallery;
