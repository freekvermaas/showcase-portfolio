'use client'

import { memo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Gallery = memo(function Gallery() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-screen h-screen snap-start bg-white text-slate-950 overflow-hidden flex flex-col">
      <div className="flex justify-center pt-20">
        <h1 className="text-5xl font-bold text-[#533C3C] font-inter leading-tight">
          Gallery
        </h1>
      </div>
      <div className="flex-grow flex justify-center items-start pt-10">
        <Link href="/destination-page">
          <div
            className="relative transition-transform duration-300 ease-in-out hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={isHovered ? "/images/post_upendo_showcase.png" : "/images/pre_upendo_showcase.png"}
              alt="Upendo Showcase"
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

