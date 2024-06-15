'use client'
import React, { useEffect, useRef } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { testimonials } from '@/constants/testimonialData';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

interface SlideType {
  position: number;
  width: number;
}

const TestimonialSlider = () => {
  // Initialize Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1, loop: false });
  const containerRef = useRef<HTMLDivElement>(null);

  // useEffect to handle Embla Carousel initialization
  useEffect(() => {
    // Check if emblaApi is available before proceeding
    if (emblaApi && containerRef.current) {
      emblaApi.on('init', () => {
        // Set the width of each slide to one-third of the container's width
        const slides = (emblaApi as EmblaCarouselType & { slides: HTMLElement[] }).slides;

        const getScrollSnapList = (): number[] =>
          slides.map(() => {
            const containerWidth = containerRef.current?.getBoundingClientRect().width || 0;
            return containerWidth / 3;
          });

        emblaApi.scrollSnapList = getScrollSnapList;
      });
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="flex py-2 px-1 gap-[20px]" ref={containerRef}>
          {/* Check if testimonials array is available before mapping */}
          {testimonials?.map((slide) => (
            <div key={slide?.id} className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
              <TestimonialCard testimonialData={slide} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
