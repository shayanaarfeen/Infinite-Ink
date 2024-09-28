import { Container, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti"; // Hamburger icon
import { ImCross } from "react-icons/im"; // Close icon

const navItems = [
  {
    name: "Home",
    slug: "/",
    authRequired: false,
  },
  {
    name: "Login",
    slug: "/login",
    authRequired: false,
  },
  {
    name: "Signup",
    slug: "/signup",
    authRequired: false,
  },
  {
    name: "All Posts",
    slug: "/all-posts",
    authRequired: true,
  },
  {
    name: "Add Post",
    slug: "/add-post",
    authRequired: true,
  },
];

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-4 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg relative z-50">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <span className="text-white text-2xl font-bold tracking-wide">
                Infinite Ink
              </span>
            </Link>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden">
            <button onClick={handleMenuToggle} className="text-white text-3xl">
              {menuOpen ? <ImCross /> : <TiThMenu />} {/* Toggle icon */}
            </button>
          </div>

          {/* Navigation Links - Hidden on small screens, visible on medium+ */}
          <ul className={`hidden md:flex space-x-8`}>
            {navItems.map((item) =>
              !item.authRequired || authStatus ? (
                <li key={item.name}>
                  <Link
                    to={item.slug}
                    className="px-4 py-2 text-white font-semibold hover:bg-white hover:text-purple-500 transition-colors duration-300 rounded-full shadow-md"
                  >
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}

            {/* Logout Button */}
            {authStatus && (
              <li>
                <LogoutBtn className="px-4 py-2 bg-white text-purple-500 font-semibold hover:bg-gray-100 rounded-full shadow-md" />
              </li>
            )}
          </ul>

          {/* Mobile Menu - Visible on small screens */}
          <ul
            className={`${
              menuOpen ? "block" : "hidden"
            } md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-500 py-6 space-y-4 shadow-lg z-40`}
          >
            {navItems.map((item) =>
              !item.authRequired || authStatus ? (
                <li key={item.name} className="text-center">
                  <Link
                    to={item.slug}
                    onClick={handleMenuToggle} // Close menu on click
                    className="block px-4 py-2 text-white font-semibold hover:bg-white hover:text-purple-500 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}

            {/* Logout Button */}
            {authStatus && (
              <li className="text-center">
                <LogoutBtn className="px-4 py-2 bg-white text-purple-500 font-semibold hover:bg-gray-100 rounded-full shadow-md" />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
