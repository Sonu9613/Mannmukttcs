import React from "react";
import PhotoSlider from "../components/PhotoSilder";
import Landing from "../components/Landing";

const About = () => {
    return (
        <>
            <Landing
                title="About Us"
                description1="We are dedicated to improving mental health awareness."
                description2="Our team of experts provides the support you need."
                primaryButtonText="Our Mission"
                primaryButtonLink="/mission"
                secondaryButtonText="Contact Us"
                secondaryButtonLink="/contactus"
                images={[
                    { src: '/About1.png', alt: 'About Us Image 1' },
                    { src: '/About2.png', alt: 'About Us Image 2', marginTop: '3rem' },
                    { src: '/About3.png', alt: 'About Us Image 3' },
                ]}
            />
            <PhotoSlider />
            <div className="bg-gray-100 text-gray-800 px-8 py-16">
                {/* Intro Section */}
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-pink-600 mb-4">Where Technology Meets Empathy</h1>
                    <p className="text-lg text-gray-600">
                        Bridging the gap between advanced technology and expert psychiatry to
                        provide personalized and accessible mental health solutions for everyone.
                    </p>
                </section>

                {/* Vision, Mission, Aim Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-pink-100 p-6 rounded-lg shadow">
                        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Vision</h2>
                        <p className="text-gray-700">
                            To provide accessible, private, and stigma-free mental health support
                            through an AI-powered platform for individuals and corporate employees.
                        </p>
                    </div>
                    <div className="bg-pink-100 p-6 rounded-lg shadow">
                        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Mission</h2>
                        <p className="text-gray-700">
                            To combine technology and human empathy to deliver personalized,
                            empathetic, and secure mental health care for all.
                        </p>
                    </div>
                    <div className="bg-pink-100 p-6 rounded-lg shadow">
                        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Aim</h2>
                        <p className="text-gray-700">
                            To redefine mental health support by breaking barriers, fostering
                            well-being, and making care accessible anytime, anywhere.
                        </p>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-blue-500 mb-4">Cutting-Edge AI Technology</h3>
                            <p className="text-gray-700">
                                Our AI-driven platform is designed to provide real-time insights
                                and recommendations based on individual needs.
                            </p>
                        </div>
                        <div className="bg-blue-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-blue-500 mb-4">Expert Collaboration</h3>
                            <p className="text-gray-700">
                                We partner with licensed psychiatrists to deliver reliable
                                and empathetic mental health support.
                            </p>
                        </div>
                        <div className="bg-blue-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-blue-500 mb-4">Accessibility for All</h3>
                            <p className="text-gray-700">
                                Designed to be inclusive and user-friendly, our platform ensures
                                mental health support is accessible to everyone.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Meet the Team Section */}
                <section className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-blue-600 mb-4">Meet the Team</h2>
                    <p className="text-gray-600 mb-8">
                        Meet the experts committed to transforming mental health care.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: "Psychiatrists", role: "Experts in mental health diagnosis and treatment", image: "path/to/psychiatrist.jpg" },
                            { name: "Counsellors", role: "Providing personalized counseling sessions", image: "path/to/counsellor.jpg" },
                            { name: "Web Development Team", role: "Ensuring seamless technology integration", image: "path/to/webteam.jpg" },
                            { name: "Creative Development Team", role: "Designing user-friendly interfaces", image: "path/to/creative.jpg" },
                        ].map((teamMember, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg p-6">
                                <img
                                    src={teamMember.image}
                                    alt={teamMember.name}
                                    className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                                />
                                <h3 className="text-xl font-semibold text-gray-800">{teamMember.name}</h3>
                                <p className="text-sm text-gray-600">{teamMember.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </>
    );
};

export default About;
