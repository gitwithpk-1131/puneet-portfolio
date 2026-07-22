function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md px-8 py-5 flex justify-between items-center z-50">

      <h1 className="text-2xl font-bold text-cyan-400">
        Puneet Kanteti
      </h1>

      <div className="flex gap-6 text-gray-300">
        <a href="#about" className="hover:text-cyan-400">
          About
        </a>

        <a href="#skills" className="hover:text-cyan-400">
          Skills
        </a>

        <a href="#projects" className="hover:text-cyan-400">
          Projects
        </a>

        <a href="#contact" className="hover:text-cyan-400">
          Contact
        </a>
      </div>

    </nav>
  );
}

export default Navbar;