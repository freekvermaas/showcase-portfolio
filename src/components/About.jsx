import { memo } from "react"

const About = memo(function About() {
  return (
    <div className="flex-shrink-0 w-screen h-screen snap-start bg-black text-slate-50 p-8 flex flex-col justify-center items-start">
      <div className="mb-20 md:mb-40 lg:mb-60">
        <img src="/images/personalscenery3.png" alt="Personal Scenery" className="max-w-full h-auto ml-4 md:ml-8 lg:ml-16 w-1/2 sm:w-3/4 md:w-1/2 lg:w-1/3" />
      </div>
    </div>
  );
})

export default About
