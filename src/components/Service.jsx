import React from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Strongly able to develop website that can be visually appealing, functional, and user-friendly.",
  },
  {
    id: 2,
    title: "Frontend Design",
    description: "Motivated to form interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Formulation",
    description: "Able to create backend systems to manage databases effectively.",
  },
  {
    id: 4,
    title: "Stack Development",
    description: "Capable to create interface for integrating frontend and backend development.",
  },
  {
    id: 5,
    title: "Software System Design",
    description: "Able to architect software system, and managing its configuration.",
  },
  {
    id: 6,
    title: "Data Management",
    description: "Strong in managing databases using SQL, and python by performing integrated tasks.",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-24" id="service">
      <div className="container mx-auto px-7 md:px-14 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-600 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-500 hover:scale-110"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-600"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-700 to-blue-600">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-green-600 hover:text-blue-800">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;