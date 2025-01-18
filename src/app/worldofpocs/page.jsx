'use client';

import React from 'react';
import GalleryHeader from '../../components/GalleryHeader';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function worldofpocs() {
  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHeader />
      <div className="flex-grow flex flex-col items-center justify-start px-6 py-24 mt-16">
        <div className="max-w-4xl w-full space-y-2">

          {/* Intro Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-inter text-center mb-4">
              WORLD OF POC'S
            </h1>
            <p className="text-base md:text-lg font-inter font-extralight text-center">
            Een website waarin ik allerlei verschillende POC’s (Proof of Concepts) maak<br></br>
            en het proces ervan vervolgens uitleg.<br></br>
            <br></br>
            Dit is een development project voor semester 2 dat ik heb gemaakt om mijn<br></br>
            vaardigheden in coderen te laten zien, maar ik heb alsnog veel tijd besteed<br></br>
            aan het design van deze website.
            </p>
          </div>

        {/* Design Examples Section */}
        <div className="mb-16">
            <p className="text-base md:text-lg font-inter font-extralight text-center">
            <span className="text-4xl md:text-5xl font-bold block">DESIGN VOORBEELDEN</span>
            
            </p>
        </div>

        {/* Design Previews */}
        <div className="space-y-12">
            <div>
            <p className="text-base md:text-lg font-inter font-semibold text-center mb-4">
                HOMEPAGINA (DESKTOP DESIGN)
            </p>
            <Image
                src="/images/page4_1.svg"
                alt="Home Page Design 2"
                width={640}
                height={480}
                quality={100}
                priority
                className="mx-auto"
            />
            </div>
            <div className="mt-12">
            <p className="text-base md:text-lg font-inter font-semibold text-center mb-4">
                'EXPERIENCES' PAGINA (DESKTOP DESIGN)
            </p>
            <Image
                src="/images/page4_2.svg"
                alt="Experiences Page Design"
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
      <Footer />
    </div>
  );
}

