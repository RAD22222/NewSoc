
import React from 'react';
import { ChevronLeft, Grid, Square, Calendar, Bookmark, Link as LinkIcon, Settings, Heart, MessageCircle } from 'lucide-react';
import { PROFILE_DATA } from '../constants.tsx';
import { Screen } from '../types.ts';

interface ProfileScreenProps {
  onBack: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onBack }) => {
  return (
    <div className="h-full bg-white flex flex-col overflow-y-auto hide-scrollbar pb-32">
      <div className="w-full sticky top-0 bg-white/80 backdrop-blur-lg z-20 border-b border-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-400 hover:text-[#312019] transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4">
             <button className="p-2 text-gray-400 hover:text-gray-600">
              <Settings className="w-5 h-5" />
            </button>
            <button className="bg-[#312019] text-white px-8 py-2 rounded-full text-sm font-semibold hover:bg-[#4a3126] transition-all shadow-sm active:scale-95">
              Follow
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full px-6 pt-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#f9f7f4] shadow-xl p-1">
            <img src={PROFILE_DATA.avatar} alt={PROFILE_DATA.name} className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 justify-center md:justify-start">
              <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">{PROFILE_DATA.name}</h2>
              <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-500 inline-block w-fit mx-auto md:mx-0">
                {PROFILE_DATA.handle}
              </span>
            </div>
            <p className="text-base text-gray-600 mb-4 leading-relaxed max-w-xl mx-auto md:mx-0">
              {PROFILE_DATA.bio}
            </p>
            <a href="#" className="flex items-center justify-center md:justify-start gap-2 text-sm text-blue-500 font-semibold mb-8 hover:underline w-fit mx-auto md:mx-0">
              <LinkIcon className="w-4 h-4" />
              <span>{PROFILE_DATA.link}</span>
            </a>
            <div className="flex justify-center md:justify-start gap-12 border-t border-gray-50 pt-8">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-xl font-bold text-gray-900">{PROFILE_DATA.followers}</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Followers</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-xl font-bold text-gray-900">{PROFILE_DATA.following}</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Following</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-xl font-bold text-gray-900">{PROFILE_DATA.postsCount}</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Posts</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-12 py-6 border-y border-gray-50 mb-8 overflow-x-auto hide-scrollbar">
          <button className="flex items-center gap-2 text-[#312019] border-b-2 border-[#312019] pb-6 -mb-6 transition-all">
            <Grid className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Feed</span>
          </button>
          <button className="flex items-center gap-2 text-gray-300 hover:text-gray-500 transition-all">
            <Square className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Reels</span>
          </button>
          <button className="flex items-center gap-2 text-gray-300 hover:text-gray-500 transition-all">
            <Calendar className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Events</span>
          </button>
          <button className="flex items-center gap-2 text-gray-300 hover:text-gray-500 transition-all">
            <Bookmark className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Saved</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {PROFILE_DATA.posts.concat(PROFILE_DATA.posts).map((url, idx) => (
            <div key={idx} className={`rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-md group cursor-pointer relative ${idx % 3 === 0 ? 'aspect-[4/5]' : 'aspect-square'}`}>
              <img 
                src={url} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={`Work ${idx}`} 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="flex gap-6 text-white font-bold">
                    <span className="flex items-center gap-2"><Heart className="w-5 h-5 fill-current" /> 124</span>
                    <span className="flex items-center gap-2"><MessageCircle className="w-5 h-5 fill-current" /> 18</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
