import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="container mx-auto p-6 space-y-12">
        <Profile />
        <Education />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
