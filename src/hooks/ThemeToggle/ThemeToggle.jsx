import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Retrieve saved theme from localStorage or default to "light"
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Apply the theme to the `html` element
    document.documentElement.setAttribute("data-theme", theme);
    // Save the selected theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between "light" and "night"
    setTheme((prevTheme) => (prevTheme === "light" ? "night" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-primary text-white rounded"
    >
      {theme === "light" ? "Switch to Night Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ThemeToggle;
