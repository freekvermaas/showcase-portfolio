'use client';

import React from 'react';
import GalleryHeader from '../../components/GalleryHeader';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function TrendFocus() {
  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHeader/>
      <div className="flex-grow ml-6 sm:ml-12 md:ml-24 mt-24 md:mt-32">
        <h1 className="text-4xl md:text-5xl font-bold font-inter text-left">
          TRENDFOCUS
        </h1>
        <p className="text-base md:text-lg font-inter font-extralight mt-2">
          Een nieuws website gespecialiseerd in nieuws over marketing, communicatie en ondernemerschap, <br></br>
          om je up-to-date te houden op de nieuwste trends, inzichten en ontwikkelingen in de marketingwereld. <br></br>
          <br></br>
          Dit was een studie opdracht die we kregen vanuit het bedrijf 2manydots, met het doel om een <br></br>
          compleet nieuw bedrijf te bedenken uit het gegeven concept, en een website ervoor te bouwen.
        </p>
        <p className="text-base md:text-lg font-inter font-extralight mt-12">
          <span className="text-4xl md:text-5xl font-bold">DESIGN VOORBEELDEN</span>{' '}
          (alleen mijn gemaakte producten binnen dit project)
        </p>
        <p className="text-base md:text-lg font-inter font-semibold mt-6">
          HOMEPAGINA (DESKTOP DESIGN)
        </p>
        <Image
          src="/images/page2_1.svg"
          alt="Home Page Design"
          width={800}
          height={600}
          quality={100}
          priority
        />
        <p className="text-base md:text-lg font-inter font-semibold mt-6">
          ‘NIEUWS’ PAGINA (DESKTOP DESIGN)
        </p>
        <Image
          src="/images/page2_2.svg"
          alt="Nieuws Page Design"
          width={800}
          height={600}
          quality={100}
          priority
        />
        <p className="text-base md:text-lg font-inter font-semibold mt-6">
          ‘INTERVIEWS’ PAGINA (DESKTOP DESIGN)
        </p>
        <Image
          src="/images/page2_3.svg"
          alt="Interviews Page Design"
          width={800}
          height={600}
          quality={100}
          priority
        />
      </div>
      <Footer/>
    </div>
  );
}
