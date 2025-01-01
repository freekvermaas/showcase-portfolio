import { memo } from "react";

const About = memo(function About() {
  return (
    <div className="flex-shrink-0 w-screen h-screen snap-start bg-black text-slate-50 p-8 flex flex-col justify-center items-start">
      <div className="mt-1 md:mt-2 lg:mt-4">
        <img
          src="/images/personalscenery3.png"
          alt="Personal Scenery"
          className="max-w-full h-auto ml-4 md:ml-8 lg:ml-16 w-1/2 sm:w-3/4 md:w-1/2 lg:w-1/3"
        />
        <p className="text-white text-base font-inter font-light ml-4 md:ml-8 lg:ml-16 mt-8">
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
  );
});

export default About;
