import "./Navbar.css";

const navItems = ["home", "projects", "about", "contact"];

export default function Navbar() {
  return (
    <nav className="nav-items">
      <ul className="nav-items-list">
        {navItems.map((item) => (
          <li key={item}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
