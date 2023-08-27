import React, { useContext } from "react";
import ColorContext from "../context/ColorContext";
import ThemeToggle from "../components/ThemeToggle";

function Home() {
  const [darkTheme, setDarkTheme] = useContext(ColorContext);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="text-3xl text-[#303030] dark:text-[#d5d5d5]">
        Welcome to my portfolio
      </div>

      <ThemeToggle />
    </div>
  );
}

export default Home;
