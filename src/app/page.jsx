"use client";

import { useRef, useState, useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Header from "../components/Header";

export default function Home() {
  const scrollContainerRef = useRef(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolling, setIsScrolling] = useState(false);
  const [isGalleryScrolled, setIsGalleryScrolled] = useState(false);

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

  const handleWheel = (e) => {
    if (isScrolling || (activeSection === "gallery" && isGalleryScrolled)) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const sections = Array.from(container.children);
    const currentScrollLeft = container.scrollLeft;
    const containerWidth = container.offsetWidth;

    let targetScrollLeft;

    if (e.deltaY > 0) {
      // Scroll forward
      const currentIndex = Math.floor(currentScrollLeft / containerWidth);
      const nextIndex = Math.min(sections.length - 1, currentIndex + 1);
      targetScrollLeft = nextIndex * containerWidth;
    } else if (e.deltaY < 0) {
      // Scroll backward
      const currentIndex = Math.floor(currentScrollLeft / containerWidth);
      const prevIndex = Math.max(0, currentIndex - 1);
      targetScrollLeft = prevIndex * containerWidth;
    } else {
      return;
    }

    // Prevent default scrolling behavior
    e.preventDefault();

    // Smooth scroll to the target position
    setIsScrolling(true);
    container.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });

    // Wait until scrolling completes
    setTimeout(() => setIsScrolling(false), 500);
  };

  const handleGalleryScroll = (isScrolled) => {
    setIsGalleryScrolled(isScrolled);
  };

  return (
    <div
      ref={scrollContainerRef}
      className="flex overflow-hidden h-screen snap-x snap-mandatory"
      onWheel={handleWheel}
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
        <Gallery onScroll={handleGalleryScroll} />
      </div>
    </div>
  );
}

