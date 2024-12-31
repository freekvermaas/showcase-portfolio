"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Header from "../components/Header";

export default function Home() {
  const scrollContainerRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const checkScrollable = () => {
        setIsScrollable(container.scrollWidth > container.clientWidth);
      };
      checkScrollable();
      window.addEventListener("resize", checkScrollable);
      return () => window.removeEventListener("resize", checkScrollable);
    }
  }, []);

  const handleWheel = useCallback(
    (e) => {
      if (scrollContainerRef.current && isScrollable) {
        e.preventDefault();
        const delta = e.deltaY || e.deltaX;
        scrollContainerRef.current.scrollLeft += delta;
      }
    },
    [isScrollable]
  );

  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Scroll-speed
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const sections = {
      hero: document.querySelector("#hero"),
      about: document.querySelector("#about"),
      gallery: document.querySelector("#gallery"),
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: scrollContainerRef.current, threshold: 0.5 }
    );

    Object.values(sections).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sections).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="flex overflow-x-auto overflow-y-hidden h-screen snap-x snap-mandatory"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ WebkitOverflowScrolling: "touch", scrollBehavior: "smooth" }}
    >
      <Header activeSection={activeSection} />
      <div id="hero" className="snap-center w-screen">
        <Hero />
      </div>
      <div id="about" className="snap-center w-screen">
        <About />
      </div>
      <div id="gallery" className="snap-center w-screen">
        <Gallery />
      </div>
    </div>
  );
}
