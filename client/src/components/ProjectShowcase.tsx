'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, MessageCircle } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Luxury Master Bedroom',
    category: 'Luxury Bedrooms',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030851542/MgcE2EwQn5YwVAvEt2DHn2/hero-main-JcaSpkBMK629bMVPxjD53z.webp',
  },
  {
    id: 2,
    title: 'Premium Modular Kitchen',
    category: 'Modular Kitchens',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030851542/MgcE2EwQn5YwVAvEt2DHn2/modular-kitchen-premium-5tiQTLo4SDZPs3T5swY5qE.webp',
  },
  {
    id: 3,
    title: 'Modern Living Room',
    category: 'Living Rooms',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030851542/MgcE2EwQn5YwVAvEt2DHn2/wardrobe-design-luxury-9KL2mNoPqR8vX4jY6zT1aB.webp',
  },
  {
    id: 4,
    title: 'Contemporary TV Unit',
    category: 'TV Units',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030851542/MgcE2EwQn5YwVAvEt2DHn2/tv-unit-entertainment-cD3eF5gH7iJ9kL1mN2oP3q.webp',
  },
  {
    id: 5,
    title: 'Custom Wardrobe Design',
    category: 'Wardrobes',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030851542/MgcE2EwQn5YwVAvEt2DHn2/full-home-interior-rS4tU5vW6xY7zA8bC9dE0f.webp',
  },
  {
    id: 6,
    title: 'Full Home Interior',
    category: 'Full Home Interiors',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030851542/MgcE2EwQn5YwVAvEt2DHn2/hero-main-luxury-apartment-gH1iJ2kL3mN4oP5qR6sT7u.webp',
  },
];

export default function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Auto-slide functionality
  useEffect(() => {
    if (!autoPlay) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay]);

  const handlePrev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setAutoPlay(true);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setAutoPlay(true);
  };

  const handleThumbnailClick = (index: number) => {
    setAutoPlay(false);
    setCurrentIndex(index);
    setAutoPlay(true);
  };

  const handleModalNext = () => {
    const nextIndex = (projects.findIndex(p => p.id === selectedProject?.id) + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handleModalPrev = () => {
    const currentIdx = projects.findIndex(p => p.id === selectedProject?.id);
    const prevIndex = (currentIdx - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  // Swipe handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }
  };

  const handleModalSwipe = (e: React.TouchEvent) => {
    const startX = e.changedTouches[0].screenX;
    const endX = e.changedTouches[0]?.screenX || startX;
    
    if (startX - endX > 50) {
      handleModalNext();
    }
    if (endX - startX > 50) {
      handleModalPrev();
    }
  };

  const visibleProjects = [
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore beautifully crafted interiors by Prime Nest Interiors
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6"></div>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative h-96 md:h-[500px] bg-gray-100">
              {/* Main Image */}
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                loading="lazy"
              />

              {/* Overlay with Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-amber-400 font-medium text-sm md:text-base">
                  {projects[currentIndex].category}
                </p>
              </div>

              {/* Play Button for Modal */}
              <button
                onClick={() => setSelectedProject(projects[currentIndex])}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1"></div>
                </div>
              </button>
            </div>

            {/* Navigation Arrows - Desktop Only */}
            <button
              onClick={handlePrev}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full items-center justify-center transition-all duration-300 shadow-lg"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>

            <button
              onClick={handleNext}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full items-center justify-center transition-all duration-300 shadow-lg"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-3 md:gap-4 mt-6 overflow-x-auto pb-2 md:pb-0">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => handleThumbnailClick(index)}
                className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                  index === currentIndex
                    ? 'border-amber-500 ring-2 ring-amber-400 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-amber-300 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10 md:mt-14">
          <a
            href="/projects"
            className="inline-block px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
          </a>
        </div>
      </div>

      {/* Fullscreen Gallery Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={(e) => {
            handleModalSwipe(e);
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 z-60 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 text-white"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Image */}
            <div className="relative bg-black rounded-lg overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {/* Info Overlay with Get a Quote Button */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {selectedProject.title}
                    </h3>
                    <p className="text-amber-400 font-medium">
                      {selectedProject.category}
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20am%20interested%20in%20the%20${selectedProject.title}%20project.%20Can%20you%20provide%20a%20quote%20for%20similar%20work?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handleModalPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleModalNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 text-white"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 right-6 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
              {projects.findIndex(p => p.id === selectedProject.id) + 1} / {projects.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
