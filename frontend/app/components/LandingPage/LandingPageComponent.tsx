import React, { useState } from 'react';
import Image from 'next/image'

const LandingPageComponent: React.FC<{ setIsOnDemo: (value: boolean) => void }> = ({ setIsOnDemo }) => {
    const handleGoToDemo = () => {
        setIsOnDemo(true);
    };

    return (
        <div className="relative flex flex-col items-center justify-center h-screen">
            <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundImage: "url('https://giovannic6.github.io/oceanssoftware/your-ocean-image.jpg')",
                    backgroundSize: "125%",
                    filter: "blur(5px)",
                    zIndex: -1,
                }}
            ></div>
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden px-6 pt-16 shadow-3xl backdrop-blur-md backdrop-brightness-75 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="relative mt-16 h-100 lg:mt-8 flex items-center justify-center rounded-md align-middle">
                        <Image
                            alt="Logo"
                            src="static/logo.png"
                            width={180}
                            height={100}
                        />
                    </div>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white mb-8 text-center sm:text-4xl">
                            Oceans Software,
                            <br />
                            your bespoke AI.
                        </h2>
                        <ul className="text-md text-white mb-0 list-disc ">
                            <li>End-to-end solution: just tell us your goal, we’ll take care of it</li>
                            <li>Results-driven: we focus on making the AI work, and we take care of the backend</li>
                            <li>Bespoke: we listen and build what your ask for, with complete flexibility</li>
                            <li>Affordable: you only pay for what you ask for, and our team acts both as software developer and technical consultant</li>
                        </ul>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <button
                                onClick={handleGoToDemo}
                                className="rounded-md bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Client Login
                            </button>
                            <a href="mailto:info@oceanssoftware.com" className="rounded-md bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

  

export default LandingPageComponent;



/*
<div className="relative p-8 rounded-md border flex">
    <div className="flex items-center w-20 h-20 mb-4">
        <img src='./logo.png' alt="Logo" className="mr-4" />
        <h1 className="text-4xl font-bold">oceans software</h1>
    </div>
    <p className="text-lg text-gray-600 mb-8">
        End-to-end solution: just tell us your goal, we’ll take care of it
    </p>
    <p className="text-lg text-gray-600 mb-8">
        Results-driven: we focus on making the AI work, and we take care of the backend
    </p>
    <p className="text-lg text-gray-600 mb-8">
        Bespoke: we listen and build what your ask for, with complete flexibility
    </p>
    <p className="text-lg text-gray-600 mb-8">
        Affordable: you only pay for what you ask for, and our team acts both as software developer and technical consultant
    </p>
</div>
*/