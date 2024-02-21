"use client";

import { useEffect, useRef, useState } from "react";
import green_ball from "../../public/green_ball.svg";
import Image from "next/image";
import useCursorPos from "@/hooks/useCursorPos";

export default function FloatingBall({
  initialX,
  initialY,
}: {
  initialX: number;
  initialY: number;
}) {
  const [startTracking, setTracking] = useState(false);
  const [docHeight, setDocHeight] = useState(0);
  const { cursorXPos, cursorYPos } = useCursorPos(startTracking);

  const ballRef = useRef<HTMLImageElement>(null);

  if (ballRef?.current && cursorXPos && cursorYPos) {
    ballRef.current.style.left = `${cursorXPos - 79}px`;
    ballRef.current.style.top = `${cursorYPos - 79}px`;
  }

  useEffect(() => {
    setDocHeight(document.body.clientHeight);

    if (ballRef?.current) {
      ballRef.current.style.left = `${initialX - 70}px`;
      ballRef.current.style.top = `${initialY - 70}px`;
    }
  }, [initialX, initialY]);

  return (
    <div
      style={{ height: docHeight }}
      className={`top-0 left-0 absolute pointer-events-none w-screen z-[1000]`}
      onMouseUp={() => {
        setTracking(false);
      }}
      aria-hidden
    >
      <Image
        ref={ballRef}
        src={green_ball}
        alt="circulo verde"
        draggable={false}
        className="absolute w-[140px] h-[140px] pointer-events-auto"
        onMouseDown={() => {
          setTracking(true);
        }}
        aria-hidden
      />
    </div>
  );
}
