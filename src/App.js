import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import UserContext from "./context/UserContext";
import ColorContext from "./context/ColorContext";
import { checkToken } from "./api/auth/storage";

function App() {
  const [user, setUser] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    setUser(checkToken());
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkTheme]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <ColorContext.Provider value={[darkTheme, setDarkTheme]}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ColorContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
