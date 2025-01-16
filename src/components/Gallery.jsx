'use client';

import { memo, useEffect, useRef } from "react";
import Footer from '../components/Footer';
import HoverImage from '../components/HoverImage';

const Gallery = memo(function Gallery({ onScroll }) {
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const scrollTop = galleryRef.current.scrollTop;
        onScroll(scrollTop > 10);
      }
    };

    const galleryElement = galleryRef.current;
    if (galleryElement) {
      galleryElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (galleryElement) {
        galleryElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [onScroll]);

  return (
    <div ref={galleryRef} className="w-screen h-screen text-slate-950 flex flex-col overflow-y-auto">
      <div className="flex justify-center pt-20">
        <h1 className="text-5xl font-bold text-[#533C3C] font-inter leading-tight">
          Gallery
        </h1>
      </div>
      <div className="flex h-[100%] justify-center mb-20">
        <div className="flex w-[75%]">
          <div className="flex flex-col items-end w-1/3 space-y-5 ml-20">
            <div className="mt-5" onClick={() => window.location.href = "/worldofpocs"}>
              <HoverImage
                preHoverSrc="/images/pre_worldofpocs_showcase2.svg"
                postHoverSrc="/images/post_worldofpocs_showcase2.svg"
                alt="World of POC's Showcase"
                width={250}
                height={300}
              />
            </div>
            <div onClick={() => window.location.href = "/fotografie"}>
              <HoverImage
                preHoverSrc="/images/pre_fotografie_showcase.png"
                postHoverSrc="/images/post_fotografie_showcase.png"
                alt="Fotografie Showcase"
                width={250}
                height={300}
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-1/3 space-y-5">
            <div className="mt-5" onClick={() => window.location.href = "/upendo"}>
              <HoverImage
                preHoverSrc="/images/pre_upendo_showcase.png"
                postHoverSrc="/images/post_upendo_showcase.png"
                alt="Upendo Showcase"
                width={275}
                height={250}
              />
            </div>
            <div onClick={() => window.location.href = "/trendfocus"}>
              <HoverImage
                preHoverSrc="/images/pre_trendfocus_showcase.png"
                postHoverSrc="/images/post_trendfocus_showcase.png"
                alt="TrendFocus Showcase"
                width={275}
                height={250}
              />
            </div>
            <div onClick={() => window.location.href = "/mcgoal"}>
              <HoverImage
                preHoverSrc="/images/pre_mcgoal_showcase.png"
                postHoverSrc="/images/post_mcgoal_showcase.png"
                alt="McGoal Showcase"
                width={275}
                height={250}
              />
            </div>
          </div>
          <div className="flex flex-col items-start w-1/3 space-y-5 mr-20">
            <div className="mt-5" onClick={() => window.location.href = "/editing"}>
              <HoverImage
                preHoverSrc="/images/pre_videoediting_showcase.png"
                postHoverSrc="/images/post_videoediting_showcase.png"
                alt="Video editing Showcase"
                width={250}
                height={300}
              />
            </div>
            <div onClick={() => window.location.href = "/extra"}>
              <HoverImage
                preHoverSrc="/images/pre_extra_showcase.png"
                postHoverSrc="/images/post_extra_showcase.png"
                alt="Extra Showcase"
                width={250}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default Gallery;
