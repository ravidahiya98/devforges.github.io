import React from 'react';
import { personalInfo } from '../data/portfolio';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Name and Title */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {personalInfo.title}
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              {personalInfo.email}
            </a>
            <a
              href={`https://linkedin.com/in/${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-8"></div>

          {/* Made with love */}
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="h-4 w-4 text-teal-500" />
            <span>and lots of</span>
            <Coffee className="h-4 w-4 text-yellow-600" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;