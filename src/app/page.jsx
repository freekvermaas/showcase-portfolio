"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Hero from "../components/Hero"
import About from "../components/About"
import Gallery from "../components/Gallery"
import Header from "../components/Header"

export default function Home() {
  const scrollContainerRef = useRef(null)
  const [isScrollable, setIsScrollable] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      const checkScrollable = () => {
        setIsScrollable(container.scrollWidth > container.clientWidth)
      }
      checkScrollable()
      window.addEventListener("'resize'", checkScrollable)
      return () => window.removeEventListener("'resize'", checkScrollable);
    }
  }, [])

  const handleWheel = useCallback((e) => {
    if (scrollContainerRef.current && isScrollable) {
      e.preventDefault()
      const delta = e.deltaY || e.deltaX
      scrollContainerRef.current.scrollLeft += delta
    }
  }, [isScrollable])

  const handleTouchStart = useCallback((e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }, [])

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll-speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }, [isDragging, startX, scrollLeft])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  return (
    (<div
      ref={scrollContainerRef}
      className="flex overflow-x-auto overflow-y-hidden h-screen snap-x snap-mandatory"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ 
        WebkitOverflowScrolling: "'touch'",
        scrollBehavior: "'smooth'"
      }}>
        <Header/>
      <Hero/>
      <About/>
      <Gallery/>
    </div>)
  );
}

