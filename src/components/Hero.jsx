import { memo } from "react"

const Hero = memo(function Hero() {
  return (
    (<div
      className="flex-shrink-0 w-screen h-screen snap-start bg-slate-900 text-slate-50 p-8 flex flex-col justify-center items-center dark:bg-slate-50 dark:text-slate-900">
      <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
      <p className="text-xl">Scroll or swipe horizontally to explore my work</p>
    </div>)
  );
})

export default Hero

