import React from "react";
import Image1 from "../assets/project-image1.png";
import Image3 from "../assets/project-image3.png";
import Image2 from "../assets/project-image2.png";

const projects = [
  {
    id: 1,
    name: "Photo Gallery",
    technologies: "Course : Client-Side Web Developement",
    description: "Five photos of flower display here with nevigation facility. It can be scrolled to rigt or left. Also, we can select a fovorite from these photos.",
    image: Image1,
    github: "https://github.com/anamulhabibsohel",
  },
  {
    id: 2,
    name: "Calculator Performance",
    technologies: "Course: Client-Side Web Development",
    image: Image2,
    description: "I have made a calculator for multiplication, division, add, or subtraction. This calculator also can detect the wrong character, and notify to the users.",
    github: "https://github.com/anamulhabibsohel",
  },
  {
    id: 3,
    name: "Bug Smasher",
    technologies: "Course: Client-Side Web Development",
    description: "A bug runs on a leaf with its selected speed. The user gets score upon catching the bug everytime. User also can increase and decrease the speed.",
    image: Image3,
    github: "https://github.com/anamulhabibsohel",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-22" id="project">
      <div className="container mx-auto px-8 md:px-18 lg:px-26">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-600 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-200 hover:scale-110">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-1xl font-bold mb-2">{project.technologies}</p>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a href="https://github.com/anamulhabibsohel/Assignment1" className="inline-block bg-gradient-to-r 
              from-green-600 to-blue-700 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;