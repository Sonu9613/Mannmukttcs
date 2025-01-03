import React from "react";

const PinkSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-pink-200 p-8">
            <div className="md:w-1/2 text-center md:text-left space-y-4">
                <h1 className="text-4xl font-bold text-gray-800">
                    mannmuktt designed to help your mind care
                </h1>
                <p className="text-lg text-gray-600">
                    mental health therapy, counseling, and medication for every phase.
                </p>
                <div className="space-x-4">
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Book an Appointment
                    </button>
                    <button className="px-6 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
                        Take a Free Assessment
                    </button>
                </div>
            </div>
            <img
                src='./pink5landingpage.png'
                alt="Hero"
                className="mt-6 md:mt-0 md:w-1/3 rounded-lg shadow-lg"
            />
        </div>
    );
};

export default PinkSection;
