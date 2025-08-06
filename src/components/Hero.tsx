import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden premium-gradient-2 hero-container pt-20 sm:pt-16 md:pt-12 lg:pt-8">
      
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* Left Column - Profile Picture */}
          <div className="text-center order-2 lg:order-1">
            <div className="relative inline-block">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative mx-auto">
                {/* Main Profile Picture */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-600/50 shadow-2xl relative z-20 profile-picture-container">
                    <Image 
                      src="/images/profile.jpg" 
                      alt="Warren G - Full-Stack Developer" 
                      width={384}
                      height={384}
                      className="w-full h-full object-cover profile-picture"
                      priority
                      quality={85}
                      sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  />
                </div>
                
                {/* Animated Orbit Rings */}
                <div className="absolute inset-0 animate-spin z-30" style={{animationDuration: '20s'}}>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
                </div>
                <div className="absolute inset-0 animate-spin z-30" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
                  <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Text */}
          <div className="text-center lg:text-left order-1 lg:order-2 hero-text-container px-4 sm:px-0">
            {/* Main Heading */}
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-0 sm:mb-2 leading-tight -mt-8 sm:-mt-4">
              ~ Warren G ~
            </h1>
            {/* Sub-heading - single line under name with spacing */}
            <h2 className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6 sm:mb-8 leading-none bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap mt-4 sm:mt-6">
              Full-Stack Developer & Digital Architect
            </h2>
            {/* Description Paragraph - joined sentences */}
            <p className="hero-description text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0">
              With over 10 years of experience, I transform complex problems and creative concepts into beautiful, high-performance web and mobile applications that are not only powerful but also intuitive and engaging for the end-user.
            </p>
            
            {/* Call-to-Action Button */}
            <div className="flex justify-center lg:justify-start mb-6 sm:mb-0">
              <a href="#services" 
                 className="hero-cta inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 border-2 border-blue-600 rounded-full neon-border-hover transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-600/50 hover:shadow-2xl hover:shadow-blue-500/25">
                <span>View My Work</span>
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
            
            {/* Floating Stats/Badges */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start">
              <div className="tech-badge px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-blue-300 font-medium floating-animation">
                ⚡ Creative Solutions
              </div>
              <div className="tech-badge px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-purple-300 font-medium floating-animation" style={{animationDelay: '0.5s'}}>
                🎯 Clean Code
              </div>
              <div className="tech-badge px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-cyan-300 font-medium floating-animation" style={{animationDelay: '1s'}}>
                🤝 User-Focused
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
