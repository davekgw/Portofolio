import React, { useEffect, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/skills")
      .then((res) => res.json())
      .then(setSkills);
  }, []);

  return (
    <section>
      <h3 className="text-xl font-bold mb-4 text-cyan-400">💡 Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-gray-700 p-3 rounded-lg text-center hover:bg-cyan-600 transition"
          >
            <p className="font-medium">{skill.name}</p>
            <p className="text-sm text-gray-300">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
