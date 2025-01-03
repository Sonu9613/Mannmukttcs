import React from "react";

const HowItWorks = () => {
    const steps = [
        {
            id: "01",
            title: "Initial Consultation",
            description:
                "Together, we'll develop a personalized treatment plan tailored to your unique needs.",
        },
        {
            id: "02",
            title: "Therapy session",
            description:
                "Engage in regular therapy sessions with your therapist.",
        },
        {
            id: "03",
            title: "Program monitoring",
            description:
                "Track your progress and assess the effectiveness of your treatment plan.",
        },
        {
            id: "04",
            title: "Ongoing support",
            description:
                "Access resources and tools to maintain your mental well-being.",
        },
    ];

    return (
        <div className="bg-white px-6 py-10 display-flex justify-center items-center">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-teal-500">How It Works</h2>
                <p className="text-gray-600">
                    These are the four stages of working in mental wellness
                </p>
            </div>
            <div className="relative px-5">
                {/* Line connecting the steps */}
                {/* <div className="absolute left-10 top-0 bottom-0 w-1 bg-teal-500 hidden lg:block"></div> */}
                <div className="space-y-10 px-10 ms-10 display-flex justify-between">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center space-x-6 lg:space-x-10">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                    {step.id}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="absolute top-full left-1/2 w-1 h-10 bg-teal-500 hidden lg:block"></div>
                                )}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-teal-500">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
