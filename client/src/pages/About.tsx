import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Lightbulb, Target, ArrowRight } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');
  const missionVisionValues = {
    mission: {
      title: 'Our Mission',
      description: 'To provide top-tier home interiors in Hyderabad that not only meet the expectations of our customers, but also enrich their lifestyle with innovative, personal designs. Quality craftsmanship, careful attention to detail, and spontaneous project execution are our goals to enhance living experiences for Hyderabad and beyond.',
      icon: Target
    },
    vision: {
      title: 'Our Vision',
      description: 'To become a leading choice for interior design, making dreams alive, one space at a time. We envision a future where premium interior design is accessible to everyone, and where every home reflects the personality and lifestyle of its inhabitants.',
      icon: Lightbulb
    },
    values: {
      title: 'Our Values',
      description: 'We are guided by core values of excellence, customer focus, innovation, integrity, and sustainability. We believe in delivering premium quality, listening to our clients, staying updated with design trends, maintaining transparency, and creating environmentally conscious solutions.',
      icon: Users
    }
  };

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering premium quality and attention to detail'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver beyond expectations'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay updated with latest design trends and innovative solutions for modern living'
    },
  ];

  const team = [
    { name: 'Rajesh Sharma', role: 'Founder & Lead Designer', exp: '15+ years' },
    { name: 'Priya Verma', role: 'Design Director', exp: '12+ years' },
    { name: 'Arjun Kapoor', role: 'Project Manager', exp: '10+ years' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-soft-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dark-accent mb-6">About Prime Nest Interiors</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are a team of passionate interior designers dedicated to creating premium, functional, and beautiful spaces for modern living in Hyderabad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Prime Nest Interiors was founded with a vision to transform apartments and homes into beautiful, functional spaces that reflect the lifestyle of modern Hyderabad residents.
                </p>
                <p>
                  With over 15 years of combined experience, our team has successfully completed 1000+ projects, earning the trust of hundreds of satisfied clients across the city.
                </p>
                <p>
                  We believe that premium interior design should be accessible to everyone. Our approach combines luxury aesthetics with practical functionality, creating spaces that are both beautiful and livable.
                </p>
                <p>
                  From modular kitchens to complete home interiors, we bring expertise, creativity, and dedication to every project we undertake.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030851542/MgcE2EwQn5YwVAvEt2DHn2/hero-main-JcaSpkBMK629bMVPxjD53z.webp"
                alt="Prime Nest Interiors"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gold/10 to-gold/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-4">Our Mission, Vision & Values</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            {['mission', 'vision', 'values'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-gold text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gold'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {Object.entries(missionVisionValues).map(([key, content]) => {
            const Icon = content.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={activeTab === key ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className={activeTab === key ? 'block' : 'hidden'}
              >
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gold/20">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-20 h-20 bg-gold/10 rounded-lg">
                        <Icon className="w-10 h-10 text-gold" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-dark-accent mb-4">{content.title}</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">{content.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-4">Our Core Values</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:border-gold"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4 group-hover:bg-gold/20">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-accent mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-4">Our Expert Team</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-soft-gray flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold to-gold/50 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark-accent mb-1">{member.name}</h3>
                <p className="text-gold font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.exp}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-soft-gray">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-4">Why Choose Us?</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="space-y-4">
            {[
              'Experienced team with 15+ years in the industry',
              '1000+ successful projects completed',
              'Premium quality materials and craftsmanship',
              'Customized designs tailored to your needs',
              'Transparent pricing and timely delivery',
              'Comprehensive warranty on all work',
              'Free consultation and design proposals',
              'Professional project management from start to finish',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all"
              >
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-dark-accent text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container text-center max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Create Something Beautiful Together</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today for a free consultation and discover how we can transform your space
          </p>
          <a
            href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20book%20a%20free%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-gold text-dark-accent rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 active:scale-95"
          >
            Book Free Consultation
          </a>
        </motion.div>
      </section>
    </div>
  );
}
