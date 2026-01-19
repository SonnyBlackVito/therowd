'use client';

import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

interface MediaSliderProps {
  cover: string;
  gallery: string[];
}

export default function MediaSlider({ cover, gallery }: MediaSliderProps) {
  const allImages = [cover, ...gallery.filter(img => img !== cover)];
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: allImages.length > 1,
      slidesToScroll: 1,
    },
    allImages.length > 1 ? [Autoplay({ delay: 5000, stopOnInteraction: false })] : []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="space-y-4 mb-10">
      <div className="relative h-[400px] sm:h-[430px] rounded-2xl border border-[#FFF] bg-[#060F1F] overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {allImages.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative h-[400px] sm:h-[430px]">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="contain"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        
        {allImages.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-10">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {allImages.length > 1 && (
        <div className="flex justify-center gap-3">
          {allImages.slice(0, 3).map((image, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`relative h-[100px] w-[180px] max-w-[182px] rounded-xl overflow-hidden border transition-all duration-300 ${
                selectedIndex === index
                  ? 'border-white/60'
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

