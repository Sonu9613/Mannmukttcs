import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#6DA8C6] text-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Top Section */}
                <div className="text-center mb-16">
                    <p className="text-lg font-medium mb-2">MannMuktt wellness-wellness</p>
                    <h2 className="text-4xl font-bold mb-4">Get our wellness newsletter</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Filter out the noise and nurture your inbox with health and wellness advice
                        that's inclusive and rooted in medical expertise.
                    </p>
                    <button className="bg-[#5F92B6] hover:bg-[#4E819F] text-white py-3 px-8 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                        Join Us
                    </button>
                </div>

                {/* Middle Section */}
                <div className="flex flex-col items-center mb-12">
                    <img
                        src="/logo.png"
                        alt="MannMuktt Logo"
                        className="w-16 h-16 mb-4 hover:opacity-90 transition-opacity"
                    />
                    <p className="text-sm font-medium mb-8">© 2024 MannMuktt. All rights reserved.</p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 mb-12">
                    <a href="/about" className="text-base hover:underline transition-all duration-300 hover:text-gray-200">
                        About Us
                    </a>
                    <a href="/resources" className="text-base hover:underline transition-all duration-300 hover:text-gray-200">
                        Resources
                    </a>
                    <a href="/" className="text-base hover:underline transition-all duration-300 hover:text-gray-200">
                        Solutions
                    </a>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-8">
                    <a href="#linkedin" className="text-white hover:text-gray-200 transition-colors duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                    <a href="#facebook" className="text-white hover:text-gray-200 transition-colors duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </a>
                    <a href="#instagram" className="text-white hover:text-gray-200 transition-colors duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                    <a href="#youtube" className="text-white hover:text-gray-200 transition-colors duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
