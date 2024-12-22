import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://glowfurniturefactory.com/wp-content/uploads/2023/05/Innovative-Uses-for-LED-Glow-Furniture-in-Music-Festival-VIP-Lounges.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 animate-gradient-x"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-float">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="text-gradient">
              Illuminate Your
              <br />
              Next Event
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Transform your space with Sydney's premier LED furniture collection
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
          <button className="group relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full overflow-hidden shadow-[0_0_25px_rgba(219,39,119,0.5)] hover:shadow-[0_0_35px_rgba(219,39,119,0.7)] transition-all duration-500">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              Explore Collection
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          <button className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-full hover:border-white/40 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-500 group">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Book Now
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}