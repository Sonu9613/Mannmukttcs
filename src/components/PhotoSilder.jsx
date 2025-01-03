import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PhotoSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000, // Controls the speed
        slidesToShow: 5, // Number of images visible at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Continuous scrolling
        cssEase: 'linear', // Smooth scrolling
        pauseOnHover: false,
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
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="p-4">
                        <img className="w-full h-full object-cover rounded-lg shadow-md" src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PhotoSlider;
