'use client';

export default function ContactPage() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6 text-gray-700">Have questions or need assistance? Reach out to our team.</p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            className="mt-1 block w-full px-3 py-2 border rounded-lg focus:ring-primary focus:border-primary"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full px-3 py-2 border rounded-lg focus:ring-primary focus:border-primary"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full px-3 py-2 border rounded-lg focus:ring-primary focus:border-primary"
            placeholder="How can we help you?"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
          Send Message
        </button>
      </form>
    </main>
  );
}
