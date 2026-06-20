import React, { useRef } from 'react';
import profilePic from '../assets/profile.jpg';

export default function Hero() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  // Pause spin while touching/dragging to avoid jank
  const pauseSpin = () => {
    if (outerRef.current) outerRef.current.style.animationPlayState = 'paused';
    if (innerRef.current) innerRef.current.style.animationPlayState = 'paused';
  };
  const resumeSpin = () => {
    if (outerRef.current) outerRef.current.style.animationPlayState = 'running';
    if (innerRef.current) innerRef.current.style.animationPlayState = 'running';
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-5 md:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12">

        <div className="flex-1 space-y-6 z-10 text-center md:text-left">
          <span className="text-[#00f0ff] tracking-widest uppercase text-sm font-semibold">Hi, I'm</span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Divyam Singh
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-400 font-light">
 <span className="text-gradient font-semibold">Full Stack Developer</span>
</h2>
         
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] text-white font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              View My Work
            </a>
            <a href="/Divyam_Singh_Resume.pdf" download className="px-8 py-3 rounded-full border border-[#00f0ff] text-white font-semibold hover:bg-[#00f0ff]/10 transition-colors">
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end relative">
          <div
            ref={outerRef}
            className="relative w-64 h-64 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-tr from-[#00f0ff] to-[#8a2be2] animate-[spin_10s_linear_infinite]"
            style={{ willChange: 'transform', transform: 'translateZ(0)', touchAction: 'manipulation', WebkitBackfaceVisibility: 'hidden' }}
            onPointerDown={pauseSpin}
            onPointerUp={resumeSpin}
            onPointerCancel={resumeSpin}
            onTouchStart={pauseSpin}
            onTouchEnd={resumeSpin}
          >
            <div
              ref={innerRef}
              className="w-full h-full rounded-full bg-black overflow-hidden relative animate-[spin_10s_linear_reverse_infinite]"
              style={{ willChange: 'transform', transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
            >
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover select-none"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(138,43,226,0.28)_0%,transparent_60%)] blur-2xl -z-10 md:blur-3xl" />
        </div>

      </div>
    </section>
  );
}
