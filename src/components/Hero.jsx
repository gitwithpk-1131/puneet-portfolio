import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <h3 className="text-cyan-400 text-xl">
            Hello, I'm
          </h3>

          <h1 className="text-6xl font-bold mt-2">
            Puneet Venkata Ranga Sai Nadh Kanteti
          </h1>

          <h2 className="text-3xl text-gray-300 mt-4">
            Python Developer | AI Engineer
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Passionate about Artificial Intelligence, Machine Learning,
            Data Analytics, and Full Stack Development.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-6 mt-8 text-3xl">
            <a
              href="https://github.com/gitwithpk-1131"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/puneetkanteti"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Puneet"
            className="w-80 h-80 rounded-full object-cover border-4 border-cyan-400"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;