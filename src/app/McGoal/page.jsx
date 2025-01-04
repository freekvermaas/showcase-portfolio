'use client';

import React from 'react';
import GalleryHeader from '../../components/GalleryHeader';
import Footer from '../../components/Footer';

export default function McGoal() {
  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHeader/>
      <div className="flex-grow ml-6 sm:ml-12 md:ml-24 mt-24 md:mt-32">
        <h1 className="text-4xl md:text-5xl font-bold font-inter text-left">
          MCGOAL (EK2024)
        </h1>
        <p className="text-base md:text-lg font-inter font-extralight mt-2">
          Een campagne voor de McDonald’s App, met het thema van het EK2024 in Duitsland. <br></br>
          Bestaand uit leuke minigames en dagelijkse challenges met kans op punten en rewards. <br></br>
          <br></br>
          Dit was een studie opdracht die we kregen vanuit het bedrijf LiveWall, met het doel om <br></br>
          gebruikers langer op de McDonald’s App te houden, via interactieve minigames en de <br></br>
          kans om grote prijzen te winnen.
        </p>
        <p className="text-base md:text-lg font-inter font-extralight mt-12">
          <span className="text-4xl md:text-5xl font-bold">DESIGN VOORBEELDEN</span>{' '}
          (alleen mijn gemaakte producten binnen dit project)
        </p>
        <p className="text-base md:text-lg font-inter font-extralight mt-6">
          <span className="text-base md:text-lg font-inter font-semibold mt-6">CAMPAGNE EK2024 LOGO</span>{' '}
          (hier schaduw toegevoegd om het logo beter te zien op witte achtergrond)
        </p>
        <img
          src="/images/page3_1.svg"
          alt="EK2024 Logo Design"
          className="mt-2 w-full md:w-3/4 lg:w-1/2"  // Adjust margin as needed
        />
        <p className="text-base md:text-lg font-inter font-semibold mt-6">
          MCGOAL HUB SCREEN (MOBILE APP DESIGN)
        </p>
        <img
          src="/images/page3_2.svg"
          alt="McGoal Hub Design"
          className="mt-2 w-full md:w-3/4 lg:w-1/2"  // Adjust margin as needed
        />
        <p className="text-base md:text-lg font-inter font-semibold mt-6">
          EK2024 LOADING SCREEN (MOBILE APP DESIGN)
        </p>
        <img
          src="/images/page3_3.svg"
          alt="McGoal Loading Design"
          className="mt-2 w-full md:w-3/4 lg:w-1/2"  // Adjust margin as needed
        />
      </div>
      <Footer/>
    </div>
  );
}
