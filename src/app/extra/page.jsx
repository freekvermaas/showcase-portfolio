'use client';

import React from 'react';
import GalleryHeader from '../../components/GalleryHeader';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function extra() {
  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHeader />
      <div className="flex-grow flex flex-col items-center justify-start px-6 py-24 mt-16">
        <div className="max-w-4xl w-full space-y-2">

          {/* Intro Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-inter text-center mb-4">
              EXTRA
            </h1>
            <p className="text-base md:text-lg font-inter font-extralight text-center">
            Overige dingen die ik heb gemaakt.
            </p>
          </div>

          {/* Extra Previews */}
          <div className="space-y-12">
            <div>
              <p className="text-base md:text-lg font-inter font-extralight text-center">
              <span className="text-4xl md:text-5xl font-bold block mb-12">COOKBOOK HOMEPAGE</span>
              </p>
              <Image
                src="/images/extra1.jpeg"
                alt="Extra 1"
                width={640}
                height={480}
                quality={100}
                priority
                className="mx-auto"
              />
            </div>

          {/* Extra Previews */}
          <div>
            <div>
              <p className="text-base md:text-lg font-inter font-extralight text-center mb-12">
              <span className="pt-12 text-4xl md:text-5xl font-bold block">BAND ‘SCARCITY’ SOCIAL MEDIA WORK</span>
              (foto’s en graphic design allebei gedaan door mij)
              </p>
              <Image
                src="/images/extra2.jpeg"
                alt="Extra 2"
                width={640}
                height={480}
                quality={100}
                priority
                className="mx-auto mb-12"
              />
              <Image
                src="/images/extra3.jpeg"
                alt="Extra 3"
                width={640}
                height={480}
                quality={100}
                priority
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}


