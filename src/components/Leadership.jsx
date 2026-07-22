function Leadership() {
  const leadership = [
    {
      title: "Hackathon Organizer & Team Lead",
      organization: "PBR Visvodaya Institute of Technology and Science",
      duration: "2025",
      description:
        "Successfully organized and led a 24-hour college hackathon, coordinating event planning, participant engagement, logistics, and technical support. Managed a team of approximately 15 volunteers to ensure the smooth execution of the event."
    },
    {
      title: "Temporary Class Representative",
      organization: "Department of Artificial Intelligence & Machine Learning",
      duration: "2024",
      description:
        "Acted as the primary liaison between faculty and students by communicating academic updates, coordinating class activities, and assisting in resolving student concerns during the assigned period."
    }
  ];

  return (
    <section
      id="leadership"
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Leadership & Campus Involvement
      </h2>

      <div className="space-y-8">
        {leadership.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-2">
                  {item.organization}
                </p>
              </div>

              <span className="text-gray-400 mt-2 md:mt-0">
                {item.duration}
              </span>
            </div>

            <p className="text-gray-400 mt-5 leading-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Leadership;