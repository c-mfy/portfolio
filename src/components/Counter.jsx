import { useEffect, useState } from "react";

export default function Counter({ value, onIncrement, label }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [isPopping, setIsPopping] = useState(false);

  useEffect(() => {
    setDisplayValue(value);
    setIsPopping(true);

    const timer = window.setTimeout(() => setIsPopping(false), 180);
    return () => window.clearTimeout(timer);
  }, [value]);

  return (
    <button
      className="interest-counter"
      onClick={onIncrement}
      aria-label={`Add interest for ${label}`}
      type="button"
    >
      <span className="counter-label">interested</span>
      <span className={`counter-value ${isPopping ? "pop" : ""}`}>{displayValue}</span>
    </button>
  );
}
