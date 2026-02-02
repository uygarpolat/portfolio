import "./Sandwich.css";

interface SandwichProps {
  onClick: () => void;
}

export default function Sandwich({ onClick }: SandwichProps) {
  return (
    <button
      id="sandwich"
      type="button"
      onClick={onClick}
      aria-label="Open menu"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6H20M4 12H20M4 18H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
