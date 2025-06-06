"use client";

import { useState } from "react";

export default function FontSizeSlider() {
  const [value, setValue] = useState(18);

  const onChange = (newValue: number) => {
    setValue(newValue);
    document.documentElement.style.setProperty("--font-size", `${newValue}px`);
  };

  return (
    <div className="w-[196px] flex items-start pt-2">
      <input
        type="range"
        min={18}
        max={72}
        step={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-[1px] bg-black rounded-lg appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:h-[10px]
                   [&::-webkit-slider-thumb]:w-[42px]
                   [&::-webkit-slider-thumb]:rounded-sm
                   [&::-webkit-slider-thumb]:bg-black
                   [&::-webkit-slider-thumb]:shadow"
      />
    </div>
  );
}
