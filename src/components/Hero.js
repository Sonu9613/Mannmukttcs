const Hero = ({ title, subtitle, buttons }) => {
    return (
        <section className="bg-blue-50 text-center py-20 px-6">
            <h1 className="text-4xl font-extrabold text-secondary mb-6">{title}</h1>
            <p className="text-lg text-gray-700 mb-8">{subtitle}</p>
            <div className="space-x-4">
                {buttons.map((btn, idx) => (
                    <button
                        key={idx}
                        className="px-6 py-2 bg-primary text-white font-semibold rounded hover:bg-blue-700"
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Hero;
