import { memo } from "react"
import Image from "next/image"

const Gallery = memo(function Gallery() {
  return (
    (<div
      className="flex-shrink-0 w-screen snap-start bg-white text-slate-950 overflow-y-auto dark:bg-slate-950 dark:text-slate-50">
      <div className="p-8 space-y-8">
        <h2 className="text-3xl font-bold">Detailed Project Showcase</h2>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="space-y-4">
            <h3 className="text-2xl font-semibold">Project {i}</h3>
            <div className="relative aspect-video">
              <Image
                src={`/placeholder.svg?height=400&width=600&text=Project ${i} Details`}
                alt={`Project ${i} Details`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg" />
            </div>
            <p className="text-lg">
              This is a detailed description of Project {i}. It includes information about the 
              project's goals, technologies used, challenges faced, and outcomes achieved.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </div>)
  );
})

export default Gallery

