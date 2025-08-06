export default function MyJourney() {
  return (
    <section id="journey" className="min-h-screen premium-gradient-2 py-20 section-container">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 content-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 title-glow">My Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full pulse-glow"></div>
        </div>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-purple-600 h-full hidden lg:block timeline-glow"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            
            {/* Event 1 - Freelance Web & App Developer (Right) */}
            <div className="relative flex items-center lg:justify-end content-reveal">
              {/* Mobile line */}
              <div className="absolute left-8 top-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 h-full lg:hidden timeline-glow"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900 z-10 hidden lg:block pulse-glow"></div>
              <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900 z-10 lg:hidden pulse-glow"></div>
              
              {/* Content card */}
              <div className="enhanced-card bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-blue-600 transition-all duration-300 hover:shadow-xl ml-16 lg:ml-0 lg:mr-8 lg:w-5/12 relative timeline-card-right">
                {/* Pointer for desktop */}
                <div className="hidden lg:block absolute left-full top-6 w-0 h-0 border-l-[15px] border-l-gray-800 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
                
                <div className="text-sm text-blue-400 font-medium mb-2">2013 - Present</div>
                <h3 className="text-xl font-bold text-white mb-2">Freelance Web & App Developer</h3>
                <p className="text-gray-300 leading-relaxed">For over a decade, I have been passionately coding and building digital solutions. I have completed numerous freelance projects, helping clients launch professional websites and custom mobile applications.</p>
              </div>
            </div>
            
            {/* Event 2 - Artistic Director & Lead Performer (Left) */}
            <div className="relative flex items-center content-reveal">
              {/* Mobile line */}
              <div className="absolute left-8 top-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 h-full lg:hidden timeline-glow"></div>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900 z-10 hidden lg:block pulse-glow"></div>
              <div className="absolute left-8 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900 z-10 lg:hidden pulse-glow"></div>
              
              {/* Content card */}
              <div className="enhanced-card bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-blue-600 transition-all duration-300 hover:shadow-xl ml-16 lg:ml-8 lg:w-5/12 relative timeline-card-left">
                {/* Pointer for desktop */}
                <div className="hidden lg:block absolute right-full top-6 w-0 h-0 border-r-[15px] border-r-gray-800 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
                
                <div className="text-sm text-purple-400 font-medium mb-2">2024 - 2025</div>
                <h3 className="text-xl font-bold text-white mb-2">Artistic Director & Lead Performer</h3>
                <p className="text-gray-300 leading-relaxed">Led creative direction and managed entertainment teams for an international company in Greece, overseeing all aspects of nightly shows and guest experiences.</p>
              </div>
            </div>
            
            {/* Event 3 - Team Leader & Entertainer (Right) */}
            <div className="relative flex items-center lg:justify-end content-reveal">
              {/* Mobile line */}
              <div className="absolute left-8 top-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 h-full lg:hidden timeline-glow"></div>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900 z-10 hidden lg:block pulse-glow"></div>
              <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900 z-10 lg:hidden pulse-glow"></div>
              
              {/* Content card */}
              <div className="enhanced-card bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-blue-600 transition-all duration-300 hover:shadow-xl ml-16 lg:ml-0 lg:mr-8 lg:w-5/12 relative timeline-card-right">
                {/* Pointer for desktop */}
                <div className="hidden lg:block absolute left-full top-6 w-0 h-0 border-l-[15px] border-l-gray-800 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
                
                <div className="text-sm text-blue-400 font-medium mb-2">2022 - 2023</div>
                <h3 className="text-xl font-bold text-white mb-2">Team Leader & Entertainer</h3>
                <p className="text-gray-300 leading-relaxed">Managed a team of animators while performing as a headline singer for two summer seasons in Europe. Responsible for organizing interactive activities and leading evening shows for guests of all ages.</p>
              </div>
            </div>
            
            {/* Event 4 - Professional Chess Coach (Left) */}
            <div className="relative flex items-center content-reveal">
              {/* Mobile line */}
              <div className="absolute left-8 top-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 h-full lg:hidden timeline-glow"></div>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900 z-10 hidden lg:block pulse-glow"></div>
              <div className="absolute left-8 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900 z-10 lg:hidden pulse-glow"></div>
              
              {/* Content card */}
              <div className="enhanced-card bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-blue-600 transition-all duration-300 hover:shadow-xl ml-16 lg:ml-8 lg:w-5/12 relative timeline-card-left">
                {/* Pointer for desktop */}
                <div className="hidden lg:block absolute right-full top-6 w-0 h-0 border-r-[15px] border-r-gray-800 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
                
                <div className="text-sm text-purple-400 font-medium mb-2">2015 - 2022</div>
                <h3 className="text-xl font-bold text-white mb-2">Professional Chess Coach</h3>
                <p className="text-gray-300 leading-relaxed">For seven years, I coached chess students of all levels, from preparing teams for tournaments in South Africa to providing high-quality online lessons for students in the UK and America.</p>
              </div>
            </div>
            
            {/* Event 5 - Technical Project Manager (Right) */}
            <div className="relative flex items-center lg:justify-end content-reveal">
              {/* Mobile line */}
              <div className="absolute left-8 top-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 h-full lg:hidden timeline-glow"></div>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900 z-10 hidden lg:block pulse-glow"></div>
              <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900 z-10 lg:hidden pulse-glow"></div>
              
              {/* Content card */}
              <div className="enhanced-card bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-blue-600 transition-all duration-300 hover:shadow-xl ml-16 lg:ml-0 lg:mr-8 lg:w-5/12 relative timeline-card-right">
                {/* Pointer for desktop */}
                <div className="hidden lg:block absolute left-full top-6 w-0 h-0 border-l-[15px] border-l-gray-800 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
                
                <div className="text-sm text-blue-400 font-medium mb-2">2018 - 2019</div>
                <h3 className="text-xl font-bold text-white mb-2">Technical Project Manager</h3>
                <p className="text-gray-300 leading-relaxed">Managed multiple complex projects simultaneously at the Koeberg Nuclear Power Station. Responsibilities included project planning, client communications, and providing electrical training to staff.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
