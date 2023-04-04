import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../99297-loading-files.json";

const Loading = () => {
    return (
        <div className='flex justify-center items-center mt-48'>
            <Lottie animationData={groovyWalkAnimation} loop={true} />
        </div>
    );
};

export default Loading;