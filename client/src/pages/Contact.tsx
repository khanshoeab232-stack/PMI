import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9542 663 490',
      link: 'tel:+919542663490'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@primenestinteriors.com',
      link: 'mailto:info@primenestinteriors.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Hyderabad, India',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Hours',
      value: 'Mon - Sun: 9 AM - 6 PM',
      link: '#'
    },
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark-accent mb-6">Get in Touch</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Have questions about our services? We'd love to hear from you. Contact us today for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="p-6 bg-soft-gray rounded-lg border border-gray-200 text-center hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gold rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-dark-accent mb-2">{info.title}</h3>
                  <p className="text-gray-700 group-hover:text-gold transition-colors">{info.value}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24 bg-soft-gray">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-dark-accent mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-accent mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-accent mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-accent mb-2">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="modular-kitchen">Modular Kitchen</option>
                    <option value="wardrobe">Wardrobe</option>
                    <option value="tv-unit">TV Unit</option>
                    <option value="bedroom">Bedroom Interiors</option>
                    <option value="living-room">Living Room Interiors</option>
                    <option value="full-home">Full Home Interiors</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-accent mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gold text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-8">Quick Contact</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Prefer to reach out directly? We're here to help! Choose your preferred method of contact.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20book%20a%20free%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark-accent">WhatsApp</p>
                    <p className="text-sm text-gray-600">Chat with us on WhatsApp</p>
                  </div>
                </a>

                <a
                  href="tel:+919542663490"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark-accent">Call Us</p>
                    <p className="text-sm text-gray-600">+91 9542 663 490</p>
                  </div>
                </a>

                <a
                  href="mailto:info@primenestinteriors.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark-accent">Email</p>
                    <p className="text-sm text-gray-600">info@primenestinteriors.com</p>
                  </div>
                </a>
              </div>

              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="font-bold text-dark-accent mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>Monday - Sunday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gold font-semibold">Available for consultations 7 days a week</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-4">Before You Contact Us</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: 'How long does a typical project take?', a: 'Project duration varies based on scope. A 2BHK apartment typically takes 45-60 days. We provide detailed timelines during consultation.' },
              { q: 'What is your warranty policy?', a: 'We provide comprehensive warranty on all materials and workmanship. Details are included in your project agreement.' },
              { q: 'Do you offer payment plans?', a: 'Yes, we offer flexible payment options. Discuss your budget during consultation for customized payment plans.' },
              { q: 'Can you work within my budget?', a: 'Absolutely. We offer solutions across all budget ranges without compromising on quality.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 bg-soft-gray rounded-lg border border-gray-200"
              >
                <h3 className="font-bold text-dark-accent mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-dark-accent text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container text-center max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Create Something Beautiful</h2>
          <p className="text-lg text-gray-300 mb-8">
            We're excited to help you transform your space. Reach out today!
          </p>
          <a
            href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20book%20a%20free%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-gold text-dark-accent rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 active:scale-95"
          >
            Start Your Free Consultation
          </a>
        </motion.div>
      </section>
    </div>
  );
}
