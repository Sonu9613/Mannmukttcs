import React from "react";

const Resources = () => {
    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            {/* Hero Section */}
            <div
                className="bg-gray-900 text-white py-16 px-6 bg-cover bg-center"
                style={{ backgroundImage: "url('./ResourcesHero.png')" }}
            >
                <div className="max-w-4xl mx-auto text-center bg-black bg-opacity-50 p-6 rounded-md">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        How to Cope with Loneliness on Christmas?
                    </h1>
                    <p className="text-gray-300 text-lg mb-6">
                        Navigating loneliness during Christmas can be challenging, but it's
                        possible to find comfort through connection.
                    </p>
                    <p className="text-gray-400 text-sm">Anonymous | December 2024</p>
                    <div className="flex justify-center mt-8">
                        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-l">
                            ←
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-r">
                            →
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Articles Column */}
                <div className="col-span-2 space-y-8">
                    {/* Article 1 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="./Resources5.png"
                            alt="Gen Z Article"
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                Gen Z Needs More Than a Job. Here's How Coaching Can Transform
                                Early-Career Challenges.
                            </h3>
                            <p className="text-sm text-gray-500">Workplace Wellbeing</p>
                            <p className="text-xs text-gray-400 mt-2">Anonymous | July 2024</p>
                        </div>
                    </div>

                    {/* Article 2 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="./Resources6.png"
                            alt="Mental Health Article"
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                A Proactive Approach for Addressing Complex Mental Health Issues
                                in the Workplace.
                            </h3>
                            <p className="text-sm text-gray-500">Workplace Wellbeing</p>
                            <p className="text-xs text-gray-400 mt-2">Anonymous | June 2024</p>
                        </div>
                    </div>

                    {/* Article 3 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="./Resources7.png"
                            alt="Office Image"
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                How a Critical Incident Response Plan Protects Employee Well-Being
                                During Crises
                            </h3>
                            <p className="text-sm text-gray-500">Workplace Wellbeing</p>
                            <p className="text-xs text-gray-400 mt-2">Anonymous | August 2024</p>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-8 bg-blue-50 p-6 shadow-lg rounded-lg">
                    {/* Search Bar */}
                    <div className="bg-white shadow-md p-4 rounded-lg">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border border-gray-300 rounded-md px-4 py-2"
                        />
                    </div>

                    {/* Latest Stories */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Latest Stories
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline text-sm font-medium"
                                >
                                    How Behavioral Health Shapes Population Health Challenges
                                </a>
                                <p className="text-gray-400 text-xs">December 2024</p>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline text-sm font-medium"
                                >
                                    Improving Access: Paving the Way for Affordable Behavioral Healthcare
                                </a>
                                <p className="text-gray-400 text-xs">November 2024</p>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline text-sm font-medium"
                                >
                                    6 Pillars of Creating a Patient-Centered, Integrated Continuum
                                </a>
                                <p className="text-gray-400 text-xs">October 2024</p>
                            </li>
                        </ul>
                    </div>

                    {/* Popular Stories */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Popular Stories
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline text-sm font-medium"
                                >
                                    The Sandwich Generation: How Caregiving Takes a Toll
                                </a>
                                <p className="text-gray-400 text-xs">September 2024</p>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline text-sm font-medium"
                                >
                                    How AI Leaders Can Help Mental Health Support in Organizations
                                </a>
                                <p className="text-gray-400 text-xs">September 2024</p>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline text-sm font-medium"
                                >
                                    3 Complex Keys to Creating a Mental Health Solution
                                </a>
                                <p className="text-gray-400 text-xs">August 2024</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
