import React from 'react';

const GalleryHeader = () => {
  const handleScrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full pt-4">
      <nav className="flex justify-center items-center max-w-4xl mx-auto relative">
        <div className="relative">
          <div
            className="absolute top-0 left-0 right-0 h-px bg-black"
            style={{
              width: 'calc(100% - 2rem)', // Adjust this value to match the button's padding
              left: '1rem', // Half of the horizontal padding
            }}
            aria-hidden="true"
          />
          <button
            onClick={handleScrollToGallery}
            className="pt-2 px-4 text-black focus:outline-none"
            style={{
              fontWeight: 500,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            GO BACK TO GALLERY
          </button>
        </div>
      </nav>
    </header>
  );
};

export default GalleryHeader;

