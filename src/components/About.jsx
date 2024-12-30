import { memo } from "react"

const About = memo(function About() {
  return (
    (<div
      className="flex-shrink-0 w-screen h-screen snap-start bg-slate-100 text-slate-900 p-8 grid grid-cols-2 gap-4 overflow-y-auto dark:bg-slate-800 dark:text-slate-50">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="relative aspect-square">
        </div>
      ))}
    </div>)
  );
})

export default About

