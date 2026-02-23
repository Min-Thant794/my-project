import React, { useEffect, useState } from 'react';

const HomePageCarousel = () => {
  const slides = [
    { id: 1, title: 'Image 1' },
    { id: 2, title: 'Image 2' },
    { id: 3, title: 'Image 3' },
    { id: 4, title: 'Image 4' },
    { id: 5, title: 'Image 5' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, slides.length]);

  return (
    <div className="relative w-7/10 mx-auto mt-5 md:p-5 rounded-md flex flex-col items-center">
      <div className="w-full h-full aspect-video border-2 border-gray-800 rounded-3xl overflow-hidden relative shadow-sm">
        <div className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div 
              key={slide.id} 
              className="min-w-full h-full flex flex-col items-center justify-center relative"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.5" 
                  className="w-full h-full mb-4 object-contain"
                >
                  <rect x="2" y="3" width="20" height="18" rx="3" ry="3"></rect>
                  <ellipse cx="8" cy="9" rx="2" ry="1.5"></ellipse>
                  <polyline points="22 15 14 8 2 18"></polyline>
                </svg>
                {/* <span className="text-lg font-medium text-gray-400">
                  {slide.title}
                </span> */}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center mt-6 space-x-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-3.5 h-3.5 cursor-pointer rounded-full transition-colors duration-300 z-10 ${
                currentIndex === index ? 'bg-footer' : 'bg-[#eaeaea] hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageCarousel;