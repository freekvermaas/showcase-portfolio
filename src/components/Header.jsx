const Header = ({ activeSection }) => {
    const textColor = activeSection === "about" ? "text-white" : "text-black";
    const lineColor = activeSection === "about" ? "bg-white" : "bg-black";
  
    return (
      <header className="fixed top-0 left-0 w-full pt-4">
        <nav className="flex justify-between max-w-4xl mx-auto relative">
          <div
            className={`absolute top-0 left-0 right-0 h-px ${lineColor}`}
            aria-hidden="true"
          />
          <a href="#hero" className={`pt-2 px-4 ${textColor}`}>
            HOME
          </a>
          <a href="#about" className={`pt-2 px-4 ${textColor}`}>
            FREEK
          </a>
          <a href="#gallery" className={`pt-2 px-4 ${textColor}`}>
            GALLERY
          </a>
        </nav>
      </header>
    );
  };
  
  export default Header;
  