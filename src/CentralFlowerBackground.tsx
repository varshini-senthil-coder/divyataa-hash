
import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface CentralFlowerBackgroundProps {
  petalFadeDuration?: number;
  glowStrength?: number;
  strokeColor?: string;
  withSound?: boolean;
  sectionsRef?: React.RefObject<HTMLElement>;
}

interface Petal {
  id: number;
  cx: number;
  cy: number;
  r: number;
  isRevealed: boolean;
  animationDelay: number;
}

const CentralFlowerBackground = ({
  petalFadeDuration = 500,
  glowStrength = 8,
  strokeColor = '#C5A46D',
  withSound = true,
  sectionsRef
}: CentralFlowerBackgroundProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [completionTriggered, setCompletionTriggered] = useState(false);
  const [size, setSize] = useState(400);
  
  const animationFrameRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Initialize sound preference from localStorage
  useEffect(() => {
    if (withSound) {
      const savedPreference = localStorage.getItem('central-flower-sound-enabled');
      setSoundEnabled(savedPreference === 'true');
    }
  }, [withSound]);

  // Handle sound toggle
  const toggleSound = useCallback(() => {
    if (!withSound) return;
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    localStorage.setItem('central-flower-sound-enabled', newState.toString());
  }, [soundEnabled, withSound]);

  // Play completion sound
  const playCompletionSound = useCallback(() => {
    if (!soundEnabled || !withSound) return;
    
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const ctx = audioContextRef.current;
      if (!ctx) return;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.frequency.setValueAtTime(528, ctx.currentTime);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.5);
      
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 1.5);
    } catch (error) {
      console.log('Audio context not supported');
    }
  }, [soundEnabled, withSound]);

  // Generate Flower of Life petals - responsive to page width
  const petals = useMemo(() => {
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.08;
    
    const petalArray: Petal[] = [];
    
    // Center circle
    petalArray.push({
      id: 0,
      cx: centerX,
      cy: centerY,
      r: radius,
      isRevealed: false,
      animationDelay: 0
    });
    
    // First ring (6 circles)
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      petalArray.push({
        id: i + 1,
        cx: centerX + radius * Math.cos(angle),
        cy: centerY + radius * Math.sin(angle),
        r: radius,
        isRevealed: false,
        animationDelay: (i + 1) * 50
      });
    }
    
    // Second ring (12 circles)
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI) / 6;
      const distance = radius * Math.sqrt(3);
      petalArray.push({
        id: i + 7,
        cx: centerX + distance * Math.cos(angle),
        cy: centerY + distance * Math.sin(angle),
        r: radius,
        isRevealed: false,
        animationDelay: (i + 7) * 50
      });
    }
    
    return petalArray;
  }, [size]);

  // Calculate revealed petals based on scroll progress
  const revealedPetals = useMemo(() => {
    const totalPetals = petals.length;
    // Only start revealing when there's actual scroll progress
    const totalRevealed = scrollProgress > 0 ? Math.floor(scrollProgress * totalPetals) + 1 : 0;
    

    
    return petals.map((petal, index) => ({
      ...petal,
      isRevealed: index < totalRevealed
    }));
  }, [petals, scrollProgress]);

  // Check for completion
  useEffect(() => {
    const allRevealed = revealedPetals.every(petal => petal.isRevealed);
    if (allRevealed && revealedPetals.length > 0 && !completionTriggered) {
      setCompletionTriggered(true);
      playCompletionSound();
    } else if (!allRevealed && completionTriggered) {
      setCompletionTriggered(false);
    }
  }, [revealedPetals, completionTriggered, playCompletionSound]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionsRef?.current) {
        // Fallback to legacy calculation if no sectionsRef
        const bannerHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const scrollableHeight = document.documentElement.scrollHeight - bannerHeight - window.innerHeight;
        const progress = scrollableHeight > 0 
          ? Math.min(Math.max((scrollTop - bannerHeight * 0.5) / scrollableHeight, 0), 1) 
          : 0;
        setScrollProgress(progress);
        return;
      }

      const rect = sectionsRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the container has been scrolled through
      // containerTop < 0 means we've started scrolling into it
      // containerBottom < viewportHeight means we're reaching the end
      
      const totalHeight = rect.height;
      const amountScrolled = -rect.top + (viewportHeight * 0.5); // Add offset to start earlier
      
      // Progress from 0 to 1 as we move through the sections
      const progress = Math.min(Math.max(amountScrolled / totalHeight, 0), 1);
      
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionsRef]);

  // Calculate if the background should be visible and fade out near the footer
  const isAfterBanner = scrollProgress > 0;
  
  // New opacity logic: fade in at start, stay at 0.4, fade out at end (80% through 100%)
  const calculateOpacity = () => {
    if (scrollProgress <= 0) return 0;
    if (scrollProgress > 0.9) return Math.max(0, 0.4 * (1 - (scrollProgress - 0.9) * 10)); // Fade out in last 10%
    return Math.min(scrollProgress * 2, 0.4); // Fade in at start
  };
  
  const opacity = calculateOpacity();

  // Respect reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const showAllPetals = prefersReducedMotion;

  // Calculate size for SVG - make it responsive to screen size

  
  useEffect(() => {
    const updateSize = () => {
      const pageWidth = window.innerWidth;
      const pageHeight = window.innerHeight;
      // Responsive sizing: smaller on mobile, larger on desktop
      const newSize = pageWidth < 768 
        ? Math.min(pageWidth * 0.9, 450)
        : Math.min(pageWidth * 0.6, 800);
      setSize(newSize);
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const radius = size * 0.08;
  const circumference = 2 * Math.PI * radius;
  const glowOpacity = completionTriggered ? 0.8 : 0.4;

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-1000`}
      style={{ 
        zIndex: 0, 
        opacity: opacity,
        visibility: opacity > 0 ? 'visible' : 'hidden'
      }}
    >
      {/* Sound Toggle */}
      {withSound && (
        <div className="absolute top-6 right-6 pointer-events-auto" style={{ zIndex: 1001 }}>
          <button
            onClick={toggleSound}
            className="p-3 rounded-full glass-effect border border-border/50 hover:bg-accent/10 transition-colors"
            aria-label={soundEnabled ? 'Disable sound' : 'Enable sound'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-primary" />
            ) : (
              <VolumeX className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
        </div>
      )}

      {/* Central Flower of Life */}
      <div className="relative">
        {/* Radial glow aura */}
        <div
          className="absolute inset-0 rounded-full transition-opacity duration-1000"
          style={{
            background: `radial-gradient(circle, ${strokeColor}22 0%, transparent 70%)`,
            filter: `blur(${glowStrength}px)`,
            opacity: glowOpacity,
            transform: 'scale(1.5)',
          }}
        />
        
        {/* Completion glow pulse */}
        {completionTriggered && (
          <div
            className="absolute inset-0 rounded-full animate-ping"
            style={{
              background: `radial-gradient(circle, ${strokeColor}44 0%, transparent 50%)`,
              filter: `blur(${glowStrength * 2}px)`,
            }}
          />
        )}

        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="relative"
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {revealedPetals.map((petal, index) => {
            const isVisible = showAllPetals || petal.isRevealed;

            return (
              <circle
                key={petal.id}
                cx={petal.cx}
                cy={petal.cy}
                r={petal.r}
                fill="none"
                stroke={strokeColor}
                strokeWidth="2"
                filter="url(#glow)"
                opacity={isVisible ? 0.6 : 0}
                strokeDasharray={circumference}
                strokeDashoffset={isVisible ? 0 : circumference}
                className="transition-all duration-700 ease-out"
                style={{
                  transitionDelay: petal.isRevealed ? `${petal.animationDelay}ms` : '0ms',
                }}
              />
            );
          })}
          
          {/* Central dot - only show when scrolling starts */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r="3"
            fill={strokeColor}
            opacity={scrollProgress > 0 ? "0.9" : "0"}
            className={`transition-opacity duration-300 ${completionTriggered ? 'animate-pulse' : ''}`}
          />
        </svg>
      </div>
    </div>
  );
};

export default CentralFlowerBackground;
