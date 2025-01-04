import { memo } from "react";

const About = memo(function About() {
  return (
    <div className="w-screen h-screen snap-start bg-black text-slate-50 p-4 md:p-6 lg:p-8 flex flex-col md:flex-row justify-between items-start overflow-hidden">
      {/* Linker sectie */}
      <div className="w-[90%] h-[90%] md:w-1/2 lg:w-5/12 mb-8 md:mb-0 mt-5 relative">
        <div className="relative transform translate-x-8 translate-y-16 md:translate-x-20 md:translate-y-24">
          <img
            src="/images/personalscenery3.png"
            alt="Personal Scenery"
            className="w-full h-auto"
          />
          <p className="text-white text-base font-inter font-light mt-4 md:mt-6 lg:mt-8">
            Mijn naam is Freek Vermaas, een 19-jarige UX/UI designer uit Tilburg
            met een sterke passie voor innovatie en creativiteit. Ik ben zeer
            ervaren met Adobe Photoshop en Figma, maar kan ook werken met
            andere hulptools zoals Adobe Illustrator en Premiere Pro. Ook kan ik
            goed op weg met AI tools als ChatGPT, Midjourney en Ideogram.
            <br /><br />
            Ik ben op zoek naar mogelijkheden binnen dit werkgebied om mijn
            skills te verbeteren, mijn kennis te vergroten en mijn
            creativiteit en inzicht tot het uiterste te testen.
          </p>
        </div>
      </div>

      {/* Rechter sectie */}
      <div className="w-[90%] md:w-1/2 lg:w-7/12 flex justify-center items-end h-full relative mt-5">
        <div className="transform translate-y-8 md:translate-y-16 lg:translate-y-20 translate-x-8 md:translate-x-10 lg:translate-x-12">
          <img
            src="/images/freekphotofinal.svg"
            alt="Custom SVG"
            className="w-full h-auto object-contain max-h-full max-w-[95%] scale-95"
          />
        </div>
      </div>
    </div>
  );
});

export default About;
