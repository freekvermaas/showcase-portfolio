'use client';

import React from 'react';
import GalleryHeader from '../../components/GalleryHeader';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function Upendo() {
  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHeader />
      <div className="flex-grow flex flex-col items-center justify-start px-6 py-24 mt-16">
        <div className="max-w-4xl w-full space-y-2">

          {/* Intro Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-inter text-center mb-4">
              UPENDO
            </h1>
            <p className="text-base md:text-lg font-inter font-extralight text-center">
              Een bedrijf dat ervoor zorgt dat je alle cijfers en data van je bedrijf kunt inzien, zonder al te veel gedoe.
              Via services en trainingen, helpt Upendo bedrijven met dataproblemen.
              <br /><br />
              Dit was een studie opdracht die we kregen vanuit het bedrijf 2manydots, met het doel om een
              gemakkelijke en inzichtelijke, werkende website te maken voor Upendo.
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
                'SERVICES' PAGINA (DESKTOP DESIGN)
              </p>
              <Image
                src="/images/page1_1.svg"
                alt="Services Page Design"
                width={640}
                height={480}
                quality={100}
                priority
                className="mx-auto"
              />
            </div>
            <div className="mt-12">
              <p className="text-base md:text-lg font-inter font-semibold text-center mb-4">
                'TRAINING' PAGINA (DESKTOP DESIGN)
              </p>
              <Image
                src="/images/page1_2.svg"
                alt="Training Page Design"
                width={640}
                height={480}
                quality={100}
                priority
                className="mx-auto"
              />
            </div>
            <div className="mt-12">
              <p className="text-base md:text-lg font-inter font-semibold text-center mb-4">
                'BOOKING' PAGINA (DESKTOP DESIGN)
              </p>
              <Image
                src="/images/page1_3.svg"
                alt="Booking Page Design"
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
