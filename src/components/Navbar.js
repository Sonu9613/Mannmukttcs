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
                    <a href="/" className="text-gray-700 hover:text-primary transition font-medium">Home</a>
                    <a href="/impact" className="text-gray-700 hover:text-primary transition font-medium">Our impact</a>
                    <a href="/resources" className="text-gray-700 hover:text-primary transition font-medium">Resources</a>
                    <a href="/about" className="text-gray-700 hover:text-primary transition font-medium">About</a>
                    <a href="/business" className="text-gray-700 hover:text-primary transition font-medium">For Business</a>
                    <a href="/professionals" className="text-gray-700 hover:text-primary transition font-medium hover:font-bold">For Professionals</a>
                </div>

                {/* Button */}
                <button className="text-blue bg-blue-100 px-6 py-2 rounded-full border-black border-2 hover:bg-blue-200 transition duration-300 hidden md:block">
                    Get Started
                </button>

                {/* Mobile Menu */}

            </div>
        </nav>
    );
};

export default Navbar;
