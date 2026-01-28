
import React from 'react';
import { Home, Plus, User, Search, Bell } from 'lucide-react';
import { Screen } from '../types';

interface NavigationProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeScreen, onNavigate }) => {
  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[min(480px,90%)] bg-white/90 backdrop-blur-xl rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] py-4 px-10 flex items-center justify-between z-50 border border-white/50">
      <button 
        onClick={() => onNavigate(Screen.FEED)}
        className={`p-2.5 rounded-full transition-all duration-300 ${activeScreen === Screen.FEED ? 'bg-[#312019] text-white scale-110 shadow-lg shadow-[#312019]/20' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
      >
        <Home className="w-6 h-6" />
      </button>
      
      <button className="p-2.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all">
        <Search className="w-6 h-6" />
      </button>

      <button className="bg-[#312019] text-white p-3 rounded-full shadow-lg shadow-[#312019]/30 active:scale-90 transition-all hover:scale-105">
        <Plus className="w-6 h-6" />
      </button>
      
      <button className="p-2.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all">
        <Bell className="w-6 h-6" />
      </button>

      <button 
        onClick={() => onNavigate(Screen.PROFILE)}
        className={`p-2.5 rounded-full transition-all duration-300 ${activeScreen === Screen.PROFILE ? 'bg-[#312019] text-white scale-110 shadow-lg shadow-[#312019]/20' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
      >
        <User className="w-6 h-6" />
      </button>
    </nav>
  );
};

export default Navigation;
