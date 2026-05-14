import { Link } from 'wouter';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-accent text-white">
      {/* Main Footer Content */}
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-dark-accent font-bold text-sm">PN</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">Prime Nest</span>
                <span className="text-xs text-gray-400">Interiors</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium interior design solutions for modern Hyderabad homes. Transform your space with our expert craftsmanship and innovative designs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-gold transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-400 hover:text-gold transition-colors">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="text-gray-400 hover:text-gold transition-colors">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-gold transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-gold transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/modular-kitchens">
                  <a className="text-gray-400 hover:text-gold transition-colors">Modular Kitchens</a>
                </Link>
              </li>
              <li>
                <Link href="/wardrobes">
                  <a className="text-gray-400 hover:text-gold transition-colors">Wardrobe Design</a>
                </Link>
              </li>
              <li>
                <Link href="/tv-units">
                  <a className="text-gray-400 hover:text-gold transition-colors">TV Units</a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">Living Room Interiors</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">Full Home Interiors</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">+91 9542 663 490</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">Hyderabad, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">Mon - Sat: 10 AM - 6 PM</p>
                  <p className="text-gray-400">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {currentYear} Prime Nest Interiors. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
