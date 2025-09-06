"use client";

import { useFontSize } from "../hooks/useFontSize";

export default function FontSizeSlider() {
  const {
    fontSize,
    minimum,
    maximum,
    setFontSize: setCssFontSize,
  } = useFontSize();

  const onChange = (newValue: number) => {
    setCssFontSize(newValue);
  };

  return (
    <div className="flex w-[196px] items-start pt-2">
      <input
        type="range"
        min={minimum}
        max={maximum}
        step={1}
        value={fontSize}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-[2px] w-full cursor-pointer appearance-none rounded-lg bg-black [&::-webkit-slider-thumb]:h-[var(--font-size)] [&::-webkit-slider-thumb]:w-[var(--font-size)] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:shadow"
      />
    </div>
  );
}
