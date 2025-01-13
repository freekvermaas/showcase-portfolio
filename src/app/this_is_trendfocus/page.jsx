'use client';

import React from 'react';
import GalleryHeader from '../../components/GalleryHeader';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function trendfocus() {
  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHeader />
      <div className="flex-grow flex flex-col items-center justify-start px-6 py-24 mt-16">
        <div className="max-w-4xl w-full space-y-2">

          {/* Intro Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-inter text-center mb-4">
              TRENDFOCUS
            </h1>
            <p className="text-base md:text-lg font-inter font-extralight text-center">
            Een nieuws website gespecialiseerd in nieuws over marketing, communicatie en ondernemerschap,<br></br>
            om je up-to-date te houden op de nieuwste trends, inzichten en ontwikkelingen in de marketingwereld.<br></br>
            <br></br>
            Dit was een studie opdracht die we kregen vanuit het bedrijf 2manydots, met het doel om een<br></br>
            compleet nieuw bedrijf te bedenken uit het gegeven concept, en een website ervoor te bouwen.
            </p>
          </div>

          {/* Design Examples Section */}
          <div className="mb-16">
            <p className="text-base md:text-lg font-inter font-extralight text-center">
              <span className="text-4xl md:text-5xl font-bold block">DESIGN VOORBEELDEN</span>
              (alleen mijn gemaakte producten binnen dit project)
            </p>
          </div>

          {/* Design Previews */}
          <div className="space-y-12">
            <div>
              <p className="text-base md:text-lg font-inter font-semibold text-center mb-4">
                HOMEPAGINA (DESKTOP DESIGN)
              </p>
              <Image
                src="/images/page2_1.svg"
                alt="Home Page Design"
                width={640}
                height={480}
                quality={100}
                priority
                className="mx-auto"
              />
            </div>
            <div className="mt-12">
              <p className="text-base md:text-lg font-inter font-semibold text-center mb-4">
                'NIEUWS' PAGINA (DESKTOP DESIGN)
              </p>
              <Image
                src="/images/page2_2.svg"
                alt="Nieuws Page Design"
                width={640}
                height={480}
                quality={100}
                priority
                className="mx-auto"
              />
            </div>
            <div className="mt-12">
              <p className="text-base md:text-lg font-inter font-semibold text-center mb-4">
                'INTERVIEWS' PAGINA (DESKTOP DESIGN)
              </p>
              <Image
                src="/images/page2_3.svg"
                alt="Interviews Page Design"
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
