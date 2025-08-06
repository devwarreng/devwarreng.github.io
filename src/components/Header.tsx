'use client';

import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 premium-header backdrop-blur-lg border-b border-blue-500/20 shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(15, 23, 42, 0.85) 100%)'
      }}
    >
      {/* Premium glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/3 via-purple-600/3 to-cyan-600/3 animate-pulse"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 py-1">
        <nav className="flex justify-between items-center">
          {/* Premium Logo/Name */}
          <div className="text-xl font-bold text-white flex items-center group">
            <div className="relative flex items-center bg-gradient-to-r from-black/95 via-gray-900/90 to-black/95 border-2 border-blue-400/60 rounded-full px-4 py-2 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-blue-300/80 hover:shadow-blue-500/30" 
                 style={{boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(139, 92, 246, 0.1)'}}>
              {/* Animated background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Logo text */}
              <span className="relative text-transparent bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text font-extrabold text-xl tracking-wider">WG</span>
              {/* Glowing dots */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500 shadow-lg shadow-purple-400/50"></div>
            </div>
          </div>
          
          {/* Premium Navigation Menu */}
          <ul className="hidden md:flex space-x-2">
            <li>
              <a href="#about" className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group overflow-hidden rounded-lg">
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
            </li>
            <li>
              <a href="#skills" className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group overflow-hidden rounded-lg">
                <span className="relative z-10">Skills</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
            </li>
            <li>
              <a href="#journey" className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group overflow-hidden rounded-lg">
                <span className="relative z-10">Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
            </li>
            <li>
              <a href="#chess-corner" className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group overflow-hidden rounded-lg">
                <span className="relative z-10">Chess Corner</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
            </li>
            <li>
              <a href="#services" className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group overflow-hidden rounded-lg">
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
            </li>
            <li>
              <a href="#contact" className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group overflow-hidden rounded-lg">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
            </li>
          </ul>
          
          {/* Premium Mobile Menu Button */}
          <button 
            className="md:hidden relative p-3 text-gray-300 hover:text-white transition-all duration-300 group rounded-lg bg-gradient-to-r from-black/80 to-purple-950/60 border border-blue-500/30 hover:border-blue-400/60 shadow-lg hover:shadow-blue-500/20" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="relative w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>
        
        {/* Premium Mobile Menu */}
        <div className={`md:hidden mt-4 pb-4 transition-all duration-500 ease-in-out transform ${isMobileMenuOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-4'}`}>
          <div className="bg-gradient-to-br from-black/95 to-purple-950/85 backdrop-blur-lg rounded-xl border border-blue-500/20 shadow-2xl p-4" style={{boxShadow: '0 0 40px rgba(59, 130, 246, 0.15)'}}>
            <ul className="space-y-2">
              <li>
                <a href="#about" onClick={closeMobileMenu} className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-950/40 hover:to-black/50 rounded-lg transition-all duration-300 group">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    About
                  </span>
                </a>
              </li>
              <li>
                <a href="#skills" onClick={closeMobileMenu} className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-950/40 hover:to-black/50 rounded-lg transition-all duration-300 group">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Skills
                  </span>
                </a>
              </li>
              <li>
                <a href="#journey" onClick={closeMobileMenu} className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-950/40 hover:to-black/50 rounded-lg transition-all duration-300 group">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Journey
                  </span>
                </a>
              </li>
              <li>
                <a href="#chess-corner" onClick={closeMobileMenu} className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-950/40 hover:to-black/50 rounded-lg transition-all duration-300 group">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Chess Corner
                  </span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={closeMobileMenu} className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-950/40 hover:to-black/50 rounded-lg transition-all duration-300 group">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Services
                  </span>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMobileMenu} className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-950/40 hover:to-black/50 rounded-lg transition-all duration-300 group">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
