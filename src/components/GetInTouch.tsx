"use client";
import React from "react";

const GetInTouch: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen premium-gradient-2 py-20 flex items-center section-container">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center content-reveal">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 title-glow">
              Let&apos;s Build Something Great
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Have a project in mind or an opportunity to discuss? I&apos;m always open to new collaborations. Reach out, and let&apos;s start a conversation.
            </p>
            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-semibold text-blue-400 mb-2">
                dev.warreng@gmail.com
              </p>
            </div>
            <a
              href="mailto:dev.warreng@gmail.com?subject=Project Collaboration Inquiry&body=Hi Warren,%0D%0A%0D%0AI'd like to discuss a potential project collaboration.%0D%0A%0D%0AProject Details:%0D%0A%0D%0ABest time to connect:%0D%0A%0D%0AThank you!"
              className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 border-2 border-blue-600 rounded-xl neon-border-hover transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-600/50 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.001 8.001 0 01-7.158-4.375c-.185-.32-.185-.709 0-1.029A8.001 8.001 0 0113 4c4.418 0 8 3.582 8 8z" />
              </svg>
              Start Conversation
            </a>
          </div>
          {/* Right Column - Decorative SVG */}
          <div className="flex justify-center lg:justify-end">
            <div className="contact-svg-container contact-svg-glow">
              <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-80 h-80 lg:w-96 lg:h-96">
                <defs>
                  <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <g className="contact-svg-network">
                  <line x1="200" y1="200" x2="120" y2="80" stroke="url(#connectionGradient)" strokeWidth="1" />
                  <line x1="200" y1="200" x2="280" y2="80" stroke="url(#connectionGradient)" strokeWidth="1" />
                  <line x1="200" y1="200" x2="320" y2="200" stroke="url(#connectionGradient)" strokeWidth="1" />
                  <line x1="200" y1="200" x2="280" y2="320" stroke="url(#connectionGradient)" strokeWidth="1" />
                  <line x1="200" y1="200" x2="120" y2="320" stroke="url(#connectionGradient)" strokeWidth="1" />
                  <line x1="200" y1="200" x2="80" y2="200" stroke="url(#connectionGradient)" strokeWidth="1" />
                  <line x1="120" y1="80" x2="280" y2="80" stroke="url(#connectionGradient)" strokeWidth="0.8" />
                  <line x1="280" y1="80" x2="320" y2="200" stroke="url(#connectionGradient)" strokeWidth="0.8" />
                  <line x1="320" y1="200" x2="280" y2="320" stroke="url(#connectionGradient)" strokeWidth="0.8" />
                  <line x1="280" y1="320" x2="120" y2="320" stroke="url(#connectionGradient)" strokeWidth="0.8" />
                  <line x1="120" y1="320" x2="80" y2="200" stroke="url(#connectionGradient)" strokeWidth="0.8" />
                  <line x1="80" y1="200" x2="120" y2="80" stroke="url(#connectionGradient)" strokeWidth="0.8" />
                  <line x1="120" y1="80" x2="280" y2="320" stroke="url(#connectionGradient)" strokeWidth="0.5" opacity="0.5" />
                  <line x1="280" y1="80" x2="120" y2="320" stroke="url(#connectionGradient)" strokeWidth="0.5" opacity="0.5" />
                  <line x1="80" y1="200" x2="320" y2="200" stroke="url(#connectionGradient)" strokeWidth="0.5" opacity="0.5" />
                </g>
                {/* Central Hub */}
                <circle cx="200" cy="200" r="12" fill="url(#nodeGradient)" opacity="0.9" />
                {/* Outer Ring Nodes */}
                <circle cx="120" cy="80" r="8" fill="url(#nodeGradient)" opacity="0.8" />
                <circle cx="280" cy="80" r="8" fill="url(#nodeGradient)" opacity="0.8" />
                <circle cx="320" cy="200" r="8" fill="url(#nodeGradient)" opacity="0.8" />
                <circle cx="280" cy="320" r="8" fill="url(#nodeGradient)" opacity="0.8" />
                <circle cx="120" cy="320" r="8" fill="url(#nodeGradient)" opacity="0.8" />
                <circle cx="80" cy="200" r="8" fill="url(#nodeGradient)" opacity="0.8" />
                {/* Additional Satellite Nodes */}
                <circle cx="160" cy="40" r="4" fill="#06b6d4" opacity="0.7" />
                <circle cx="240" cy="40" r="4" fill="#8b5cf6" opacity="0.7" />
                <circle cx="360" cy="160" r="4" fill="#3b82f6" opacity="0.7" />
                <circle cx="360" cy="240" r="4" fill="#06b6d4" opacity="0.7" />
                <circle cx="240" cy="360" r="4" fill="#8b5cf6" opacity="0.7" />
                <circle cx="160" cy="360" r="4" fill="#3b82f6" opacity="0.7" />
                <circle cx="40" cy="240" r="4" fill="#06b6d4" opacity="0.7" />
                <circle cx="40" cy="160" r="4" fill="#8b5cf6" opacity="0.7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
