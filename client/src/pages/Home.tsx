import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Home as HomeIcon, Zap, Award, Users } from 'lucide-react';
import { Link } from 'wouter';
import PopularSearches from '@/components/PopularSearches';

export default function Home() {
  const services = [
    {
      icon: HomeIcon,
      title: 'Modular Kitchens',
      description: 'Premium kitchen designs with smart storage and modern aesthetics',
      link: '/modular-kitchens'
    },
    {
      icon: HomeIcon,
      title: 'Wardrobes',
      description: 'Custom wardrobe solutions for organized and elegant bedrooms',
      link: '/wardrobes'
    },
    {
      icon: Zap,
      title: 'TV Units',
      description: 'Entertainment walls that blend functionality with premium design',
      link: '/tv-units'
    },
    {
      icon: Award,
      title: 'Full Home Interiors',
      description: 'Complete interior design solutions for your entire apartment',
      link: '/services'
    },
  ];

  const features = [
    'Premium materials and finishes',
    'Expert design consultation',
    '3D visualization before execution',
    'Professional installation',
    'Warranty and after-sales support',
    'Customized solutions for your space',
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' },
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

  return (
    <div className="bg-white">
      {/* Premium Hero Section */}
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
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200 active:scale-95"
            >
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/projects">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-dark-accent transition-all duration-200 active:scale-95 cursor-pointer">
                View Our Projects
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="heading-lg mb-4">Our Premium Services</h2>
            <div className="divider-gold mb-6"></div>
            <p className="body-lg max-w-2xl mx-auto">
              We specialize in creating premium interior designs for apartments, flats, and villas in Hyderabad. Each project is tailored to your unique needs and lifestyle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="card-premium p-6"
                >
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="heading-sm mb-3">{service.title}</h3>
                  <p className="body-sm mb-4">{service.description}</p>
                  <Link href={service.link}>
                    <span className="inline-flex items-center gap-2 text-gold font-semibold hover:opacity-70 transition-opacity cursor-pointer">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="heading-lg mb-4">Why Choose Prime Nest Interiors?</h2>
            <div className="divider-gold mb-6"></div>
            <p className="body-lg max-w-2xl mx-auto">
              We combine expertise, quality, and innovation to create interior spaces that exceed expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030851542/MgcE2EwQn5YwVAvEt2DHn2/modular-kitchen-premium-5tiQTLo4SDZPs3T5swY5qE.webp"
                alt="Premium modular kitchen design"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="body-md">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="heading-lg mb-4">Our Commitment</h2>
            <div className="divider-gold mb-6"></div>
            <p className="body-lg max-w-2xl mx-auto text-gray-600">
              Focused on delivering premium interior experiences with quality, trust, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Premium Design Solutions', desc: 'Customized for every home' },
              { title: 'End-to-End Support', desc: 'From consultation to installation' },
              { title: 'Quality Craftsmanship', desc: 'Attention to detail in every project' },
              { title: 'Customer Satisfaction', desc: 'Focused on service and long-term relationships' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="card-premium p-6 text-center"
              >
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="heading-sm mb-3">{item.title}</h3>
                <p className="body-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
            <div className="divider-gold mb-6"></div>
            <p className="body-lg max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients across Hyderabad.
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
                className="card-premium p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">★</span>
                  ))}
                </div>
                <p className="body-md mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-dark-accent">{testimonial.name}</p>
                  <p className="body-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="heading-lg mb-4">Our Process</h2>
            <div className="divider-gold mb-6"></div>
            <p className="body-lg">
              From consultation to installation, we ensure a seamless experience
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              { step: '1', title: 'Free Consultation', desc: 'Understand your vision, space, and requirements' },
              { step: '2', title: '3D Design & Proposal', desc: 'Detailed 3D renderings and customized proposal' },
              { step: '3', title: 'Material Selection', desc: 'Choose from premium materials and finishes' },
              { step: '4', title: 'Professional Installation', desc: 'Expert installation with quality assurance' },
              { step: '5', title: 'Handover & Support', desc: 'Final inspection, warranty, and after-sales support' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="heading-sm mb-1">{item.title}</h3>
                  <p className="body-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Searches Section */}
      <PopularSearches />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-dark-accent text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container text-center max-w-2xl"
        >
          <h2 className="heading-lg text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="body-lg text-gray-300 mb-8">
            Get your free consultation today and discover how we can create your dream interior.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-dark-accent rounded-lg font-semibold hover:opacity-90 transition-all duration-200 active:scale-95"
            >
              Chat on WhatsApp <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+919542663490"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-dark-accent transition-all duration-200 active:scale-95"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
