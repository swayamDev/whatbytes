import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-brand-600 text-white mt-12">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold mb-2">Filters</h2>
          <p className="opacity-80">All • Electronics • Clothing • Home</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">About Us</h2>
          <ul className="space-y-1 opacity-90">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={23} className="hover:text-blue-400" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={23} className="hover:text-sky-400" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={23} className="hover:text-pink-400" />
            </a>
          </div>
        </div>
      </div>
      <div className="container py-4 border-t border-white/20 text-sm opacity-80">
        © {new Date().getFullYear()} American
      </div>
    </footer>
  );
}
