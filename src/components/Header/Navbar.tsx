import "./Navbar.css";

const navItems = ["home", "projects", "about", "contact"];

export default function Navbar({...props}) {
  return (
    <nav {...props}>
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
