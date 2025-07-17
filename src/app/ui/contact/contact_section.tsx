export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-6">
          Feel free to reach out to me for any inquiries or collaboration opportunities.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your message"
            ></textarea>
          </div>
          <button type="submit" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
