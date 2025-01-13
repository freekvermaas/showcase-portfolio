'use client';

import React from 'react';
import GalleryHeader from '../../components/GalleryHeader';
import Footer from '../../components/Footer';

export default function editing() {
  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHeader/>
      <div className="flex-grow ml-6 sm:ml-12 md:ml-24 mt-24 md:mt-32">
        <h1 className="text-4xl md:text-5xl font-bold font-inter text-left">
          VIDEO EDITING
        </h1>
        <p className="text-base md:text-lg font-inter font-extralight mt-2">
          TBD
        </p>
      </div>
      <Footer/>
    </div>
  );
}
