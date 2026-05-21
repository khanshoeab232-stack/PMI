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
    title: 'Modern Bedroom',
    category: 'Luxury Bedrooms',
    image: '/manus-storage/modern bedroom_f4fb7fe8.webp',
  },
  {
    id: 2,
    title: 'L Type Modular Kitchen',
    category: 'Modular Kitchens',
    image: '/manus-storage/L type modular kitchen_9993d51d.webp',
  },
  {
    id: 3,
    title: 'Open Modular Kitchen',
    category: 'Modular Kitchens',
    image: '/manus-storage/open modular kitchen_228dad42.webp',
  },
  {
    id: 4,
    title: 'Luxury TV Unit',
    category: 'TV Units',
    image: '/manus-storage/luxury TV unit_1a216d1c.webp',
  },
  {
    id: 5,
    title: 'Modern Wardrobe Hinged Doors',
    category: 'Wardrobes',
    image: '/manus-storage/modern wardobe hinged doors_f2695572.webp',
  },
  {
    id: 6,
    title: 'Luxury Full TV Unit',
    category: 'TV Units',
    image: '/manus-storage/luxury full Tv unit_d9317494.webp',
  },
  {
    id: 7,
    title: 'Premium TV Unit',
    category: 'TV Units',
    image: '/manus-storage/premium Tv Unit_4e4e9196.webp',
  },
  {
    id: 8,
    title: 'PU Panel Luxury Wardrobes',
    category: 'Wardrobes',
    image: '/manus-storage/pu panel luxury wardobes hinged doors_1794302d.webp',
  },
  {
    id: 9,
    title: 'Sliding Wardrobes',
    category: 'Wardrobes',
    image: '/manus-storage/sliding wardobes_ab62ef48.webp',
  },
  {
    id: 10,
    title: 'Kids Bedroom',
    category: 'Bedrooms',
    image: '/manus-storage/kids bedroom_6b2a8d18.webp',
  },
  {
    id: 11,
    title: 'Prime Nest Kitchen',
    category: 'Modular Kitchens',
    image: '/manus-storage/primenest-kitchen.jpg_b8c1850c.webp',
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

  const handleImageClick = (project: Project) => {
    setSelectedProject(project);
    setAutoPlay(false);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setAutoPlay(true);
  };

  const handlePrevModal = () => {
    if (!selectedProject) return;
    const currentIdx = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIdx = (currentIdx - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIdx]);
  };

  const handleNextModal = () => {
    if (!selectedProject) return;
    const currentIdx = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIdx = (currentIdx + 1) % projects.length;
    setSelectedProject(projects[nextIdx]);
  };

  const handleGetQuote = () => {
    if (!selectedProject) return;
    const message = `Hi Prime Nest Interiors, I'm interested in the ${selectedProject.title} project. Please provide me with a quote and consultation.`;
    const whatsappUrl = `https://wa.me/919542663490?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const visibleProjects = [
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Recent Projects
          </h2>
          <p className="text-gray-600 text-lg">
            Explore beautifully crafted interiors by Prime Nest Interiors
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-4"></div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Carousel Container */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8">
            {/* Images Grid */}
            <div className="flex h-full gap-4 px-4 md:px-0">
              {visibleProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`relative flex-1 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 transform ${
                    idx === 0 ? 'scale-100 md:scale-110 md:z-10' : 'scale-90 md:scale-100 opacity-60 md:opacity-100'
                  }`}
                  onClick={() => handleImageClick(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.category}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-3 justify-center flex-wrap">
            {projects.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setAutoPlay(false);
                  setTimeout(() => setAutoPlay(true), 100);
                }}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  idx === currentIndex
                    ? 'border-amber-500 scale-110'
                    : 'border-gray-300 hover:border-amber-300'
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

          {/* Counter */}
          <div className="text-center mt-6 text-gray-600 font-medium">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-block px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Projects
          </a>
        </div>
      </div>

      {/* Fullscreen Gallery Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 text-white"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="relative w-full rounded-xl overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto max-h-[80vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-lg text-gray-200 mb-4">{selectedProject.category}</p>
                <a
                  href={`https://wa.me/919542663490?text=${encodeURIComponent(
                    `Hi Prime Nest Interiors, I'm interested in the ${selectedProject.title} project. Please provide me with a quote and consultation.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get a Quote
                </a>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={handlePrevModal}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextModal}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 text-white"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="text-center mt-6 text-white font-medium">
              {projects.findIndex((p) => p.id === selectedProject.id) + 1} / {projects.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
