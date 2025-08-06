export default function MySkillset() {
  return (
    <section id="skills" className="min-h-screen premium-gradient-2 py-20 section-container">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 content-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 title-glow">My Skillset</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6 pulse-glow"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">A comprehensive showcase of technical expertise and professional competencies.</p>
        </div>
        
        {/* Part 1: Technical Proficiencies */}
        <div className="mb-20 content-reveal">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">Technical Proficiencies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* JavaScript (ES6+) */}
            <div className="competency-card enhanced-card premium-card p-8 rounded-2xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E"/>
                    <path d="M7.5 14.5c0 1 .5 1.5 1.5 1.5s1.5-.5 1.5-1.5v-5h2v5c0 2-1 3-3 3s-3-1-3-3h2zm7-3h2c0 1 0 2 1 2s1-1 1-2-1-1-2-1-2 0-2-1 1-1 2-1 2 0 2 1h-2c0-1 0-2-1-2s-1 1-1 2 1 1 2 1 2 0 2 1-1 1-2 1-2 0-2-1z" fill="#000"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">JavaScript (ES6+)</h4>
                <p className="text-gray-300 leading-relaxed">The core language of the web, enabling dynamic and interactive user experiences.</p>
              </div>
            </div>
            
            {/* React & Next.js */}
            <div className="competency-card enhanced-card premium-card p-8 rounded-2xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#61DAFB"/>
                    <circle cx="12" cy="12" r="2" fill="#000"/>
                    <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#000" strokeWidth="1" fill="none"/>
                    <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#000" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
                    <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#000" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">React & Next.js</h4>
                <p className="text-gray-300 leading-relaxed">Building modern, high-performance, and scalable front-end applications.</p>
              </div>
            </div>
            
            {/* Node.js & Express */}
            <div className="competency-card enhanced-card premium-card p-8 rounded-2xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#68A063"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#68A063" strokeWidth="2" fill="none"/>
                    <path d="M12 7v10" stroke="#68A063" strokeWidth="1"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Node.js & Express</h4>
                <p className="text-gray-300 leading-relaxed">Developing fast and efficient back-end services and APIs.</p>
              </div>
            </div>
            
            {/* Databases */}
            <div className="competency-card enhanced-card premium-card p-8 rounded-2xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none">
                    <ellipse cx="12" cy="6" rx="8" ry="2" fill="#10B981"/>
                    <ellipse cx="12" cy="12" rx="8" ry="2" fill="#10B981"/>
                    <ellipse cx="12" cy="18" rx="8" ry="2" fill="#10B981"/>
                    <path d="M4 6v12c0 1.1 3.6 2 8 2s8-.9 8-2V6" stroke="#065F46" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Databases</h4>
                <p className="text-gray-300 leading-relaxed">Proficient with both SQL and NoSQL (MongoDB) for robust data management.</p>
              </div>
            </div>
            
            {/* UI/UX Design & Prototyping */}
            <div className="competency-card enhanced-card premium-card p-8 rounded-2xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="12" rx="2" fill="#8B5CF6"/>
                    <circle cx="8" cy="10" r="2" fill="#FFF"/>
                    <path d="M12 8l4 4-4 4" stroke="#FFF" strokeWidth="2" fill="none"/>
                    <path d="M3 20h18" stroke="#8B5CF6" strokeWidth="2"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">UI/UX Design & Prototyping</h4>
                <p className="text-gray-300 leading-relaxed">Crafting intuitive user interfaces and experiences, from wireframe to final design.</p>
              </div>
            </div>
            
            {/* API Integration */}
            <div className="competency-card enhanced-card premium-card p-8 rounded-2xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-500/30 transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-rose-500/25">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                    <circle cx="7" cy="12" r="3" fill="#F43F5E"/>
                    <circle cx="17" cy="12" r="3" fill="#F43F5E"/>
                    <path d="M10 12h4" stroke="#F43F5E" strokeWidth="3"/>
                    <path d="M7 9V7a5 5 0 0110 0v2M7 15v2a5 5 0 0010 0v-2" stroke="#BE185D" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">API Integration</h4>
                <p className="text-gray-300 leading-relaxed">Connecting applications with third-party services using REST & GraphQL APIs.</p>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Part 2: Professional & Creative Competencies */}
        <div className="content-reveal">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">Professional & Creative Competencies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Leadership & Team Management */}
            <div className="competency-card enhanced-card premium-card p-8 rounded-2xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="3" fill="#3B82F6"/>
                    <circle cx="8" cy="14" r="2" fill="#60A5FA"/>
                    <circle cx="16" cy="14" r="2" fill="#60A5FA"/>
                    <circle cx="12" cy="18" r="2" fill="#60A5FA"/>
                    <path d="M8 14l4-4m0 0l4 4M12 10v8" stroke="#1E40AF" strokeWidth="2"/>
                    <path d="M6 12h2m8 0h2" stroke="#1E40AF" strokeWidth="2"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Leadership & Team Management</h4>
                <p className="text-gray-300 leading-relaxed">Guiding multicultural teams to achieve creative and technical goals.</p>
              </div>
            </div>
            
            {/* Creative Direction */}
            <div className="competency-card enhanced-card premium-card p-8 rounded-2xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="6" width="16" height="10" rx="2" fill="#8B5CF6"/>
                    <circle cx="8" cy="11" r="2" fill="#FFF"/>
                    <path d="M12 9l4 2-4 2V9z" fill="#FFF"/>
                    <rect x="3" y="17" width="18" height="2" rx="1" fill="#A855F7"/>
                    <path d="M6 4l6 2 6-2v2l-6 2-6-2V4z" fill="#C084FC"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Creative Direction</h4>
                <p className="text-gray-300 leading-relaxed">Translating high-level concepts into impactful user experiences.</p>
              </div>
            </div>
            
            {/* Strategic Planning */}
            <div className="competency-card enhanced-card premium-card p-8 rounded-2xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="12" rx="2" fill="#059669"/>
                    <path d="M6 6h12v6H6V6z" fill="#10B981"/>
                    <circle cx="8" cy="9" r="1.5" fill="#FFF"/>
                    <circle cx="12" cy="9" r="1.5" fill="#FFF"/>
                    <circle cx="16" cy="9" r="1.5" fill="#FFF"/>
                    <path d="M3 16h18v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z" fill="#047857"/>
                    <path d="M9 18l3-1 3 1" stroke="#10B981" strokeWidth="2"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Strategic Planning</h4>
                <p className="text-gray-300 leading-relaxed">Applying analytical thinking from chess and project management to solve complex problems.</p>
              </div>
            </div>
            
            {/* Client Communication */}
            <div className="competency-card enhanced-card premium-card p-8 rounded-2xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none">
                    <ellipse cx="12" cy="12" rx="10" ry="6" fill="#F59E0B"/>
                    <path d="M2 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4zm16 0c0-2-2-4-4-4s-4 2-4 4 2 4 4 4 4-2 4-4z" fill="#FBBF24"/>
                    <circle cx="12" cy="12" r="3" fill="#F97316"/>
                    <path d="M9 10h6M9 14h6" stroke="#FFF" strokeWidth="1"/>
                    <circle cx="12" cy="12" r="1" fill="#FFF"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Client Communication</h4>
                <p className="text-gray-300 leading-relaxed">Interfacing with stakeholders to ensure project alignment, from initial quotes to final reports.</p>
              </div>
            </div>
            
            {/* Public Speaking & Engagement */}
            <div className="competency-card enhanced-card premium-card p-8 rounded-2xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none">
                    <ellipse cx="12" cy="15" rx="6" ry="3" fill="#DC2626"/>
                    <rect x="11" y="8" width="2" height="7" fill="#B91C1C"/>
                    <circle cx="12" cy="8" r="2" fill="#991B1B"/>
                    <path d="M6 15c0-1 2-2 6-2s6 1 6 2v2c0 1-2 2-6 2s-6-1-6-2v-2z" fill="#EF4444"/>
                    <path d="M8 13l2-1M16 13l-2-1" stroke="#DC2626" strokeWidth="2"/>
                    <circle cx="12" cy="6" r="1" fill="#FEF2F2"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Public Speaking & Engagement</h4>
                <p className="text-gray-300 leading-relaxed">Confidently presenting ideas and engaging diverse audiences, from boardrooms to large-scale shows.</p>
              </div>
            </div>
            
            {/* Agile Problem-Solving */}
            <div className="competency-card enhanced-card premium-card p-8 rounded-2xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-28 h-28 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" fill="#FBBF24"/>
                    <path d="M12 6l2 6-6-2 6-2 2 6" stroke="#F59E0B" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="3" fill="#F97316"/>
                    <path d="M9 9l6 6M15 9l-6 6" stroke="#FFF" strokeWidth="1"/>
                    <circle cx="12" cy="12" r="1" fill="#FFF"/>
                    <path d="M4 4l4 4M20 4l-4 4M4 20l4-4M20 20l-4-4" stroke="#FBBF24" strokeWidth="1"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Agile Problem-Solving</h4>
                <p className="text-gray-300 leading-relaxed">Adapting and finding innovative ways to complete projects, whether in construction or code.</p>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
