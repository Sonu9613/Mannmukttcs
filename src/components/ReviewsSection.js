import React, { useState } from "react";

const reviewImages = [
    "./review1.png",
    "./review2.png",
    "./review3.png",
    "./review4.png",
];

const ReviewsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % reviewImages.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 3 + reviewImages.length) % reviewImages.length
        );
    };

    // Get three consecutive images
    const displayedImages = [
        reviewImages[currentIndex % reviewImages.length],
        reviewImages[(currentIndex + 1) % reviewImages.length],
        reviewImages[(currentIndex + 2) % reviewImages.length],
    ];

    return (
        <div className="bg-pink-100 py-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Reviews</h2>
            <div className="relative w-full mx-auto">
                {/* Image Carousel */}
                <div className="flex w-full justify-between">
                    {displayedImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Review ${currentIndex + index + 1}`}
                            className="flex-1 h-64 object-cover rounded-lg shadow-md"
                        />
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                >
                    &#8592;
                </button>
                <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                >
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default ReviewsSection;
