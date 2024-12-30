const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full">
            <nav className="flex justify-between max-w-4xl mx-auto">
                <a href="#home" className="text-black">Home</a>
                <a href="#freek" className="text-black">Freek</a>
                <a href="#gallery" className="text-black">Gallery</a>
            </nav>
        </header>
    );
};

export default Header;
