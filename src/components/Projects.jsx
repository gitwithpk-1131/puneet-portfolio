function Projects() {

  const projects = [
    {
      title: "Blockchain Certificate Authentication System",
      description:
        "A decentralized certificate issuing and verification system that provides secure and tamper-proof certificate validation using blockchain technology.",
      tech:
        "Java | Ethereum | Blockchain"
    },

    {
      title: "Heart Disease Prediction System",
      description:
        "A machine learning application that predicts the possibility of heart disease using healthcare datasets and classification algorithms.",
      tech:
        "Python | Scikit-learn | Flask"
    },

    {
      title: "Event Management System",
      description:
        "A full-stack web application for managing events, registrations, and user activities with an interactive interface.",
      tech:
        "React | Node.js | MongoDB | Express"
    },

    {
      title: "CNN Image Classification",
      description:
        "A deep learning model that classifies images using convolutional neural networks trained on image datasets.",
      tech:
        "Python | TensorFlow | Keras"
    },

    {
      title: "Data Analytics Dashboard",
      description:
        "An interactive dashboard that transforms raw data into meaningful insights through visualization and analysis.",
      tech:
        "Python | Pandas | Power BI"
    }
  ];


  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-6xl mx-auto"
    >

      <h2 className="text-4xl font-bold text-center mb-10">
        Projects
      </h2>


      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition duration-300"
          >

            <h3 className="text-2xl font-bold text-cyan-400">
              {project.title}
            </h3>


            <p className="text-gray-300 mt-4">
              {project.description}
            </p>


            <p className="mt-4 text-sm text-gray-400">
              <b>Tech Stack:</b>
              <br />
              {project.tech}
            </p>


            <button
              className="mt-5 px-5 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black"
            >
              View Project
            </button>


          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;