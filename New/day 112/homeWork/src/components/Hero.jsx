import React from 'react';

const Hero = () => {
  return (
    <main className="flex items-center justify-between px-8 py-10">
      {/* Text Section */}
      <section className="space-y-6 max-w-[50%]">
        <div>
          <h1 className="text-[50px] md:text-[70px] font-bold leading-tight">
            STUDY FROM<br />
            HOME WITH EXPERT
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <hr className="w-0 h-[60px] border-l border-gray-500" />
          <p className="text-gray-600 font-light leading-relaxed">
            A learning system based on formalised <br />
            teaching with the help of resources
          </p>
        </div>

        <div className="flex space-x-4">
          <button className="px-6 py-3 border border-black hover:bg-orange-500 hover:text-white font-medium rounded-md hover:scale-105 transition-transform duration-200">
            Get Started
          </button>
          <button className="px-6 py-3 border border-black hover:bg-orange-500 hover:text-white font-medium rounded-md hover:scale-105 transition-transform duration-200">
            Learn More
          </button>
        </div>
      </section>
      <section className="relative">
        <div className="w-full max-w-[700px] ">
          <img
            src="src/assets/hero.png"
            alt="Hero"
            className="w-full h-auto object-contain"
            />
        </div>
      </section>
    </main>
  );
};

export default Hero;
