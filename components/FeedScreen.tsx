
import React from 'react';
import { MoreHorizontal, Heart, MessageCircle, Send, Bookmark, Plus } from 'lucide-react';
import { MOCK_POSTS, MOCK_STORIES } from '../constants.tsx';

const FeedScreen: React.FC = () => {
  return (
    <div className="h-full bg-white flex flex-col overflow-hidden">
      <header className="w-full border-b border-gray-50 sticky top-0 bg-white/80 backdrop-blur-md z-30">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0C20 11.0457 11.0457 20 0 20C11.0457 20 20 28.9543 20 40C20 28.9543 28.9543 20 40 20C28.9543 20 20 11.0457 20 0Z" fill="#312019"/>
            </svg>
            <h1 className="text-xl font-bold tracking-tight text-[#312019]">Glimpse</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-[#312019] transition-colors">
              <Plus className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-[#312019] transition-colors">
              <MessageCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex-grow overflow-y-auto hide-scrollbar pb-32">
        <div className="max-w-4xl mx-auto w-full">
          <div className="px-4 py-8 flex gap-6 overflow-x-auto hide-scrollbar shrink-0">
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="relative">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-100 p-0.5 group-hover:scale-105 transition-transform">
                  <img src="https://picsum.photos/id/101/100/100" className="w-full h-full rounded-full object-cover" alt="Me" />
                </div>
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5 shadow-sm">
                  <div className="bg-[#312019] rounded-full p-1">
                    <Plus className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-500 font-medium">My Story</span>
            </div>
            {MOCK_STORIES.map(story => (
              <div key={story.id} className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full p-[2px] transition-transform group-hover:scale-105 ${story.hasUnread ? 'bg-gradient-to-tr from-[#312019] to-[#8a6e63]' : 'border border-gray-200'}`}>
                  <div className="w-full h-full rounded-full bg-white p-0.5">
                    <img src={story.avatar} className="w-full h-full rounded-full object-cover" alt={story.user} />
                  </div>
                </div>
                <span className="text-xs text-gray-500 font-medium">{story.user}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-4">
            {MOCK_POSTS.map(post => (
              <div key={post.id} className="flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={post.user.avatar} className="w-10 h-10 rounded-full object-cover border border-gray-100" alt={post.user.name} />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">{post.user.name}</h4>
                      {post.user.location && (
                        <div className="flex items-center gap-1">
                          <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/></svg>
                          <span className="text-[10px] text-gray-400">{post.user.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 p-2">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-4 relative group shadow-lg border border-gray-50">
                  <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Post" />
                  <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-4 bg-white/20 backdrop-blur-md rounded-full px-5 py-2.5 text-white">
                      <button className="flex items-center gap-1.5 hover:scale-110 transition-transform">
                        <Heart className="w-5 h-5" />
                        <span className="text-sm font-medium">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 hover:scale-110 transition-transform">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-1.5 hover:scale-110 transition-transform">
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                    <button className="bg-white/20 backdrop-blur-md rounded-full p-2.5 text-white hover:scale-110 transition-transform">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <p className="text-sm px-2">
                  <span className="font-bold mr-2 text-gray-900">@{post.user.handle}</span>
                  <span className="text-gray-700">{post.caption}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedScreen;
