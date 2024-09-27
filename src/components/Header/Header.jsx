import { Container, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    
  ];

  return (
    <header className="py-4 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
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

          {/* Navigation Links */}
          <ul className="flex space-x-8">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-4 py-2 text-white font-semibold hover:bg-white hover:text-purple-500 transition-colors duration-300 rounded-full shadow-md"
                  >
                    {item.name}
                  </button>
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
        </nav>
      </Container>
    </header>
  );
}

export default Header;
