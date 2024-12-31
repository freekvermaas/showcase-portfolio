const Header = ({ activeSection }) => {
    const isActive = (section) =>
      activeSection === section ? "font-bold" : "font-normal";
  
    const textColor = activeSection === "about" ? "text-white" : "text-black";
    const lineColor = activeSection === "about" ? "bg-white" : "bg-black";
  
    const handleScrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    };
  
    return (
      <header className="fixed top-0 left-0 w-full pt-4">
        <nav className="flex justify-between items-center max-w-4xl mx-auto relative">
          <div
            className={`absolute top-0 left-0 right-0 h-px ${lineColor}`}
            aria-hidden="true"
          />
          <button
            onClick={() => handleScrollToSection("hero")}
            className={`pt-2 text-center ${textColor} ${isActive("hero")} focus:outline-none`}
            style={{ flex: "1 1 0%", textAlign: "start" }}
          >
            HOME
          </button>
          <button
            onClick={() => handleScrollToSection("about")}
            className={`pt-2 px-4 ${textColor} ${isActive("about")} focus:outline-none`}
            style={{ flex: "1 1 auto", textAlign: "center" }}
          >
            FREEK
          </button>
          <button
            onClick={() => handleScrollToSection("gallery")}
            className={`pt-2 text-center ${textColor} ${isActive("gallery")} focus:outline-none`}
            style={{ flex: "1 1 0%", textAlign: "end" }}
          >
            GALLERY
          </button>
        </nav>
      </header>
    );
  };
  
  export default Header;
  