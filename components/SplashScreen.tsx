
import React from 'react';
import { Screen } from '../types';

interface SplashScreenProps {
  onStart: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onStart }) => {
  // Grid pattern for the splash screen
  const gridItems = [
    { type: 'color', color: '#312019' },
    { type: 'color', color: '#e5e1dc' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=400' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=400' },
    { type: 'color', color: '#e5e1dc' },
    { type: 'color', color: '#312019' },
    { type: 'color', color: '#e5e1dc' },
    { type: 'color', color: '#312019' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=400' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=80&w=400' },
    { type: 'color', color: '#e5e1dc' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=400' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=400' },
    { type: 'color', color: '#312019' },
  ];

  return (
    <div className="h-full w-full bg-[#f9f7f4] flex flex-col items-center overflow-hidden relative">
      {/* Top Section: Logo and Tagline */}
      <div className="text-center z-20 pt-16 md:pt-24 px-6 animate-fade-in-up shrink-0">
        <div className="flex items-center justify-center gap-3 mb-4">
          <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse md:w-16 md:h-16">
            <path d="M20 0C20 11.0457 11.0457 20 0 20C11.0457 20 20 28.9543 20 40C20 28.9543 28.9543 20 40 20C28.9543 20 20 11.0457 20 0Z" fill="#312019"/>
          </svg>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-[#312019]">Glimpse</h1>
        </div>
        <p className="text-xs md:text-base tracking-[0.4em] font-bold text-[#312019] opacity-70 uppercase">
          Your Story in Every Snap
        </p>
      </div>

      {/* Middle Section: Animated Grid Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-3 md:gap-4 rotate-12 scale-110 md:scale-100 opacity-60">
          {gridItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`w-20 h-32 md:w-32 md:h-48 rounded-full overflow-hidden shadow-xl transition-all duration-700`}
              style={{ backgroundColor: item.type === 'color' ? item.color : 'transparent' }}
            >
              {item.type === 'image' && (
                <img src={item.url} alt="" className="w-full h-full object-cover" />
              )}
            </div>
          ))}
          {[...Array(20)].map((_, i) => (
             <div key={`extra-${i}`} className="w-20 h-32 md:w-32 md:h-48 rounded-full bg-[#e5e1dc] opacity-30" />
          ))}
        </div>
      </div>

      {/* Bottom Section: Action Button */}
      <div className="mt-auto w-full max-w-lg z-30 p-8 md:pb-16 bg-gradient-to-t from-[#f9f7f4] via-[#f9f7f4]/80 to-transparent">
        <button 
          onClick={onStart}
          className="w-full py-5 md:py-6 bg-[#312019] text-white rounded-full text-lg md:text-xl font-bold tracking-widest shadow-[0_15px_30px_rgba(49,32,25,0.3)] hover:bg-[#4a3126] active:scale-[0.98] transition-all transform hover:-translate-y-1"
        >
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
