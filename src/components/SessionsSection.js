import React from "react";

const sessionImages = ["./session1.png", "./session2.png", "./session3.png"];

const SessionsSection = () => {
    return (
        <div className="bg-gray-100 py-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Some of Our Sessions</h2>
            <div className="flex justify-center gap-4 px-4">
                {sessionImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Session ${index + 1}`}
                        className="w-1/3 h-64 object-cover rounded-lg shadow-md"
                    />
                ))}
            </div>
        </div>
    );
};

export default SessionsSection;
