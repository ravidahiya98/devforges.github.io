import React, { useState } from 'react';
import { projects } from '../data/portfolio';
import { ExternalLink, Code, X } from 'lucide-react';

const ProjectModal: React.FC<{
  project: typeof projects[0] | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-teal-600 dark:text-teal-400 font-semibold">
                Client: {project.client}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Description
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.impact && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Impact
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.impact}
                </p>
              </div>
            )}

            {project.features && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing key projects that demonstrate my expertise in building scalable, high-performance systems.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="p-6">
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 px-2 py-1 rounded-full">
                    {project.client}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => openModal(project)}
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;