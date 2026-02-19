import type { RefObject } from "react";
import "./Sandwich.css";

interface SandwichProps {
  onClick: () => void;
  expanded: boolean;
  controls: string;
  buttonRef: RefObject<HTMLButtonElement | null>;
}

export default function Sandwich({
  onClick,
  expanded,
  controls,
  buttonRef,
}: SandwichProps) {
  return (
    <button
      id="sandwich"
      type="button"
      onClick={onClick}
      ref={buttonRef}
      aria-label={expanded ? "Close menu" : "Open menu"}
      aria-expanded={expanded}
      aria-controls={controls}
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
