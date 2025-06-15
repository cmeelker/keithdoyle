import { useEffect, useState } from "react";

export function useCssVar(varName: string) {
  const [value, setValue] = useState(() =>
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement).getPropertyValue(varName)
      : "",
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new MutationObserver(() =>
      setValue(
        getComputedStyle(document.documentElement).getPropertyValue(varName),
      ),
    );

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    // Initial update
    setValue(
      getComputedStyle(document.documentElement).getPropertyValue(varName),
    );

    return () => observer.disconnect();
  }, [varName]);

  return value;
}
