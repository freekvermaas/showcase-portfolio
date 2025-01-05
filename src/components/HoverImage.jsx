'use client';

import { useState } from 'react';
import Image from 'next/image';

const HoverImage = ({ preHoverSrc, postHoverSrc, alt, width, height }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="transition-transform duration-300 ease-in-out transform hover:scale-105"
    >
      <Image
        src={isHovered ? postHoverSrc : preHoverSrc}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
      />
    </button>
  );
};

export default HoverImage;
