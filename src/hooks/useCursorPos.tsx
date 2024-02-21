import { useEffect, useState } from "react";

export default function useCursorPos(startTracking = false) {
  const [cursorPos, setCursorPos] = useState<{
    cursorXPos?: number;
    cursorYPos?: number;
  }>({ cursorXPos: undefined, cursorYPos: undefined });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setCursorPos({
        cursorXPos: e.pageX,
        cursorYPos: e.pageY,
      });
    }
    if (startTracking) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
  console.count("retornou");

  return cursorPos;
}
