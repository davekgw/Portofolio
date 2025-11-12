import React, { useEffect, useState } from "react";

function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/education")
      .then((res) => res.json())
      .then(setEducation);
  }, []);

  return (
    <section>
      <h3 className="text-xl font-bold mb-4 text-cyan-400">🎓 Education</h3>
      <div className="space-y-3">
        {education.map((edu) => (
          <div key={edu.id} className="bg-gray-700 p-4 rounded-lg shadow">
            <h4 className="font-semibold">{edu.school}</h4>
            <p className="text-gray-300">{edu.degree}</p>
            <p className="text-sm text-gray-400">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
