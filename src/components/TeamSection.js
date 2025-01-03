import React from "react";

const teamImages = [
    "/ts1.png", // Direct paths to images in the public folder
    "/ts2.png",
    "/ts3.png"
];

const TeamSection = () => {
    return (
        <div className="text-center bg-gray-100 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet our team</h2>
            <p className="text-gray-600 mb-6 px-4">
                Psychiatrist. A psychiatrist is a physician—doctor of medicine (M.D.)
                or doctor of osteopathic medicine (D.O.)—who specializes in mental
                health.
            </p>
            <div className="grid grid-cols-3 gap-4 px-4">
                {teamImages.map((image, index) => (
                    <img
                        key={index}
                        src={image} // Direct path to the image
                        alt={`Team member ${index + 1}`}
                        className="w-full h-64 object-cover shadow-lg"
                    />
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
