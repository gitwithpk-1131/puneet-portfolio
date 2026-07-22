function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-5xl mx-auto"
    >

      <h2 className="text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>


      <div className="grid md:grid-cols-2 gap-10">


        {/* Contact Information */}

        <div>

          <h3 className="text-2xl font-semibold text-cyan-400">
            Let's Connect
          </h3>


          <p className="text-gray-300 mt-4">
            I'm open to opportunities in Software Development,
            Artificial Intelligence, Machine Learning, and Data Analytics.
          </p>


          <div className="mt-6 space-y-3 text-gray-300">

            <p>
              📧 Email:
              <br />
              puneetkanteti.it@gmail.com
            </p>


            <p>
              💼 LinkedIn:
              <br />
              linkedin.com/in/puneetkanteti
            </p>


            <p>
              💻 GitHub:
              <br />
              github.com/gitwithpk-1131
            </p>

          </div>

        </div>



        {/* Contact Form */}

        <form className="space-y-5">


          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-slate-800 rounded-lg outline-none"
          />


          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-slate-800 rounded-lg outline-none"
          />


          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 bg-slate-800 rounded-lg outline-none"
          />


          <button
            className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold"
          >
            Send Message
          </button>


        </form>


      </div>

    </section>
  );
}

export default Contact;