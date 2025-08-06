export default function AboutMe() {
  return (
    <section id="about" className="min-h-screen premium-gradient-2 py-20 section-container text-center">
      
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 content-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 title-glow">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6 pulse-glow"></div>
        </div>
        
        {/* Three Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 content-reveal justify-items-center">
          
          {/* Card 1: Technical Project Management */}
          <div className="premium-card enhanced-card p-8 lg:p-12 rounded-2xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="12" rx="2" fill="#1E40AF" stroke="#3B82F6" strokeWidth="1"/>
                <rect x="5" y="6" width="4" height="2" fill="#60A5FA"/>
                <rect x="10" y="6" width="4" height="2" fill="#60A5FA"/>
                <rect x="15" y="6" width="2" height="2" fill="#60A5FA"/>
                <rect x="5" y="9" width="3" height="1.5" fill="#93C5FD"/>
                <rect x="9" y="9" width="3" height="1.5" fill="#93C5FD"/>
                <rect x="13" y="9" width="4" height="1.5" fill="#93C5FD"/>
                <rect x="5" y="11.5" width="2" height="1.5" fill="#DBEAFE"/>
                <rect x="8" y="11.5" width="4" height="1.5" fill="#DBEAFE"/>
                <circle cx="19" cy="6" r="1" fill="#F59E0B"/>
                <path d="M21 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2M7 20h10" stroke="#3B82F6" strokeWidth="1"/>
              </svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Technical Project Management</h3>
            <p className="text-gray-300 lg:text-lg leading-relaxed">
              I began my career in the high-stakes environment of electrical engineering and project management, honing my skills in planning complex projects and managing technical teams from start to finish.
            </p>
          </div>
          
          {/* Card 2: Creative Direction & Leadership */}
          <div className="premium-card enhanced-card p-8 lg:p-12 rounded-2xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8" fill="#7C3AED" stroke="#A855F7" strokeWidth="1"/>
                <path d="M8 12h8M12 8v8" stroke="#E4E7EB" strokeWidth="2"/>
                <circle cx="8" cy="8" r="2" fill="#F59E0B"/>
                <circle cx="16" cy="8" r="2" fill="#10B981"/>
                <circle cx="8" cy="16" r="2" fill="#EF4444"/>
                <circle cx="16" cy="16" r="2" fill="#3B82F6"/>
                <path d="M10 10l4 4M14 10l-4 4" stroke="#FFFFFF" strokeWidth="1" opacity="0.5"/>
                <circle cx="12" cy="12" r="1.5" fill="#FFFFFF"/>
              </svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Creative Direction & Leadership</h3>
            <p className="text-gray-300 lg:text-lg leading-relaxed">
              My journey includes a unique five-year chapter performing internationally. I grew into leadership roles as a Team Leader and Artistic Director, where I guided creative teams to deliver high-impact user experiences.
            </p>
          </div>
          
          {/* Card 3: Strategic Development */}
          <div className="premium-card enhanced-card p-8 lg:p-12 rounded-2xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="18" rx="2" fill="#065F46" stroke="#10B981" strokeWidth="1"/>
                <path d="M6 8l3 3 6-6" stroke="#34D399" strokeWidth="2" fill="none"/>
                <rect x="4" y="13" width="2" height="6" fill="#34D399"/>
                <rect x="7" y="15" width="2" height="4" fill="#6EE7B7"/>
                <rect x="10" y="11" width="2" height="8" fill="#10B981"/>
                <rect x="13" y="14" width="2" height="5" fill="#6EE7B7"/>
                <rect x="16" y="12" width="2" height="7" fill="#34D399"/>
                <circle cx="18" cy="7" r="1" fill="#F59E0B"/>
                <path d="M4 21h16" stroke="#10B981" strokeWidth="1"/>
              </svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Strategic Development</h3>
            <p className="text-gray-300 lg:text-lg leading-relaxed">
              As a dedicated developer and a strategic chess coach, I bring a unique perspective to every project, combining rigorous technical architecture with a deep understanding of what captivates an audience.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
