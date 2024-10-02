import React from "react";
import AboutImage from "../assets/image2.png";

const About = () => {
  return (
    <div className="bg-black text-white py-22" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-26">
        <h2 className="text-4xl font-bold text-center mb-6">About Myself</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-74 h-88 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-4">
            Motivated Software Engineering Technology Student specializing in Software Engineering, with strong communication and interpersonal skills. Demonstrated capacity to thrive under pressure, adapt swiftly to new challenges, and support organizational objectives. Quick to learn, with excellent problem-solving skills in fast-paced settings.
            </p>
            <div>
            <h3 className="text-3xl font-bold text-left mb-6">Technical/ Technological Skills</h3> 
            <p><b>Programming</b> : Java programming, C#, SQL, HTML, CSS, JavaScript<br />
               <b>Development Tools</b> : VS Code, Git, GitHub, Git Bash, Visual Studio, Eclipse, IntelliJ<br />
               <b>Frameworks & Libraries</b> : Node.js, React, Express<br />
               <b>Operating Systems</b> : Windows, Unix, Linux <br />
               <b>Database</b> : MongoDB, Mongo sh, SQL<br />
               <b>Design & Charting Tools</b> : MS Visio, LucidChart<br />
               <b>Office Tools</b> : MS Word, MS Excel, MS PowerPoint<br />
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;