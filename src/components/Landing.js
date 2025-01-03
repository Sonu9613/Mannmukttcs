import React from 'react';
import { NavLink } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between mt-10 px-6">
            {/* Left Section - Text */}
            <div className="lg:w-1/2 text-justify text-lg">
                <h1 className="text-4xl font-bold text-blue-400">
                    Your trusted guide to mental health & wellness
                </h1>
                <br />
                <p>Find the right professional for your mental health needs</p>
                <p>Start Improving your mental health and well-being today.</p>
                <div className="flex space-x-4 mt-4">
                    <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full">
                        <NavLink to="/impact">Learn More</NavLink>
                    </button>
                    <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full">
                        <NavLink to="/about">Connect Us</NavLink>
                    </button>
                </div>
            </div>

            {/* Right Section - Images */}
            <div className="lg:w-1/2 flex justify-end mt-8 lg:mt-0">
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="/Landing1.png"
                        alt="Mental Health Therapy"
                        className="w-40 h-40 rounded-lg shadow-lg"
                    />
                    <img
                        src="/Landing2.png"
                        alt="Mental Health Therapy"
                        className="w-40 h-40 rounded-lg shadow-lg"
                    />
                    <img
                        src="/Landing3.png"
                        alt="Mental Health Therapy"
                        className="w-40 h-40 rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Landing;
