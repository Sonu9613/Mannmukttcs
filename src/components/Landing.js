import React from 'react';
import { NavLink } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white flex flex-col lg:flex-row items-center lg:items-start lg:justify-between py-20 px-8 lg:px-20">
            {/* Left Section - Text */}
            <div className="lg:w-1/2 text-justify text-lg space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                    Your trusted guide to mental health & wellness
                </h1>

                <div className="space-y-4">
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Find the right professional for your mental health needs
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Start Improving your mental health and well-being today.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                    <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold
                        transform hover:scale-105 transition-all duration-300 hover:bg-blue-600 
                        shadow-md hover:shadow-xl">
                        <NavLink to="/impact">Learn More</NavLink>
                    </button>
                    <button className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold
                        border-2 border-blue-500 transform hover:scale-105 transition-all duration-300
                        hover:bg-blue-50 shadow-md hover:shadow-xl">
                        <NavLink to="/contactus">Connect Us</NavLink>
                    </button>
                </div>
            </div>

            {/* Right Section - Images */}
            <div className="lg:w-1/2 flex justify-end mt-12 lg:mt-0 relative">
                <div className="grid grid-cols-2 gap-6">
                    <img
                        src="/Landing1.png"
                        alt="Mental Health Therapy"
                        className="w-64 h-64 object-cover rounded-2xl shadow-lg hover:shadow-2xl 
                            transform hover:scale-105 transition-all duration-300"
                    />
                    <img
                        src="/Landing2.png"
                        alt="Mental Health Therapy"
                        className="w-64 h-64 object-cover rounded-2xl shadow-lg hover:shadow-2xl 
                            transform hover:scale-105 transition-all duration-300 mt-12"
                    />
                    <img
                        src="/Landing3.png"
                        alt="Mental Health Therapy"
                        className="w-64 h-64 object-cover rounded-2xl shadow-lg hover:shadow-2xl 
                            transform hover:scale-105 transition-all duration-300"
                    />

                    {/* Decorative background elements */}
                    <div className="absolute -z-10 w-72 h-72 bg-blue-200/30 rounded-full 
                        blur-3xl -top-10 -right-10"></div>
                    <div className="absolute -z-10 w-72 h-72 bg-purple-200/30 rounded-full 
                        blur-3xl -bottom-10 -left-10"></div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
