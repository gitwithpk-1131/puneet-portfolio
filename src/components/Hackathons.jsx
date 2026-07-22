function Hackathons() {
  const hackathons = [
    {
      title: "Innovesta 2K25",
      year: "2025",
      theme: "Web Development",
      role: "Participant",
      project: "Event Management System",
      description:
        "Participated in a web development hackathon and collaborated with a team to design and develop an Event Management System. Contributed to building core features, problem-solving, and presenting the final solution within the competition timeline."
    },
    {
      title: "CodeClash",
      year: "2026",
      theme: "8-Hour Mini Hackathon",
      role: "Participant",
      project: "Problem Solving Challenge",
      description:
        "Participated in an 8-hour mini hackathon focused on rapid software development, teamwork, and innovative problem-solving under strict time constraints."
    }
  ];

  return (
    <section
      id="hackathons"
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Hackathons
      </h2>

      <div className="space-y-8">
        {hackathons.map((hackathon, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between">
              <h3 className="text-2xl font-bold text-cyan-400">
                {hackathon.title}
              </h3>

              <span className="text-gray-400">
                {hackathon.year}
              </span>
            </div>

            <p className="mt-3 text-gray-300">
              <strong>Role:</strong> {hackathon.role}
            </p>

            <p className="text-gray-300">
              <strong>Theme:</strong> {hackathon.theme}
            </p>

            <p className="text-gray-300">
              <strong>Project:</strong> {hackathon.project}
            </p>

            <p className="mt-4 text-gray-400">
              {hackathon.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hackathons;