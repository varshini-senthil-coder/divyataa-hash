import heroImg from '../assets/hero-children-B1qFxMJF.jpg';

const RootLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black font-sans text-white">
      {/* Background Image - Shared across pages for this specific design */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="School kids background" 
          className="h-full w-full object-cover scale-[0.75] object-center"
          style={{ transformOrigin: 'center center' }}
        />
        {/* Gradients and Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-black/10" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 h-64 w-full bg-gradient-to-t from-black/40 to-transparent backdrop-blur-[2px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Decorative Bottom Vignette */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-black/80 to-transparent" />
    </div>
  );
};

export default RootLayout;
