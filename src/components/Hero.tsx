import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Eye } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const fullText = personalInfo.name;

  useEffect(() => {
    if (currentIndex < fullText.length && isTyping) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else if (currentIndex >= fullText.length) {
      setIsTyping(false);
    }
  }, [currentIndex, isTyping, fullText]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}Ravi.pdf`; 
    link.download = "Ravi_Kumar_Resume.pdf"; // rename when downloading
    // document.body.appendChild(link); // some browsers need this
    link.click();
    // document.body.removeChild(link);
  };

  // const handleDownloadResume = () => {
  //   const link = document.createElement("a");
  //   link.href = ${import.meta.env.BASE_URL}Eknoor.pdf; // ✅ works local + GitHub Pages
  //   link.download = "Eknoor.pdf";
  //   link.click();
  // };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-teal-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 border-2 border-teal-500 rotate-45 animate-spin opacity-30" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 border border-blue-300 rounded-full animate-ping opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-teal-400 to-blue-600 p-1 animate-pulse">
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-4xl font-bold text-gray-600 dark:text-gray-300">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-600 opacity-20 animate-ping"></div>
          </div>

          {/* Name with Typewriter Effect */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Animated Title */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
              {personalInfo.experience} • {personalInfo.location}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            {[
              "Microservices Architecture Expert",
              "Java & Spring Boot Specialist", 
              "High-Performance Systems"
            ].map((highlight, index) => (
              <div
                key={highlight}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {highlight}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Eye className="h-5 w-5" />
              View My Work
              <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button
              onClick={() => handleDownloadResume()}
              className="group bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-teal-600 dark:hover:border-teal-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              <ChevronDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;