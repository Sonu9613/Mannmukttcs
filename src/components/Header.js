import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="MannMuktt Logo"
                        className="w-12 h-12 mr-3"
                    />
                    <span className="text-2xl font-bold text-primary">MannMuktt</span>
                </div>

                {/* Menu Links */}
                <div className="hidden md:flex space-x-8">
                    <a
                        href="#home"
                        className="text-gray-700 hover:text-primary transition font-medium"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="text-gray-700 hover:text-primary transition font-medium"
                    >
                        About Us
                    </a>
                    <a
                        href="#services"
                        className="text-gray-700 hover:text-primary transition font-medium"
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-700 hover:text-primary transition font-medium"
                    >
                        Contact
                    </a>
                </div>

                {/* Button */}
                <button className="text-black px-6 py-2 rounded-lg">
                    Get Started
                </button>

                {/* Hamburger Menu (Mobile) */}
                <div className="md:hidden flex items-center">
                    <button
                        className="text-gray-700 focus:outline-none"
                        onClick={() => console.log("Menu clicked")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
