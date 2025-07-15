import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* About */}
        <div>
          <h3 className="font-semibold text-lg mb-2">About JJU Clinic</h3>
          <p className="text-sm">
            We’re dedicated to providing top-notch medical care with a personal touch. Your health is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            {['Dashboard', 'Appointments', ].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <p className="text-sm">jju clinic,Jigjiga</p>
          <p className="text-sm">Email: jjuclinic.com</p>
          <p className="text-sm">Phone: +251 .......</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs">
        © {new Date().getFullYear()} JJU Clinic. All rights reserved.
      </div>
    </footer>
  )
}
