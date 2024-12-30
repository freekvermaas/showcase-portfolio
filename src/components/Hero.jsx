import { memo } from "react"

const Hero = memo(function Hero() {
  return (
    (<div
      className="flex-shrink-0 w-screen h-screen snap-start bg-white text-slate-50 p-8 flex flex-col justify-center items-center">
    </div>)
  );
})

export default Hero

