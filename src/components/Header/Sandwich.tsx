import './Sandwich.css';

interface SandwichProps {
  onClick: () => void;
}
export default function Sandwich({ onClick }: SandwichProps) {
  return (
    <button id="sandwich" type="button" onClick={onClick}>
      ☰
    </button>
  );
}
