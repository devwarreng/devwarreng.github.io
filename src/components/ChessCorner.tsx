import Image from 'next/image';

export default function ChessCorner() {
  return (
    <section id="chess-corner" className="min-h-screen premium-gradient-2 py-20 section-container">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Part 1: Main Heading and Introduction */}
        <div className="text-center mb-8 md:mb-12 content-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 title-glow">G&apos;s Chess Corner</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6 pulse-glow"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Applying the strategic discipline of a FIDE Rated Player to help you master the game. I offer fun and effective coaching for all levels, focusing on the skills that bring lasting success.
          </p>
        </div>

        {/* Featured Image Section */}
        <div className="mb-8 md:mb-12 content-reveal -mx-6 md:-mx-6 lg:-mx-6">
          <div className="w-full px-2 md:px-0">
            <Image src="/images/zoom-lesson.jpg"
                 alt="Online Chess Lesson via Zoom" 
                 width={1200}
                 height={400}
                 className="w-full h-64 md:h-80 lg:h-96 object-contain md:object-cover"
                 quality={80}
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                 loading="eager"
            />
          </div>
        </div>
        
        {/* Part 2: Core Principles */}
        <div className="mb-20 content-reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Strategy Card */}
            <div className="premium-card enhanced-card rounded-xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group overflow-hidden">
              <Image src="/images/strategic-thinking.jpg" alt="Strategic Thinking" width={400} height={320} className="w-full h-[20rem] object-cover rounded-t-xl" quality={75} loading="lazy" />
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">Strategic Thinking</h4>
                <p className="text-gray-400 text-sm">Learn to think ahead, solve complex problems, and make smarter decisions.</p>
              </div>
            </div>
            
            {/* Growth Card */}
            <div className="premium-card enhanced-card rounded-xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group overflow-hidden">
              <Image src="/images/personalized-growth.png" alt="Personalized Growth" width={400} height={320} className="w-full h-[20rem] object-cover rounded-t-xl" quality={75} loading="lazy" />
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">Personalized Growth</h4>
                <p className="text-gray-400 text-sm">Custom-tailored lessons and study plans designed to meet your specific goals.</p>
              </div>
            </div>
            
            {/* Trophy Card */}
            <div className="premium-card enhanced-card rounded-xl text-center hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group overflow-hidden">
              <Image src="/images/competition-ready.jpg" alt="Competition Ready" width={400} height={320} className="w-full h-[20rem] object-cover rounded-t-xl" quality={75} loading="lazy" />
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">Competition Ready</h4>
                <p className="text-gray-400 text-sm">Sharpen your tactics and build a strong repertoire to perform under pressure.</p>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Part 3: Main Service Offerings */}
        <div className="mb-20 content-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 1-on-1 Coaching */}
            <div className="service-card floating-animation rounded-2xl text-center group relative overflow-hidden">
              <Image src="/images/one-on-one-coaching.jpg" alt="1-on-1 Coaching" width={400} height={320} className="w-full h-[20rem] object-cover object-center rounded-t-xl" quality={75} loading="lazy" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Personalized 1-on-1 Coaching</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                For players of all levels seeking personalized attention, from beginners building a strong foundation to advanced players diving into deep strategy.
              </p>
              
              {/* Interactive Focus Areas - Now permanently visible */}
              <div className="tech-stack opacity-100 transition-all duration-500 transform translate-y-0 mb-4">
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="px-3 py-1 bg-blue-600/20 rounded-lg border border-blue-600/30 text-blue-300 text-sm">
                    Opening Theory
                  </div>
                  <div className="px-3 py-1 bg-blue-600/20 rounded-lg border border-blue-600/30 text-blue-300 text-sm">
                    Middlegame Strategy
                  </div>
                  <div className="px-3 py-1 bg-blue-600/20 rounded-lg border border-blue-600/30 text-blue-300 text-sm">
                    Endgame Technique
                  </div>
                </div>
              </div>
              </div>
            </div>
            
            {/* Group Programs */}
            <div className="service-card floating-animation rounded-2xl text-center group relative overflow-hidden">
              <Image src="/images/group-programs.jpg" alt="Group Programs" width={400} height={320} className="w-full h-[20rem] object-cover object-center rounded-t-xl" quality={75} loading="lazy" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Group & School Programs</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Engaging and affordable sessions designed for schools, clubs, or friends who enjoy learning in a collaborative, social environment.
              </p>
              
              {/* Interactive Focus Areas - Now permanently visible */}
              <div className="tech-stack opacity-100 transition-all duration-500 transform translate-y-0 mb-4">
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="px-3 py-1 bg-green-600/20 rounded-lg border border-green-600/30 text-green-300 text-sm">
                    Team Building
                  </div>
                  <div className="px-3 py-1 bg-green-600/20 rounded-lg border border-green-600/30 text-green-300 text-sm">
                    Group Analysis
                  </div>
                  <div className="px-3 py-1 bg-green-600/20 rounded-lg border border-green-600/30 text-green-300 text-sm">
                    Fun-Based Learning
                  </div>
                </div>
              </div>
              </div>
            </div>
            
            {/* Game Analysis */}
            <div className="service-card floating-animation rounded-2xl text-center group relative overflow-hidden">
              <Image src="/images/game-analysis.jpg" alt="Game Analysis" width={400} height={320} className="w-full h-[20rem] object-cover object-center rounded-t-xl" quality={75} loading="lazy" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Game Analysis & Intensives</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Focused sessions to analyze your games, break through plateaus, or master a specific area of your play.
              </p>
              
              {/* Interactive Focus Areas - Now permanently visible */}
              <div className="tech-stack opacity-100 transition-all duration-500 transform translate-y-0 mb-4">
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="px-3 py-1 bg-purple-600/20 rounded-lg border border-purple-600/30 text-purple-300 text-sm">
                    Mistake-Spotting
                  </div>
                  <div className="px-3 py-1 bg-purple-600/20 rounded-lg border border-purple-600/30 text-purple-300 text-sm">
                    Tournament Prep
                  </div>
                  <div className="px-3 py-1 bg-purple-600/20 rounded-lg border border-purple-600/30 text-purple-300 text-sm">
                    Skill Bootcamps
                  </div>
                </div>
              </div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Part 4: Call to Action (CTA) */}
        <div className="content-reveal">
          <div className="premium-card enhanced-card bg-gradient-to-r from-blue-600/30 to-purple-600/30 p-8 rounded-2xl text-center border border-blue-600/50 hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Improve Your Game?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re a complete beginner or an experienced player looking to break through to the next level, I&apos;m here to help you achieve your chess goals with personalized coaching tailored to your needs.
            </p>
            <a href="mailto:gchesscorner@gmail.com?subject=Chess Coaching Consultation Request&body=Hi,%0D%0A%0D%0AI'm interested in chess coaching and would like to book a consultation session.%0D%0A%0D%0AMy current chess level: %0D%0AMy goals: %0D%0APreferred session time: %0D%0A%0D%0AThank you!" 
               className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 border-2 border-blue-600 rounded-xl neon-border-hover transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-600/50 hover:shadow-2xl hover:shadow-blue-500/25 whitespace-nowrap">
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Book Chess Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
