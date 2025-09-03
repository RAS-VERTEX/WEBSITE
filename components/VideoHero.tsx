// FILE PATH: /components/VideoHero.tsx

"use client";

import React, { useEffect, useRef } from "react";

const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <section className="relative p-24 flex items-center justify-center bg-white overflow-hidden">
      {/* Video Element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-0"
        style={{
          maskImage: "url(#text-mask)",
          WebkitMaskImage: "url(#text-mask)",
        }}
      >
        <source src="/videos/ras-vertex-work.mp4" type="video/mp4" />
      </video>

      {/* Text with Video Mask */}
      <div className="relative z-10 text-center px-4">
        <h1
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bebas tracking-wider leading-none text-transparent bg-clip-text"
          style={{
            background:
              "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&h=1080&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            animation: "videoText 20s ease-in-out infinite",
          }}
        >
          THE SUNSHINE COAST'S
          <br />
          PROPERTY PARTNER
        </h1>
      </div>

      {/* CSS for video text effect */}
      <style jsx>{`
        @keyframes videoText {
          0%,
          100% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 50% 100%;
          }
          75% {
            background-position: 0% 0%;
          }
        }

        h1 {
          background: linear-gradient(
            45deg,
            #002653 0%,
            #0080ff 25%,
            #002653 50%,
            #0080ff 75%,
            #002653 100%
          );
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* SVG Mask for video text effect (alternative approach) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <defs>
          <mask id="text-mask">
            <rect width="100%" height="100%" fill="black" />
            <text
              x="50%"
              y="45%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-bebas text-8xl lg:text-9xl tracking-wider"
              fill="white"
            >
              THE SUNSHINE COAST'S
            </text>
            <text
              x="50%"
              y="65%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-bebas text-8xl lg:text-9xl tracking-wider"
              fill="white"
            >
              PROPERTY PARTNER
            </text>
          </mask>
        </defs>
      </svg>

      {/* Alternative: Video with CSS clip-path */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{
            clipPath: "url(#text-clip)",
            WebkitClipPath: "url(#text-clip)",
          }}
        >
          <source src="/videos/ras-vertex-work.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Fallback Text (visible when video loads) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bebas tracking-wider leading-none text-center text-brand-blue">
          THE SUNSHINE COAST'S
          <br />
          PROPERTY PARTNER
        </h1>
      </div>
    </section>
  );
};

export default VideoHero;
