import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, achievements } from '../data/portfolio';
import { TrendingUp, Award, Users, Code } from 'lucide-react';

const CounterAnimation: React.FC<{ 
  end: number; 
  suffix: string; 
  duration?: number;
}> = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentCount = Math.floor(progress * end);
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About: React.FC = () => {
  const achievementIcons = [TrendingUp, Award, Users, Code];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 max-w-none">
              <p className="text-lg leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            {/* Career Timeline */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Career Journey</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Senior Software Engineer at Paytm</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Apr 2025 - Present</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Software Engineer at IDEMIA</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Oct 2021 - Apr 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievementIcons[index % achievementIcons.length];
              return (
                <div
                  key={achievement.label}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    <CounterAnimation 
                      end={achievement.value} 
                      suffix={achievement.suffix} 
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-tight">
                    {achievement.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;