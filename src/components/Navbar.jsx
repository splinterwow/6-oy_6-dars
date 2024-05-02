import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

function themeFormLocalStorage() {
  return localStorage.getItem("theme") || themes.winter;
}

function Navbar() {
  const [currentTheme, setCurrentTheme] = useState(themeFormLocalStorage());
  const [isDarkMode, setIsDarkMode] = useState(currentTheme === themes.dracula);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const handleMode = () => {
    setCurrentTheme((prev) => {
      return prev === themes.winter ? themes.dracula : themes.winter;
    });
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="bg-base-300 py-6 mb-10">
      <div className="navbar align-content">
        <div className="navbar-start">
          <Link to="/" className="btn btn-secondary hidden lg:flex">
            MyMarket
          </Link>
          <div className="dropdown lg:hidden btn-secondary">
            <div tabIndex={0} role="button" className="btn m-1">
              MyMarket
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLinks />
        </div>
        <div className="navbar-end flex gap-5 items-center">
          <label className="swap swap-rotate">
            <input type="checkbox" checked={isDarkMode} onChange={handleMode} />
            <FaSun
              className={`swap-on fill-current w-6 h-6 ${isDarkMode ? "" : ""}`}
            />
            <FaMoon
              className={`swap-off fill-current w-6 h-6 ${
                isDarkMode ? "" : ""
              }`}
            />
          </label>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
