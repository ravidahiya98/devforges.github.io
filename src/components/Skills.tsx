import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../data/portfolio';

const ProgressBar: React.FC<{ 
  skill: typeof skills[0];
  delay: number;
}> = ({ skill, delay }) => {
  const [width, setWidth] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setWidth(skill.level);
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [skill.level, delay, hasAnimated]);

  return (
    <div ref={ref} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{skill.category}</p>
          </div>
        </div>
        <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
          {skill.level}%
        </span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const categories = ['Programming', 'Framework', 'Database', 'DevOps', 'Testing', 'Tools', 'Architecture', 'Development'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build scalable, high-performance applications.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mt-4"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'All'
                ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            All Skills
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <ProgressBar
              key={skill.name}
              skill={skill}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;