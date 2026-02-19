import { useState, useRef } from "react";
import "./ImageSlider.css";

interface ImageSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export default function ImageSlider({
  beforeImage,
  afterImage,
  alt,
}: ImageSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const keyboardStep = 5;

  const setClampedPosition = (position: number) => {
    const newPos = position;
    setSliderPosition(Math.min(100, Math.max(0, newPos)));
  };

  const calculatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    setClampedPosition(((clientX - left) / width) * 100);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "ArrowLeft":
      case "ArrowDown":
        e.preventDefault();
        setClampedPosition(sliderPosition - keyboardStep);
        break;
      case "ArrowRight":
      case "ArrowUp":
        e.preventDefault();
        setClampedPosition(sliderPosition + keyboardStep);
        break;
      case "Home":
        e.preventDefault();
        setClampedPosition(0);
        break;
      case "End":
        e.preventDefault();
        setClampedPosition(100);
        break;
      case "PageDown":
        e.preventDefault();
        setClampedPosition(sliderPosition - keyboardStep * 2);
        break;
      case "PageUp":
        e.preventDefault();
        setClampedPosition(sliderPosition + keyboardStep * 2);
        break;
      default:
        break;
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    calculatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      calculatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      className="image-slider-container"
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ cursor: isDragging ? "grabbing" : "col-resize" }}
    >
      <img
        src={beforeImage}
        alt={`${alt} - Before`}
        className="slider-image before"
        draggable={false}
      />

      <div
        className="slider-image-overlay"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt={`${alt} - After`}
          className="slider-image after"
          draggable={false}
        />
      </div>

      <div
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
        role="slider"
        tabIndex={0}
        aria-label={`${alt} comparison slider`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuetext={`${Math.round(sliderPosition)} percent revealed`}
        onKeyDown={handleKeyDown}
      >
        <div className="slider-line" />
        <div className="slider-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: "rotate(180deg)" }}
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
