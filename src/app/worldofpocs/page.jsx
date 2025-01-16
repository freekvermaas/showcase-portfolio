'use client';

import React from 'react';
import GalleryHeader from '../../components/GalleryHeader';
import Footer from '../../components/Footer';

export default function worldofpocs() {
  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHeader/>
      <Footer />
    </div>
  );
}

