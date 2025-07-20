import { useRef, useState } from "react";

export function DotTooltip({ children }: { children: React.ReactNode }) {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  return (
    <span
      ref={tooltipRef}
      className="relative inline-block"
      onMouseMove={(e) => {
        const rect = tooltipRef.current?.getBoundingClientRect();
        if (rect) {
          setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }
      }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          className="pointer-events-none absolute z-10 rounded-full bg-black"
          style={{
            width: "var(--font-size)",
            height: "var(--font-size)",
            left: pos.x,
            top: pos.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </span>
  );
}
