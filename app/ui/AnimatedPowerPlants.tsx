'use client';

import { useEffect, useRef } from 'react';
import PowerPlantsMap from '@/public/rggi-power-plants-bright.svg';

export default function AnimatedPowerPlants() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dots = containerRef.current?.querySelectorAll<SVGPathElement>(
      '#rggi-power-plants-bright_svg__power-plants path'
    );
    dots?.forEach((dot) => {
      const duration = 3 + Math.random() * 2; // 3–5s
      dot.style.animationDuration = `${duration}s`;
      // Negative delay starts each dot mid-cycle at a random phase.
      dot.style.animationDelay = `${-Math.random() * duration}s`;
    });
  }, []);

  return (
    <div className="animated-power-plants" ref={containerRef}>
      <PowerPlantsMap />
    </div>
  );
}
