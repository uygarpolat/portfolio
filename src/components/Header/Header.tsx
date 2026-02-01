import { useState } from "react";
import Brand from "./Brand";
import Navbar from "./Navbar";
import Actions from "./Actions";
import Sandwich from "./Sandwich";
import "./Header.css";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <Brand />
      <Navbar id="navbar-big-screen"/>
      <Actions theme={theme} toggleTheme={toggleTheme} />
      <Sandwich isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}
