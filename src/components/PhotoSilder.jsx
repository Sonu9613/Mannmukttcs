import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PhotoSlider = () => {
    const settingsTop = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
    };

    const settingsBottom = {
        ...settingsTop,
        rtl: true, // Reverse direction for the bottom row
    };

    const images = [
        './ps1.png',
        './ps2.png',
        './ps3.png',
        './ps4.png',
        './ps5.png',
        './ps6.png',
        './ps7.png',
        './ps8.png',
        './ps9.png',
        './ps10.png',
    ];

    return (
        <div className="mx-auto my-8 w-full overflow-hidden">
            {/* Top Scroller */}
            <Slider {...settingsTop}>
                {images.map((image, index) => (
                    <div key={`top-${index}`} className="p-4">
                        <img
                            className="w-full h-full object-cover rounded-lg shadow-md"
                            src={image}
                            alt={`Slide ${index}`}
                        />
                    </div>
                ))}
            </Slider>

            {/* Bottom Scroller */}
            <Slider {...settingsBottom} className="mt-4">
                {images.map((image, index) => (
                    <div key={`bottom-${index}`} className="p-4">
                        <img
                            className="w-full h-full object-cover rounded-lg shadow-md"
                            src={image}
                            alt={`Slide ${index}`}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PhotoSlider;
