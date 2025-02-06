import { Link, NavLink } from "react-router-dom";
import useScrollDirection from "../../hooks/ScrollDirection/useScrollDirection";
import ThemeToggle from "../Shared/ThemeToggle/ThemeToggle";
import logo from '../../assets/logo.png'

const Navbar = () => {
  const isVisible = useScrollDirection();

  // const links = (
  //   <>
  //     <li>
  //       <NavLink to="/" className="text-light-text dark:text-dark-text">
  //         Home
  //       </NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/about" className="text-light-text dark:text-dark-text">
  //         About
  //       </NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/portfolio" className="text-light-text dark:text-dark-text">
  //         Portfolio
  //       </NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/contact" className="text-light-text dark:text-dark-text">
  //         Contact Me
  //       </NavLink>
  //     </li>
  //   </>
  // );

  const links = (
    <>
      {[
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/skills", label: "Skills" },
        { to: "/portfolio", label: "Projects" },
        { to: "/contact", label: "Contact Me" },
      ].map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              `ml-4 btn btn-sm bg-gradient-to-r from-light-accent to-dark-accent dark:from-dark-accent dark:to-light-accent rounded-md border border-light-border dark:border-dark-border shadow-sm text-white dark:text-dark-text transition ${
                isActive
                  ? "scale-105 shadow-md ring-2 ring-light-accent dark:ring-dark-accent"
                  : "hover:scale-105 hover:shadow-md"
              }`
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </>
  );
  

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar border-b dark:border-dark-border border-light-border container mx-auto bg-light-background dark:bg-dark-background">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-light-background dark:bg-dark-background rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <Link
              to="/"
              className=""
            >
              <img src={logo} className="w-1/5" alt="Md Abdul Kyum" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <ThemeToggle />
          <button
            className="btn btn-sm bg-gradient-to-r from-light-accent to-dark-accent dark:from-dark-accent dark:to-light-accent rounded-md border border-light-border dark:border-dark-border shadow-sm text-light-text dark:text-dark-text font-bold"
          >
            <a href="https://wa.me/+8801754462008" target="_blank">Hire</a>

          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
