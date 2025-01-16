'use client';

import React from 'react';
import GalleryHeader from '../../components/GalleryHeader';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function editing() {
  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHeader />
      <div className="flex-grow flex flex-col items-center justify-start px-6 py-24 mt-16">
        <div className=" w-full space-y-2">

          {/* Intro Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-inter text-center mb-4">
              VIDEO EDITING
            </h1>
            <p className="text-base md:text-lg font-inter font-extralight text-center">
            Al sinds 2017 monteer en bewerk ik video’s. Voornamelijk video’s voor YouTube,<br></br>
            aangezien ik door de jaren heen meerdere YouTube kanalen heb gehad, waardoor ik<br></br>
            mijn vroegste momenten van creativiteit heb kunnen delen met mijn vrienden en meer.<br></br>
            <br></br>
            Pas in 2021 kreeg ik begrip en interesse om het algoritme van YouTube te leren, en te<br></br>
            proberen om groot te worden met video’s binnen mijn passie.<br></br>
            <br></br>
            Met een YouTube kanaal genaamd ‘ghostblurr’ (wat overigens niet meer actief is), heb<br></br>
            ik actief video’s gemaakt over video games en andere online media, wat aardig<br></br>
            succesvol liep, en waarmee ik totaal in 2021 meer dan 1.000.000 weergaven<br></br>
            heb behaald.
            </p>
          </div>

          {/* 2021 Previews */}
          <div className="space-y-12">
            <div>
              <p className="text-base md:text-lg font-inter font-semibold text-center mb-4">
                (VOORBEELDEN)
              </p>
              <div className="flex space-x-12 justify-center">
              <iframe width="400" height="225"
              src="https://www.youtube.com/embed/VdSHR_K4190?si=emMfZNK7dvjQ-Ugd">
              </iframe>
              <iframe width="400" height="225"
              src="https://www.youtube.com/embed/QPf-evmaY_8?si=a7WfxsTxyyKhLG1L">
              </iframe>
              <iframe width="400" height="225"
              src="https://www.youtube.com/embed/a5mdrRKVVqc?si=FyIptCB-YaF3sQeF">
              </iframe>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div>
            <p className="text-base md:text-lg font-inter font-extralight text-center mt-24">
            Hoewel dit leuk was, wilde ik meer uitdaging en wilde ik graag aan grotere projecten werken.<br></br>
            Zo ben ik 2023 gaan samenwerken met een Engelstalige YouTuber genaamd Clouser, die<br></br>
            toevallig op zoek was naar een editor voor zijn video’s.<br></br>
            <br></br>
            In die tijd was ik qua editing skills en inzicht al veer verder gegroeid, en was ik al veel meer<br></br>
            verdiept in het lastige algoritme van YouTube. Deze video’s waren voornamelijk bedoeld<br></br>
            voor jongere kijkers aangezien het over de game Minecraft gaat, en zijn gemaakt om dus<br></br>
            elke seconde je aandacht te houden, waardoor de video’s heel fast-paced worden.<br></br>
            <br></br>
            Het aantal video’s dat ik voor Clouser heb gemonteerd hebben ook in totaal meer dan<br></br>
            1.000.000 weergaven behaald.
            </p>
          </div>

          {/* 2023 Previews */}
          <div>
            <div>
              <p className="text-base md:text-lg font-inter font-semibold text-center mb-4 mt-12">
                (VOORBEELDEN)
              </p>
              <div className="flex space-x-12 justify-center">
              <iframe width="400" height="225"
              src="https://www.youtube.com/embed/Tm12iKsxD_s?si=7UFlyONPYjMjcWqt">
              </iframe>
              <iframe width="400" height="225"
              src="https://www.youtube.com/embed/KTPoU7rLoFE?si=oiNcFnabSQMzK0CY">
              </iframe>
              <iframe width="400" height="225"
              src="https://www.youtube.com/embed/e58vm4Qzr-U?si=Vuc2Ya1332cL6hwH">
              </iframe>
              </div>
            </div>
          </div>

          {/* End Section */}
          <div>
            <p className="text-base md:text-lg font-inter font-extralight text-center mt-24">
            In Semester 2 van mijn studie nam ik deel aan de Media Crew van Fontys. Met deze<br></br>
            stap heb ik kunnen oefenen met daadwerkelijk professioneel en corporeel video<br></br>
            editing, door middel van het uitwerken van duidelijke opdrachten en het inzicht om<br></br>
            een makkelijk kijkbare video te maken voor alle doelgroepen.
            </p>
          </div>

          {/* Fontys Previews */}
          <div>
            <div>
              <p className="text-base md:text-lg font-inter font-semibold text-center mb-4 mt-12">
                (VOORBEELDEN)
              </p>
              <div className="flex space-x-12 justify-center">
              <iframe width="400" height="225"
              src="https://drive.google.com/file/d/1rouHAJhY5BZzNDG_R25BZbsZZfy0I_D5/preview">
              </iframe>
              <iframe width="400" height="225"
              src="https://drive.google.com/file/d/1JZpTwYB-b1A1LD8MI170xj4faU8AkgSJ/preview">
              </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
