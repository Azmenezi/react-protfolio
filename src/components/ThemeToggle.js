import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Assuming you're using FontAwesome React component
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"; // Import the relevant icons
import ColorContext from "../context/ColorContext";

function ThemeToggle() {
  const [darkTheme, setDarkTheme] = useContext(ColorContext);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <FontAwesomeIcon
        icon={faSun}
        className={`absolute ml-2 h-10 text-xl transition-colors duration-200 ${
          darkTheme ? "text-[#d5d5d5]" : "text-[#303030]"
        }`}
      />
      <div
        onClick={() => setDarkTheme((prev) => !prev)}
        className="mx-3 ml-[29px] relative inline-block w-11 align-middle select-none transition duration-200 ease-in"
      >
        <input type="checkbox" checked={darkTheme} className="hidden" />
        <label className="block w-12 h-6 mt-2 ml-6 bg-[#303030] dark:bg-[#d5d5d5] rounded-full cursor-pointer"></label>
        <span
          className={`block absolute bottom-[2px] ml-7 w-5 h-5 bg-[#d5d5d5] dark:bg-[#303030] rounded-full shadow transition-transform duration-200 transform ${
            darkTheme ? "translate-x-5" : ""
          }`}
        ></span>
      </div>
      <FontAwesomeIcon
        icon={faMoon}
        className={`absolute h-10  text-x ml-6 transition-colors duration-200 ${
          darkTheme ? "text-[#d5d5d5]" : "text-[#303030]"
        }`}
      />
    </div>
  );
}

export default ThemeToggle;
