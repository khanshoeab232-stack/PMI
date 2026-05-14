import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Home as HomeIcon, Zap, Award, Users, ChevronLeft, ChevronRight, Sofa, Shirt, Tv, Utensils, Lightbulb, Palette, DoorOpen, Wind, Hammer, Layers } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import PopularSearches from '@/components/PopularSearches';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Comprehensive services list (15+ services like DreamModular)
  const services = [
    {
      icon: Utensils,
      title: 'Modular Kitchens',
      description: 'Premium kitchen designs with smart storage and modern aesthetics',
      link: '/modular-kitchens'
    },
    {
      icon: Shirt,
      title: 'Wardrobes',
      description: 'Custom wardrobe solutions for organized and elegant bedrooms',
      link: '/wardrobes'
    },
    {
      icon: Tv,
      title: 'TV Units',
      description: 'Entertainment walls that blend functionality with premium design',
      link: '/tv-units'
    },
    {
      icon: Sofa,
      title: 'Living Room Design',
      description: 'Sophisticated living spaces that reflect your lifestyle',
      link: '/services'
    },
    {
      icon: HomeIcon,
      title: 'Bedroom Design',
      description: 'Luxurious bedroom interiors for ultimate comfort and style',
      link: '/services'
    },
    {
      icon: Palette,
      title: 'Pooja Room Design',
      description: 'Sacred spaces designed with spiritual elegance',
      link: '/services'
    },
    {
      icon: DoorOpen,
      title: 'Dining Hall',
      description: 'Elegant dining spaces for memorable gatherings',
      link: '/services'
    },
    {
      icon: Lightbulb,
      title: 'Foyer & False Ceiling',
      description: 'Stunning entryways and ceiling designs',
      link: '/services'
    },
    {
      icon: Wind,
      title: 'Bathroom Design',
      description: 'Spa-like bathrooms with premium fixtures',
      link: '/services'
    },
    {
      icon: Palette,
      title: 'Wallpaper & Paint Design',
      description: 'Creative wall treatments and color schemes',
      link: '/services'
    },
    {
      icon: Lightbulb,
      title: 'Lighting & Furniture',
      description: 'Ambient lighting and custom furniture solutions',
      link: '/services'
    },
    {
      icon: Hammer,
      title: 'Study & Staircase Design',
      description: 'Functional study spaces and elegant staircases',
      link: '/services'
    },
  ];

  const stats = [
    { number: '1000+', label: 'Projects Completed', highlight: true },
    { number: '45', label: 'Days Assured Delivery' },
    { number: '15+', label: 'Years Experience' },
    { number: '10', label: 'Years Warranty' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Apartment Owner',
      text: 'Prime Nest transformed our apartment into a dream home. The attention to detail and professionalism was exceptional.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Villa Owner',
      text: 'Excellent service from consultation to installation. The team understood our vision perfectly and delivered beyond expectations.',
      rating: 5
    },
    {
      name: 'Anjali Reddy',
      role: 'Working Professional',
      text: 'They made the entire process hassle-free. The quality of work and timely delivery impressed us completely.',
      rating: 5
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Free Consultation',
      description: 'Site visit, measurements, requirements analysis, budget discussion, and initial design ideas'
    },
    {
      number: '2',
      title: '3D Design Process',
      description: 'Space planning, material selection, 360° VR 3D renderings, design finalization'
    },
    {
      number: '3',
      title: 'Production & Factory',
      description: 'Material procurement, production scheduling, quality verification, packing & dispatch'
    },
    {
      number: '4',
      title: 'Installation',
      description: 'Professional installation, quality checks, deep cleaning, handover & 10-year warranty'
    },
  ];

  // Carousel auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white">
      {/* Premium Hero Section with Carousel */}
      <section className="relative h-screen md:h-[600px] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663030851542/MgcE2EwQn5YwVAvEt2DHn2/hero-premium-living-AEqYpDtXncAEA9TdeWApXx.webp)',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 container text-left max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="heading-xl text-white mb-4"
          >
            Premium Interior Designs for Modern Hyderabad Homes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-100 mb-8 leading-relaxed"
          >
            Transform your apartment into a luxury space with our expert interior design solutions. Modular kitchens, wardrobes, TV units, and complete home interiors crafted for elegant living.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20book%20a%20free%20consultation"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              Book Free Consultation <ArrowRight size={20} />
            </a>
            <Link href="/projects">
              <a className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                View Our Projects <ArrowRight size={20} />
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.highlight ? 'text-gold' : 'text-white'}`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Grid Layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Our Premium Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in creating premium interior designs for apartments, flats, and villas in Hyderabad. Each project is tailored to your unique needs and lifestyle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:border-gold"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="text-gold" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link href={service.link}>
                    <a className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all">
                      Learn More <ArrowRight size={16} />
                    </a>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <a className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                View All Services <ArrowRight size={20} />
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Why Choose Prime Nest Interiors?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine expertise, quality, and innovation to create interior spaces that exceed expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Premium Materials', desc: 'High-quality finishes and durable materials' },
              { icon: Users, title: 'Expert Team', desc: 'Experienced designers and craftsmen' },
              { icon: CheckCircle, title: '3D Visualization', desc: 'See your design before execution' },
              { icon: Zap, title: 'Professional Installation', desc: 'Expert installation with quality assurance' },
              { icon: Award, title: 'Warranty Support', desc: '10-year warranty on all work' },
              { icon: Users, title: 'Custom Solutions', desc: 'Tailored designs for your space' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="text-gold" size={32} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From consultation to installation, we ensure a seamless experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">{step.number}</span>
                </div>
                <h3 className="font-semibold text-lg text-center mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm text-center">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gold/30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients across Hyderabad.
            </p>
          </motion.div>

          <div className="relative max-w-2xl mx-auto">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur p-8 md:p-12 rounded-lg border border-white/20"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[activeSlide].rating)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">★</span>
                ))}
              </div>
              <p className="text-white text-lg mb-6 italic">"{testimonials[activeSlide].text}"</p>
              <div>
                <p className="text-gold font-semibold">{testimonials[activeSlide].name}</p>
                <p className="text-gray-300 text-sm">{testimonials[activeSlide].role}</p>
              </div>
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-2 bg-gold/20 hover:bg-gold/30 text-gold rounded-full transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeSlide ? 'bg-gold w-8' : 'bg-gold/30'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-2 bg-gold/20 hover:bg-gold/30 text-gold rounded-full transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Searches Section */}
      <PopularSearches />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-4">Ready to Transform Your Space?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Get your free consultation today and discover how we can create your dream interior.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20book%20a%20free%20consultation"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Chat on WhatsApp <ArrowRight size={20} />
              </a>
              <a
                href="tel:+919542663490"
                className="inline-flex items-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold/10 transition-all"
              >
                Call Us Now <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
