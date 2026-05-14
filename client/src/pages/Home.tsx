import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Users, Award, Zap, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: '🍳',
      title: 'Modular Kitchens',
      description: 'Premium kitchen designs with modern appliances and smart storage solutions for Hyderabad apartments',
      href: '/modular-kitchens'
    },
    {
      icon: '👗',
      title: 'Wardrobes',
      description: 'Custom wardrobe designs with elegant finishes and optimal organization for your bedroom',
      href: '/wardrobes'
    },
    {
      icon: '📺',
      title: 'TV Units',
      description: 'Sophisticated entertainment walls with integrated storage and lighting for modern living',
      href: '/tv-units'
    },
    {
      icon: '🛏️',
      title: 'Bedroom Interiors',
      description: 'Luxurious bedroom designs creating serene and comfortable spaces for rest and relaxation',
      href: '/services'
    },
    {
      icon: '🛋️',
      title: 'Living Room Interiors',
      description: 'Elegant living spaces designed for modern family living and entertaining guests',
      href: '/services'
    },
    {
      icon: '✨',
      title: 'Full Home Interiors',
      description: 'Complete home transformation with cohesive design throughout your apartment',
      href: '/services'
    },
  ];

  const features = [
    { icon: Award, title: 'Premium Quality', description: 'High-end materials and expert craftsmanship' },
    { icon: Users, title: 'Expert Team', description: 'Experienced designers and architects' },
    { icon: Zap, title: 'Fast Delivery', description: 'Efficient project execution and timely completion' },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Apartment Owner, 2BHK',
      text: 'Prime Nest transformed our 2BHK into a luxurious space. The attention to detail and quality is exceptional. They understood our vision perfectly.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Working Professional',
      text: 'The team was professional, punctual, and delivered exactly what we envisioned. Highly recommended for anyone in Hyderabad!',
      rating: 5
    },
    {
      name: 'Arjun Patel',
      role: 'Villa Owner',
      text: 'Outstanding work! They understood our requirements perfectly and created a space that feels like home. Best investment ever.',
      rating: 5
    },
  ];

  const processSteps = [
    { step: '01', title: 'Consultation', description: 'Free consultation to understand your vision and requirements' },
    { step: '02', title: 'Design', description: 'Custom design proposals tailored to your space and style' },
    { step: '03', title: 'Planning', description: 'Detailed project planning with timeline and budget' },
    { step: '04', title: 'Execution', description: 'Professional installation with quality assurance' },
    { step: '05', title: 'Handover', description: 'Final inspection and project completion' },
  ];

  const trendingSearches = [
    '2BHK Interior Designers Hyderabad',
    '3BHK Interior Designers Hyderabad',
    'Modern Kitchen Designs Hyderabad',
    'Wardrobe Interior Hyderabad',
    'TV Unit Designs Hyderabad',
    'False Ceiling Hyderabad',
    'Apartment Interior Designers',
    'Luxury Home Interiors Hyderabad',
    'Modular Furniture Hyderabad',
    'Living Room Interiors Hyderabad',
  ];

  const faqs = [
    {
      q: 'What is your typical project timeline?',
      a: 'Project timelines vary based on scope. A typical 2BHK apartment takes 45-60 days. We provide detailed timelines during planning.'
    },
    {
      q: 'Do you provide warranty on your work?',
      a: 'Yes, we provide comprehensive warranty on all materials and workmanship. Details are provided in the project agreement.'
    },
    {
      q: 'Can you work within my budget?',
      a: 'Absolutely. We offer flexible solutions across all budget ranges without compromising on quality.'
    },
    {
      q: 'How do I book a free consultation?',
      a: 'You can book through WhatsApp, call us directly, or fill the contact form. We respond within 24 hours.'
    },
    {
      q: 'Do you handle the entire project from design to execution?',
      a: 'Yes, we manage everything - from initial design to final handover, ensuring seamless execution.'
    },
    {
      q: 'What areas do you serve?',
      a: 'We primarily serve Hyderabad and surrounding areas. Contact us to confirm service availability for your location.'
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/120440358/kERaVcJu3ixsY3VUkbwyE6/hero-main-luxury-apartment-28MexhxxJV9on7ZEYQAQ8S.webp)',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container text-center text-white max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Premium Interior Designs for Modern Hyderabad Homes
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed max-w-2xl mx-auto">
            Prime Nest Interiors creates stunning modular kitchens, wardrobes, TV units, and complete home interiors designed for contemporary apartment living in Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gold text-white rounded-lg font-semibold hover:bg-opacity-90 hover:shadow-lg transition-all duration-200 active:scale-95 inline-flex items-center justify-center gap-2"
            >
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/projects">
              <a className="px-8 py-3.5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-dark-accent transition-all duration-200 active:scale-95 inline-flex items-center justify-center gap-2">
                View Projects <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-accent">Our Premium Services</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive interior design solutions tailored to your lifestyle and preferences for Hyderabad homes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group p-6 md:p-8 bg-soft-gray rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <Link href={service.href}>
                  <a className="block h-full">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-dark-accent mb-3 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-soft-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-accent">Why Choose Prime Nest</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-accent mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-soft-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-accent">Featured Projects</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our latest premium interior design projects in Hyderabad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: 'https://d2xsxph8kpxj0f.cloudfront.net/120440358/kERaVcJu3ixsY3VUkbwyE6/modular-kitchen-premium-YjTuPXax5WqaPVNcd5oJZo.webp', title: 'Luxury Modular Kitchen' },
              { img: 'https://d2xsxph8kpxj0f.cloudfront.net/120440358/kERaVcJu3ixsY3VUkbwyE6/wardrobe-design-luxury-DC9reer2AZYi7JnzhYgR6F.webp', title: 'Premium Bedroom Wardrobe' },
              { img: 'https://d2xsxph8kpxj0f.cloudfront.net/120440358/kERaVcJu3ixsY3VUkbwyE6/tv-unit-entertainment-JxbGeZ6uEdqrcKfMiY3FfV.webp', title: 'Modern TV Entertainment Unit' },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-white font-bold text-lg">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/projects">
              <a className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white rounded-lg font-semibold hover:bg-opacity-90 hover:shadow-lg transition-all duration-200 active:scale-95">
                View All Projects <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-accent">Client Testimonials</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              What our satisfied clients in Hyderabad say about Prime Nest Interiors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-soft-gray rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="font-bold text-dark-accent">{testimonial.name}</p>
                  <p className="text-sm text-secondary-gray">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 bg-soft-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-accent">Our Process</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-lg text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-gold mb-2">{item.step}</div>
                  <h3 className="font-bold text-dark-accent mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gold transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Searches - SEO Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-accent">Popular Interior Design Searches in Hyderabad</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Find solutions for your interior design needs
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center">
            {trendingSearches.map((search, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <a
                  href="#"
                  className="inline-block px-4 py-2 bg-soft-gray border border-gray-200 text-dark-accent rounded-full text-sm font-medium hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
                >
                  {search}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-dark-accent text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your free consultation with Prime Nest Interiors today and let us create your dream home in Hyderabad.
            </p>
            <a
              href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-dark-accent rounded-lg font-semibold hover:bg-opacity-90 hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-soft-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-accent">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-4"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-bold text-dark-accent mb-3 flex items-start gap-3">
                  <span className="text-gold font-bold">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 ml-6">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
