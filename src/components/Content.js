const Content = () => {
    return (
        <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-2">Feature 1</h2>
                <p>Details about the feature.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-2">Feature 2</h2>
                <p>Details about the feature.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-2">Feature 3</h2>
                <p>Details about the feature.</p>
            </div>
        </section>
    );
};
export default Content;
