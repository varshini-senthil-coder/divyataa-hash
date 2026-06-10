import { useEffect, useRef, useState } from 'react';

interface FlowerSymbolProps {
  size?: number;
  opacity?: number;
  rotation?: number;
  scale?: number;
  glow?: number;
  x?: number;
  y?: number;
  animationDelay?: number;
}

const FlowerSymbol = ({
  size = 200,
  opacity = 0.3,
  rotation = 0,
  scale = 1,
  glow = 0,
  x = 50,
  y = 50,
  animationDelay = 0
}: FlowerSymbolProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [animationDelay]);

  // Generate Flower of Life SVG path
  const generateFlowerPath = () => {
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.15;
    
    const circles = [];
    
    // Center circle
    circles.push({ x: centerX, y: centerY });
    
    // First ring (6 circles)
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      circles.push({
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
      });
    }
    
    // Second ring (12 circles)
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI) / 6;
      const distance = radius * Math.sqrt(3);
      circles.push({
        x: centerX + distance * Math.cos(angle),
        y: centerY + distance * Math.sin(angle)
      });
    }
    
    return circles;
  };

  const circles = generateFlowerPath();

  return (
    <div
      ref={ref}
      className="absolute pointer-events-none transition-all duration-1000 ease-out"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
        opacity: isVisible ? opacity : 0,
        filter: glow > 0 ? `drop-shadow(0 0 ${glow}px hsl(var(--primary)))` : 'none'
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transition-all duration-300"
      >
        <defs>
          <radialGradient id={`flowerGradient-${x}-${y}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        
        {circles.map((circle, index) => (
          <circle
            key={index}
            cx={circle.x}
            cy={circle.y}
            r={size * 0.15}
            fill="none"
            stroke={`url(#flowerGradient-${x}-${y})`}
            strokeWidth="1.5"
            className="animate-fade-in"
            style={{
              animationDelay: `${index * 50}ms`
            }}
          />
        ))}
        
        {/* Center dot */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r="2"
          fill="hsl(var(--primary))"
          opacity="0.8"
          className="animate-glow"
        />
      </svg>
    </div>
  );
};

export default FlowerSymbol;