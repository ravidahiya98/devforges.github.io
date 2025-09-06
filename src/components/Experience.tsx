import React from 'react';
import { experience } from '../data/portfolio';
import { Building, MapPin, Calendar, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey in software engineering, building scalable systems and driving innovation across diverse projects.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-blue-500"></div>

          {experience.map((job, index) => (
            <div
              key={index}
              className={`relative mb-16 md:flex md:items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8">
                  {/* Company Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Building className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {job.company}
                        </h3>
                        <p className="text-teal-600 dark:text-teal-400 font-semibold">
                          {job.position}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-start space-x-3 group"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;