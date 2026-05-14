import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Minimalist Gold Roof Icon */}
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 200 160"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Roof outline */}
                  <path
                    d="M 30 100 L 100 30 L 170 100"
                    stroke="#D4AF37"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Chimney */}
                  <rect x="140" y="50" width="16" height="35" fill="#D4AF37" />
                  {/* Windows */}
                  <rect x="70" y="75" width="12" height="12" fill="#D4AF37" />
                  <rect x="88" y="75" width="12" height="12" fill="#D4AF37" />
                  <rect x="70" y="93" width="12" height="12" fill="#D4AF37" />
                  <rect x="88" y="93" width="12" height="12" fill="#D4AF37" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg">Prime Nest</span>
                <span className="text-xs text-gray-400">Interiors</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium interior design solutions for modern apartments in Hyderabad. Creating spaces that blend luxury with practicality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/">
                  <span className="hover:text-gold transition-colors cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-gold transition-colors cursor-pointer">About</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-gold transition-colors cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <span className="hover:text-gold transition-colors cursor-pointer">Projects</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/modular-kitchens">
                  <span className="hover:text-gold transition-colors cursor-pointer">Modular Kitchens</span>
                </Link>
              </li>
              <li>
                <Link href="/wardrobes">
                  <span className="hover:text-gold transition-colors cursor-pointer">Wardrobes</span>
                </Link>
              </li>
              <li>
                <Link href="/tv-units">
                  <span className="hover:text-gold transition-colors cursor-pointer">TV Units</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-gold transition-colors cursor-pointer">All Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <a href="tel:+919542663490" className="hover:text-gold transition-colors">
                  +91 9542 663 490
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <a href="mailto:info@primenestinteriors.com" className="hover:text-gold transition-colors">
                  info@primenestinteriors.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Prime Nest Interiors. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
