import { memo } from "react";

const Gallery = memo(function Gallery() {
  return (
    <div className="flex-shrink-0 w-screen snap-start bg-white text-slate-950 overflow-y-auto">
      <div className="flex justify-center items-start pt-20">
        <h1 className="text-5xl font-bold text-[#533C3C] font-inter leading-tight">
          Gallery
        </h1>
      </div>
    </div>
  );
});

export default Gallery;
