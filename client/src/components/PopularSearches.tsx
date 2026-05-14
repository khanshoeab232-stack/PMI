import { motion } from 'framer-motion';

export default function PopularSearches() {
  const searches = [
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
    'Interior Designers Hyderabad',
    'Best Interior Designers in Hyderabad',
  ];

  return (
    <section className="py-12 md:py-16 bg-light-gray">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="heading-md mb-2">Popular Searches in Hyderabad</h3>
          <p className="body-sm text-secondary-text">
            Find the interior design services you're looking for
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {searches.map((search, index) => (
            <motion.a
              key={index}
              href={`/?search=${encodeURIComponent(search)}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-block px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-secondary-text hover:border-gold hover:text-gold transition-all duration-200 cursor-pointer"
            >
              {search}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
