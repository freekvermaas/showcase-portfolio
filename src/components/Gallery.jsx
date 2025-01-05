'use client';

import { memo } from "react";
import Image from "next/image";
import Footer from '../components/Footer';

const Gallery = memo(function Gallery() {
  return (
    <div className="w-screen h-screen text-slate-950 flex flex-col overflow-y-auto">
      <div className="flex justify-center pt-20">
        <h1 className="text-5xl font-bold text-[#533C3C] font-inter leading-tight">
          Gallery
        </h1>
      </div>
      <div className="flex h-[100%] justify-center mb-20">
        <div className="flex w-[75%]">
          <div className="flex flex-col items-end w-1/3 space-y-5 ml-20">
            <div className="mt-5">
              <Image
                src="/images/pre_tbd_showcase.png"
                alt="Question mark Showcase"
                width={250}
                height={400}
                className="object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/pre_fotografie_showcase.png"
                alt="Fotografie Showcase"
                width={250}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-1/3 space-y-5">
            <div className="mt-5">
              <Image
                src="/images/pre_upendo_showcase.png"
                alt="Upendo Showcase"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/pre_trendfocus_showcase.png"
                alt="TrendFocus Showcase"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/pre_mcgoal_showcase.png"
                alt="McGoal Showcase"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-start w-1/3 space-y-5 mr-20">
            <div className="mt-5">
              <Image
                src="/images/pre_videoediting_showcase.png"
                alt="Video editing Showcase"
                width={250}
                height={400}
                className="object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/pre_extra_showcase.png"
                alt="Extra Showcase"
                width={250}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default Gallery;
