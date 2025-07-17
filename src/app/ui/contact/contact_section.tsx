import { useState } from "react";

export default function ContactSection() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to send message');

      await response.json();
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <section id="contact" className="min-h-screen flex items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-6">
          Feel free to reach out to me for any inquiries or collaboration opportunities.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
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
