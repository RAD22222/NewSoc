
import React, { useState } from 'react';
import { Screen } from './types.ts';
import SplashScreen from './components/SplashScreen.tsx';
import FeedScreen from './components/FeedScreen.tsx';
import ProfileScreen from './components/ProfileScreen.tsx';
import Navigation from './components/Navigation.tsx';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.SPLASH);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.SPLASH:
        return <SplashScreen onStart={() => setCurrentScreen(Screen.FEED)} />;
      case Screen.FEED:
        return <FeedScreen />;
      case Screen.PROFILE:
        return <ProfileScreen onBack={() => setCurrentScreen(Screen.FEED)} />;
      default:
        return <SplashScreen onStart={() => setCurrentScreen(Screen.FEED)} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center">
      <main className="w-full h-screen relative overflow-hidden transition-all duration-500 ease-in-out">
        <div className="h-full relative">
          {renderScreen()}
          
          {currentScreen !== Screen.SPLASH && (
            <Navigation 
              activeScreen={currentScreen} 
              onNavigate={(s) => setCurrentScreen(s)} 
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
