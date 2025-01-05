import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const GalleryHeader = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full pt-4 transition-all duration-300 ${
        scrollingUp ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transition: 'opacity 0.3s ease-out',
      }}
    >
      <nav className="flex justify-center items-center max-w-4xl mx-auto relative">
        <div className="relative">
          <div
            className="absolute top-0 left-0 right-0 h-px bg-black"
            style={{
              width: 'calc(100% - 2rem)',
              left: '1rem',
            }}
            aria-hidden="true"
          />
          <Link href="/#gallery" passHref>
            <button
              className="pt-2 px-4 text-black focus:outline-none"
              style={{
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              GO BACK TO GALLERY
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default GalleryHeader;
