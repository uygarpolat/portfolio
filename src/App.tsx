import { useEffect, useState } from "react";
import Header from "./components/Header/Header";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
