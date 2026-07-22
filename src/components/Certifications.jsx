function Certifications() {

  const certifications = [
    {
      title: "Introduction to Java Programming: Fundamental Data Structures and Algorithms",
      provider: "Universidad Carlos III de Madrid",
      year: "2024"
    },

    {
      title: "Python Programming Certification",
      provider: "Python / Programming Course",
      year: "2025"
    },

    {
      title: "Machine Learning Certification",
      provider: "Online Learning Platform",
      year: "2025"
    },

    {
      title: "Cisco Networking Certification",
      provider: "Cisco",
      year: "2025"
    },

    {
      title: "Deloitte Technology Virtual Experience Program",
      provider: "Forage",
      year: "2025"
    }
  ];


  return (
    <section
      id="certifications"
      className="py-20 px-6 max-w-6xl mx-auto"
    >

      <h2 className="text-4xl font-bold text-center mb-10">
        Certifications
      </h2>


      <div className="grid md:grid-cols-2 gap-8">

        {certifications.map((certificate, index) => (

          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition duration-300"
          >

            <h3 className="text-xl font-bold text-cyan-400">
              {certificate.title}
            </h3>

            <p className="text-gray-300 mt-3">
              {certificate.provider}
            </p>

            <p className="text-gray-400 mt-2">
              Completed: {certificate.year}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;