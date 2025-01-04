import React from 'react'

const OurImpactChoosing = () => {
    return (
        <>
            <div className="flex flex-col px-7 py-10">
                <h3>
                    Progress of users when tried <br />
                    Normal Traditional Therapy
                </h3>
                <div className="w-80 h-20 flex mt-5">
                    {/* Left half (Pink) */}
                    <div className="w-1/2 h-full bg-pink-400"></div>
                    {/* Right half (Gray) */}
                    <div className="w-1/2 h-full bg-gray-700"></div>
                </div>
                <br />
                <h3>
                    Progress of users when tried <br />
                    MannMuktt Services
                </h3>
                <div className="w-80 h-20 flex mt-5">
                    <div className="w-1/3 h-full bg-pink-400"></div>
                    <div className="w-1/3 h-full bg-blue-400"></div>
                    <div className="w-1/3 h-full bg-gray-700"></div>
                </div>
            </div>
        </>
    );

}

export default OurImpactChoosing