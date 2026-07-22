function Experience() {

  const experiences = [
    {
      role: "AI/ML Intern",
      company: "Deeksha Technologies",
      description:
        "Worked on machine learning projects involving data preprocessing, model development, evaluation, and Python-based AI solutions."
    },

    {
      role: "Machine Learning Intern",
      company: "Talent Trek E-Learning",
      description:
        "Developed machine learning solutions, performed data analysis, trained models, and applied ML algorithms using Python."
    },

    {
      role: "AI Engineer Intern",
      company: "Acmegrade",
      description:
        "Worked on AI-based applications and gained practical experience in machine learning concepts and Python development."
    },

    {
      role: "Web Development Intern",
      company: "The Website Makers",
      description:
        "Developed responsive web applications and worked on frontend and backend technologies to improve web development skills."
    },

    {
      role: "Data Science Intern",
      company: "Coincent.ai",
      description:
        "Worked on data analysis, preprocessing, visualization, and machine learning workflows using Python-based data science tools."
    },

    {
      role: "Python Intern",
      company: "Coincent.ai",
      description:
        "Developed Python programs, automation solutions, and improved programming skills through practical projects."
    }
  ];


  return (
    <section
      id="experience"
      className="py-20 px-6 max-w-6xl mx-auto"
    >

      <h2 className="text-4xl font-bold text-center mb-10">
        Experience
      </h2>


      <div className="space-y-8">

        {experiences.map((experience, index) => (

          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition duration-300"
          >

            <h3 className="text-2xl font-bold text-cyan-400">
              {experience.role}
            </h3>

            <h4 className="text-xl text-gray-300 mt-2">
              {experience.company}
            </h4>

            <p className="text-gray-400 mt-4">
              {experience.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Experience;