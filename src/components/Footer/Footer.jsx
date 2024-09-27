import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Info */}
          <div>
            <h2 className="text-3xl font-bold text-white">Infinite Ink</h2>
            <p className="mt-4 text-gray-400">
              Discover insightful articles, stories, and more. Stay tuned for
              the latest updates!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-semibold text-white">Quick Links</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition duration-200 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition duration-200 ease-in-out"
                >
                  About
                </a>
              </li>
              <li>
                <Link
                  to="/all-posts"
                  className="hover:text-blue-400 transition duration-200 ease-in-out"
                >
                  Blog Posts
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition duration-200 ease-in-out"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div >
            <h2 className="text-2xl font-semibold text-white">Follow Us</h2>
            <div className="mt-4 flex justify-center space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition duration-200 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.81v-9.293H9.692v-3.623h3.118V8.413c0-3.1 1.892-4.788 4.655-4.788 1.324 0 2.462.099 2.794.143v3.24l-1.916.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.59l-.467 3.623h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition duration-200 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.196 4.916 4.916 0 00-8.373 4.482 13.934 13.934 0 01-10.112-5.138 4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.903 4.903 0 01-2.23-.616c-.054 2.084 1.474 4.062 3.659 4.5a4.936 4.936 0 01-2.224.084 4.93 4.93 0 004.604 3.417A9.867 9.867 0 010 21.543a13.911 13.911 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.005-.426-.015-.637A10.025 10.025 0 0024 4.557z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 transition duration-200 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.206.058 1.973.25 2.428.418a4.92 4.92 0 011.797 1.106 4.92 4.92 0 011.106 1.797c.168.455.36 1.222.418 2.428.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.058 1.206-.25 1.973-.418 2.428a4.92 4.92 0 01-1.106 1.797 4.92 4.92 0 01-1.797 1.106c-.455.168-1.222.36-2.428.418-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.206-.058-1.973-.25-2.428-.418a4.92 4.92 0 01-1.797-1.106 4.92 4.92 0 01-1.106-1.797c-.168-.455-.36-1.222-.418-2.428-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.058-1.206.25-1.973.418-2.428a4.92 4.92 0 011.106-1.797 4.92 4.92 0 011.797-1.106c.455-.168 1.222-.36 2.428-.418 1.265-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.332.014 7.052.072 5.771.13 4.787.319 4.002.601a7.096 7.096 0 00-2.58 1.64 7.096 7.096 0 00-1.64 2.58C.319 5.213.13 6.197.072 7.479.014 8.759 0 9.168 0 12s.014 3.241.072 4.521c.058 1.28.247 2.264.519 3.049.272.784.651 1.51 1.141 2a7.096 7.096 0 002.58 1.64c.784.282 1.769.471 3.049.519C8.759 23.986 9.168 24 12 24s3.241-.014 4.521-.072c1.28-.058 2.264-.247 3.049-.519a7.096 7.096 0 002.58-1.64 7.096 7.096 0 001.64-2.58c.282-.784.471-1.769.519-3.049.058-1.28.072-1.689.072-4.521s-.014-3.241-.072-4.521c-.058-1.28-.247-2.264-.519-3.049a7.096 7.096 0 00-1.64-2.58 7.096 7.096 0 00-2.58-1.64c-.784-.282-1.769-.471-3.049-.519C15.241.014 14.832 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10 text-gray-500">
          &copy; {new Date().getFullYear()} Merajul Aarfeen. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
