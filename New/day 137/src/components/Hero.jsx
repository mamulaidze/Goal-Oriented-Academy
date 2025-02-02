import React, { useState, useEffect } from 'react';
import { useVideo } from 'react-use';
import Spider from "../assets/Videos/SpiderMan.mp4";
import RedDead from "../assets/Videos/RedDead.mp4";

export default function Hero() {
    const videos = [Spider, RedDead];
    const [currentVideo, setCurrentVideo] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideo((prev) => (prev === 0 ? 1 : 0));
        }, 30000);

        return () => clearInterval(interval); 
    }, []);

    const [video] = useVideo(
        <video
            key={currentVideo}
            src={videos[currentVideo]}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
    );

    return (
        <div className="relative w-full h-screen overflow-hidden z-[-1]">
            {video}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[600px]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
                    Explore a world of adventure, challenges, and epic stories only on PlayStation. Get ready to elevate your gaming experience
                </h1>
                <p className="mt-4 text-base sm:text-lg ">Enjoy the Best Games</p>
            </div>
        </div>
    );
}