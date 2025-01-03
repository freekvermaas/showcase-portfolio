import { memo } from "react";
const About = memo(function About() {
  return (
<div className="flex-shrink-0 w-screen h-screen snap-start bg-black text-slate-50 p-8 flex flex-row justify-between items-center">
      {/* Linker sectie */}
<div className="flex flex-col mt-1 md:mt-2 lg:mt-4 bg-red-500 w-1/2 max-w-lg">
<div>
<img
            src="/images/personalscenery3.png"
            alt="Personal Scenery"
            className="w-full h-auto"
          />
<p className="text-white text-base font-inter font-light mt-8">
            Mijn naam is Freek Vermaas, een 19-jarige UX/UI designer uit Tilburg <br></br>
            met een sterke passie voor innovatie en creativiteit. Ik ben zeer<br></br>
            ervaren met Adobe Photoshop en Figma, maar kan ook werken met<br></br>
            andere hulptools zoals Adobe Illustrator en Premiere Pro. Ook kan ik<br></br>
            goed op weg met AI tools als ChatGPT, Midjourney en Ideogram.<br></br>
<br></br>
            Ik ben op zoek naar mogelijkheden binnen dit werkgebied om mijn<br></br>
            skills te verbeteren, mijn kennis te vergroten en mijn<br></br>
            creativiteit en inzicht tot het uiterste te testen.
</p>
</div>
</div>
 
      {/* Rechter sectie */}
<div className="flex justify-center items-center bg-blue-500">
<img
          src="/images/freekphotofinal.svg" // Gebruik hier het juiste pad naar je SVG-bestand
          alt="Custom SVG"
          className="w-5/6 h-auto object-cover"
        />
</div>
</div>
  );
});
export default About;