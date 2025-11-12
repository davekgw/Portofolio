import React, { useEffect, useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/profile")
      .then((res) => res.json())
      .then(setProfile);
  }, []);

  return (
    <section className="text-center space-y-4">
      <img
        src={profile.photo}
        alt="profile"
        className="w-32 h-32 rounded-full mx-auto border-4 border-cyan-400"
      />
      <h2 className="text-2xl font-semibold">{profile.name}</h2>
      <p className="text-cyan-300">{profile.title}</p>
      <p className="max-w-xl mx-auto text-gray-300">{profile.description}</p>
    </section>
  );
}

export default Profile;
