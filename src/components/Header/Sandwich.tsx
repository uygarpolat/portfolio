interface SandwichProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}
export default function Sandwich({ isMenuOpen, setIsMenuOpen }: SandwichProps) {
  return (
    <button
      id="navbar-small-screen"
      className="menu-toggle"
      type="button"
      aria-controls="mobile-menu"
      aria-expanded={isMenuOpen}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      ☰
    </button>
  );
}
