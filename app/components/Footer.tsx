// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Temitope</h2>
          <p className="text-sm">
            Software Developer & Data Analyst. I build user-centric web apps and
            extract insights from data.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-2">Connect</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="https://github.com/rebtem"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rebecca-okunola-"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:your@email.com" className="hover:text-white">
                Email Me
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter (Optional) */}
        <div>
          <h3 className="text-white font-semibold mb-2">Newsletter</h3>
          <p className="text-sm mb-2">Get updates on my latest projects.</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-400 text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Temitope. All rights reserved.
      </div>
    </footer>
  );
}
