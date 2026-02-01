import "./Actions.css";

interface ActionsProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Actions({ theme, toggleTheme }: ActionsProps) {
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span>{theme === "light" ? "🌙" : "🌞"}</span>
    </button>
  );
}
