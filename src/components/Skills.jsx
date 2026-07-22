function Skills() {
  const skills = [
    "Python",
    "Java",
    "JavaScript",
    "SQL",
    "HTML",
    "CSS",
    "Pandas",
    "NumPy",
    "Flask",
    "MySQL",
    "Git",
    "GitHub"
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 max-w-6xl mx-auto"
    >

      <h2 className="text-4xl font-bold text-center mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-800 p-5 rounded-xl text-center hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;