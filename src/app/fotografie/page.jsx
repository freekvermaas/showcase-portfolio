'use client';

import React from 'react';
import GalleryHeader from '../../components/GalleryHeader';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function fotografie() {
  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHeader />
      <div className="flex-grow flex flex-col items-center justify-start px-6 py-24 mt-16">
        <div className="max-w-4xl w-full space-y-2">

          {/* Intro Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-inter text-center mb-4">
              FOTOGRAFIE
            </h1>
            <p className="text-base md:text-lg font-inter font-extralight text-center">
            Iets wat ik graag in mijn vrije tijd doe.<br></br>
            Alle foto’s zijn gemaakt met een Canon EOS R50.
            </p>
          </div>

          {/* 2021 Previews */}
          <div className="space-y-12">
            <div>
              <p className="text-base md:text-lg font-inter font-extralight text-center mb-12">
              <span className="text-4xl md:text-5xl font-bold block">FOTO VOORBEELDEN</span>
              (alle foto's uiteraard door mij)
              </p>
              <Image
                src="/images/fotografie1.jpeg"
                alt="Photo 1"
                width={800}
                height={600}
                quality={100}
                priority
                className="mx-auto mb-12"
              />
              <Image
                src="/images/fotografie2.jpeg"
                alt="Photo 2"
                width={800}
                height={600}
                quality={100}
                priority
                className="mx-auto mb-12"
              />
              <Image
                src="/images/fotografie3.jpeg"
                alt="Photo 3"
                width={800}
                height={600}
                quality={100}
                priority
                className="mx-auto mb-12"
              />
              <Image
                src="/images/fotografie4.jpeg"
                alt="Photo 4"
                width={800}
                height={600}
                quality={100}
                priority
                className="mx-auto mb-12"
              />
              <Image
                src="/images/fotografie5.jpeg"
                alt="Photo 5"
                width={800}
                height={600}
                quality={100}
                priority
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

