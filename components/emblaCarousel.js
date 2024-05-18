"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const EmblaCarousel = ({ slides, options, className, style }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 1000, stopOnInteraction: false }),
  ]);

  return (
    <div className={`embla ${className}`} style={style}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div key={index} className="embla__slide">
              <div className="embla__slide__number bg-blue-500">
                <span>{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
