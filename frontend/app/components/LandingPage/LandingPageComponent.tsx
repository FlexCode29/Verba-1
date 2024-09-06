import React, { useState } from 'react';

const LandingPageComponent: React.FC<{ setIsOnDemo: (value: boolean) => void }> = ({ setIsOnDemo }) => {
    const handleGoToDemo = () => {
        setIsOnDemo(true);
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to our Landing Page</h1>
            <p className="text-lg text-gray-600 mb-8">Check out our awesome demo!</p>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleGoToDemo}
            >
                Go to Demo
            </button>
        </div>
    );
};


export default LandingPageComponent;