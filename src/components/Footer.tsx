import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-brand-600 text-white mt-12">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold mb-2">Filters</h3>
          <p className="opacity-80">All • Electronics • Clothing • Home</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <ul className="space-y-1 opacity-90">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-3">
            <FaFacebook size="23" />
            <FaTwitter size="23" />
            <FaInstagram size="23" />
          </div>
        </div>
      </div>
      <div className="container py-4 border-t border-white/20 text-sm opacity-80">
        © {new Date().getFullYear()} American
      </div>
    </footer>
  );
}
