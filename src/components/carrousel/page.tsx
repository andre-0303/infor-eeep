"use client"

import Image from "next/image"
import "./carrosel.css"

export default function Carrousel() {
  const baseImages = [1, 2, 3, 4, 5];
  const images = [...baseImages, ...baseImages, ...baseImages]; 

  return (
    <div className="relative bg-[#1B09AF] text-white py-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold">Um pouco do que acontece no curso</h2>
        <div className="w-16 md:w-24 h-1 bg-white mt-1 mb-6 rounded-full"></div>
      </div>

      <div className="absolute top-0 left-0 w-16 sm:w-24 h-full bg-gradient-to-r from-[#1B09AF] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 sm:w-24 h-full bg-gradient-to-l from-[#1B09AF] to-transparent z-20 pointer-events-none" />

      <div className="slider-track flex gap-4 md:gap-6 animate-slide px-4 md:px-6 py-7 relative z-10 w-max">
        {images.map((num, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-60 h-40 md:w-80 md:h-80 min-w-[240px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={`/img${num}.png`}
              alt={`Curso ${num}`}
              width={320}
              height={240}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
