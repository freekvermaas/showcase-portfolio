export default function Footer() {
    return (
      <footer className="bg-black text-white py-12 px-6 mt-10">
        <div className="container mx-auto max-w-7xl mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
              <div className="space-y-2">
                <h3 className="text-sm font-inter font-bold tracking-wider">CONTACT</h3>
                <div className="space-y-1">
                  <p className="text-sm font-inter font-light text-gray-300">freekvermaas@gmail.com</p>
                  <p className="text-sm font-inter font-light text-gray-300">+31 6 42263774</p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-inter font-bold tracking-wider">CONNECT</h3>
                <div className="space-y-1">
                  <a href="https://www.instagram.com/freekvermaas" className="block text-sm font-inter font-light text-gray-300 hover:text-white transition-colors">
                    Instagram
                  </a>
                  <a href="https://www.linkedin.com/in/freekvermaas" className="block text-sm font-inter font-light text-gray-300 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <h2 className="text-xl md:text-2xl">
                <span className="font-inter font-bold">FREEK</span>{' '}
                <span className="font-inter font-extralight italic">VERMAAS</span>
              </h2>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-xs text-gray-400 font-inter font-light">
              © Freek Vermaas 2025. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  
  