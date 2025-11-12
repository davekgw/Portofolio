import React, { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <section>
      <h3 className="text-xl font-bold mb-4 text-cyan-400">🚀 Projects</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-700 p-4 rounded-lg hover:scale-105 transform transition"
          >
            <h4 className="font-semibold text-cyan-300">{project.title}</h4>
            <p className="text-gray-300">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
