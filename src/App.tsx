import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body.tsx";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content">
        <Body />
      </main>
    </>
  );
}
