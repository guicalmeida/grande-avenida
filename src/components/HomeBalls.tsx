'use client'

import useMobileCheck from "@/hooks/useMobileCheck";
import FloatingBall from "./FloatingBall";

export default function HomeBalls() {
  const isMobile = useMobileCheck();

  if (typeof isMobile != undefined && !isMobile) {
    return (
      <>
        <FloatingBall initialX={503} initialY={1184} />
        <FloatingBall initialX={1240} initialY={1152} />
        <FloatingBall initialX={150} initialY={1392} />
        <FloatingBall initialX={693} initialY={1608} />
        <FloatingBall initialX={306} initialY={1733} />
        <FloatingBall initialX={1100} initialY={1828} />
      </>
    );
  }
}
