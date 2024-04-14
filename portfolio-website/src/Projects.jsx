import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Pathfinding Visualiser',
      imageUrl: 'Screenshot 2023-06-19 165816.png',
      description: 'This Project helps in visualizing complex pathfinding algorithms',
    },
    {
      id: 2,
      title: 'Project 2',
      imageUrl: 'Screenshot 2023-06-19 165816.png',
      description: 'Description of Project 2.',
    },
    {
      id: 3,
      title: 'Project 3',
      imageUrl: 'Screenshot 2023-06-19 165816.png',
      description: 'Description of Project 3.',
    },
    // Add more projects as needed
  ];

  return (
    <div id = "projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ">
      {projectsData.map((project) => (
        <div key={project.id} className="border p-4 rounded-lg shadow-md ">
          <img src={project.imageUrl} alt={project.title} className="w-full h-auto mb-4" />
          <h3 className="text-lg font-semibold text-yellow-400">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
