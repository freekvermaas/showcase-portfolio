'use client';

import React from 'react';
import GalleryHeader from '../../components/GalleryHeader';

export default function Upendo() {
  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHeader />
      <div className="flex-grow ml-6 sm:ml-12 md:ml-24 mt-24 md:mt-32">
        <h1 className="text-4xl md:text-5xl font-bold font-inter text-left">
          UPENDO
        </h1>
        <p className="text-base md:text-lg font-inter font-extralight mt-2">
          Een bedrijf dat ervoor zorgt dat je alle cijfers en data van je bedrijf kunt inzien, zonder al te veel gedoe. <br />
          Via services en trainingen, helpt Upendo bedrijven met dataproblemen. <br />
          <br />
          Dit was een studie opdracht die we kregen vanuit het bedrijf 2manydots, met het doel om een <br />
          gemakkelijke en inzichtelijke, werkende website te maken voor Upendo.
        </p>
        <p className="text-base md:text-lg font-inter font-extralight mt-12">
          <span className="text-4xl md:text-5xl font-bold">DESIGN VOORBEELDEN</span>{' '}
          (alleen mijn gemaakte producten binnen dit project)
        </p>
        <p className="text-base md:text-lg font-inter font-semibold mt-6">
        ‘SERVICES’ PAGINA (DESKTOP DESIGN)
        </p>
      </div>
    </div>
  );
}
