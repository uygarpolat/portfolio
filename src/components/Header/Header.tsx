import { useState } from "react";
import Brand from "./Brand";
import Navbar from "./Navbar";
import Actions from "./Actions";
import Sandwich from "./Sandwich.tsx";
import Modal from "./Modal.tsx";
import "./Header.css";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header>
      <Brand />
      <Navbar />
      <Actions theme={theme} toggleTheme={toggleTheme} />
      <Sandwich
        onClick={() => setIsMenuOpen((prev) => !prev)}
      />
      {isMenuOpen && <Modal />}
    </header>
  );
}
