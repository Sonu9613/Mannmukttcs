import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#6DA8C6] text-white text-center py-10 px-4">
            <p className="">MannMuktt wellness-wellness</p>
            <h2 className="text-3xl font-semibold mb-2">Get our wellness newsletter</h2>
            <p className="text-base mb-6">
                Filter out the noise and nurture your inbox with health and wellness advice
                that’s inclusive and rooted in medical expertise.
            </p>
            <button className="bg-[#5F92B6] hover:bg-[#4E819F] text-white py-2 px-6 rounded-full text-lg font-medium mb-6">
                Join Us
            </button>
            <img src="/logo.png" alt="MannMuktt Logo" className="w-12 h-12" />
            <p className="text-sm">© 2024 MannMuktt</p>
            <div className="flex space-x-6">
                <a href="/about" className="text-sm hover:underline">
                    About Us
                </a>
                <a href="/resources" className="text-sm hover:underline">
                    Resources
                </a>
                <a href="/" className="text-sm hover:underline">
                    Solutions
                </a>
            </div>
            <div className="flex space-x-4">
                <a href="#linkedin" className="text-white text-xl hover:text-gray-200">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="#facebook" className="text-white text-xl hover:text-gray-200">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="#instagram" className="text-white text-xl hover:text-gray-200">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#youtube" className="text-white text-xl hover:text-gray-200">
                    <i className="fab fa-youtube"></i>
                </a>
            </div>       </footer>
    );
};

export default Footer;
