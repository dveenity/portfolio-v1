import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div onClick={toggleDarkMode} className="dark-mode-toggle">
      {isDarkMode ? (
        <FaMoon style={{ color: "brown" }} />
      ) : (
        <FaSun style={{ color: "rgb(110, 110, 255)" }} />
      )}
    </div>
  );
};

export default DarkMode;
