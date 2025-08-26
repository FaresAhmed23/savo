// src/components/layout/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              Savoria Kitchen
            </h3>
            <p className="text-gray-300">
              Experience culinary excellence in every bite.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-white">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span className="text-gray-300">123 Gourmet Street</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <div>
                  <p>Mon-Fri: 11:00 AM - 10:00 PM</p>
                  <p>Sat-Sun: 10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Savoria Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
