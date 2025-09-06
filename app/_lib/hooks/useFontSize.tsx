import { useEffect, useState } from "react";

const cssVarName = "--font-size";
const minimum = 18;
const maximum = 72;
const step = 0.75;

export function useFontSize() {
  const [fontSize, setFontSizeState] = useState(30); // Set intitial value to prevent flash on load

  function syncFontSizeFromCssVar() {
    setFontSizeState(
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(cssVarName),
      ),
    );
  }

  // To prevent endless loops, always set new font size in CSS.
  // The observer will pick up the change and update the state.
  function setFontSizeCss(size: number) {
    document.documentElement.style.setProperty(cssVarName, `${size}px`);
  }

  // Watch for changes to the CSS variable
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new MutationObserver(() => syncFontSizeFromCssVar());

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  const increase = () => setFontSizeCss(Math.min(fontSize + step, maximum));
  const decrease = () => setFontSizeCss(Math.max(fontSize - step, minimum));

  return {
    fontSize,
    minimum,
    maximum,
    setFontSize: setFontSizeCss,
    increase,
    decrease,
  };
}
