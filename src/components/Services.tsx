"use client";
import React from "react";

const Services: React.FC = () => {
  return (
    <section id="services" className="min-h-screen premium-gradient-2 py-20 flex items-center section-container">
      <div className="w-full">
        <div className="mb-16 text-center content-reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">My Development Services</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I offer a range of premium development services, from full-stack web apps to mobile apps and interactive CV websites. Every project is custom-built with modern tech, beautiful design, and a focus on performance and user experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Web Applications */}
          <div className="service-card floating-animation p-8 rounded-2xl text-center group relative overflow-hidden">
            <div className="service-icon w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <svg className="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h18a1 1 0 011 1v12a1 1 0 01-1 1h-6.586l-2 2H6a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v10h14V5H4zm2 2h10v2H6V7zm0 3h10v2H6v-2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Web Applications</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Modern, scalable web apps with responsive design, authentication, real-time features, and seamless integrations. Built for performance and security.
            </p>
            {/* Tech Stack - Now permanently visible */}
            <div className="tech-stack opacity-100 transition-all duration-500 transform translate-y-0 mb-4">
              <div className="flex flex-wrap gap-1 justify-center max-w-xs mx-auto">
                {/* React Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#61DAFB">
                    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.85-1.87 1.85-1.87-.82-1.87-1.85.84-1.89 1.87-1.89M18.5 12c0-2.89-2.3-5.24-5.5-6.85C9.8 6.76 7.5 9.11 7.5 12s2.3 5.24 5.5 6.85c3.2-1.61 5.5-3.96 5.5-6.85z"/>
                  </svg>
                </div>
                {/* Next.js Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-.88 17.8V15.6h1.76v4.2c-1.89.36-3.78-.3-5.16-1.84a7.76 7.76 0 0 1-1.45-2.76v-1.04c0-4.15 3.37-7.52 7.52-7.52 3.67 0 6.74 2.64 7.4 6.12h-1.84c-.62-2.52-2.87-4.37-5.56-4.37-3.21 0-5.82 2.61-5.82 5.82v1.04c0 .92.22 1.8.6 2.57.95 1.94 2.97 3.18 5.28 3.18z"/>
                  </svg>
                </div>
                {/* Node.js Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#68A063">
                    <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z"/>
                  </svg>
                </div>
                {/* PHP Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#777BB4">
                    <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .982-.816.982-1.628.001-.793-.279-1.02-.361-1.02zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12s-5.373-6.312-12-6.312z"/>
                  </svg>
                </div>
                {/* MongoDB Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#47A248">
                    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218z"/>
                  </svg>
                </div>
                {/* AWS Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF9900">
                    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.072-.2.072-.08 0-.16-.04-.239-.112a2.417 2.417 0 01-.287-.375 6.197 6.197 0 01-.248-.471c-.622.734-1.405 1.101-2.35 1.101-.671 0-1.205-.191-1.596-.574-.391-.383-.591-.894-.591-1.533 0-.678.239-1.23.718-1.644.479-.415 1.117-.623 1.923-.623.264 0 .535.024.815.064.287.048.583.112.886.2v-.655c0-.678-.144-1.157-.423-1.438-.287-.287-.774-.431-1.451-.431-.312 0-.631.04-.95.112-.32.08-.632.183-.926.32-.144.063-.248.103-.32.119-.071.024-.127.032-.167.032-.144 0-.215-.104-.215-.32v-.506c0-.16.024-.28.08-.36.056-.08.16-.16.32-.231.312-.16.687-.295 1.117-.399.431-.112.886-.16 1.373-.16 1.05 0 1.819.239 2.334.718.511.479.774 1.205.774 2.182v2.861zm-3.266 1.222c.256 0 .527-.048.807-.144.287-.096.543-.271.758-.51.128-.144.224-.304.272-.486.047-.183.08-.399.08-.655v-.32a6.293 6.293 0 00-.72-.168 5.524 5.524 0 00-.784-.056c-.56 0-.966.112-1.237.335-.271.224-.407.543-.407.966 0 .391.096.686.296.886.191.2.479.296.935.296zm6.428.862c-.183 0-.31-.032-.374-.096-.072-.064-.134-.191-.198-.383l-2.182-7.18c-.064-.191-.096-.32-.096-.383 0-.151.08-.231.231-.231h.966c.191 0 .32.032.383.096.071.064.127.191.19.383l1.564 6.17 1.445-6.17c.056-.191.112-.32.183-.383.071-.064.207-.096.391-.096h.789c.191 0 .32.032.391.096.071.064.127.191.183.383l1.461 6.242 1.612-6.242c.064-.191.127-.32.191-.383.071-.064.191-.096.383-.096h.918c.151 0 .231.08.231.231 0 .048-.008.096-.024.151-.016.048-.04.127-.08.231l-2.245 7.18c-.064.191-.127.32-.191.383-.072.064-.2.096-.375.096h-.846c-.191 0-.32-.032-.391-.096-.071-.064-.127-.191-.183-.383l-1.429-5.958-1.405 5.958c-.056.191-.112.32-.183.383-.071.064-.2.096-.391.096h-.846zm10.651.111c-.815 0-1.596-.096-2.342-.287-.75-.191-1.294-.415-1.651-.67-.144-.096-.247-.2-.279-.296-.032-.096-.056-.2-.056-.32v-.527c0-.216.08-.32.231-.32.064 0 .127.016.191.048.072.032.18.08.32.144.559.287 1.133.51 1.724.67.598.16 1.18.24 1.756.24.934 0 1.644-.183 2.118-.55.479-.367.718-.886.718-1.565 0-.454-.118-.838-.351-1.133-.239-.295-.742-.559-1.51-.798l-2.182-.686c-1.1-.35-1.899-.862-2.389-1.535-.494-.678-.734-1.445-.734-2.294 0-.678.144-1.285.438-1.827.287-.535.686-.99 1.19-1.357.511-.367 1.117-.646 1.819-.83.702-.191 1.478-.287 2.326-.287.35 0 .718.024 1.085.08.375.048.726.119 1.069.2.335.08.646.183.918.287.279.111.487.223.631.335.096.08.167.167.207.271.048.096.08.215.08.351v.502c0 .216-.08.327-.231.327-.08 0-.207-.048-.384-.144-.622-.287-1.325-.431-2.118-.431-.85 0-1.518.144-1.98.431-.47.287-.703.734-.703 1.34 0 .454.127.83.383 1.133.255.296.703.551 1.35.767l2.134.670c1.086.343 1.86.822 2.326 1.446.47.623.703 1.357.703 2.198 0 .678-.127 1.31-.383 1.873-.263.567-.646 1.061-1.149 1.461-.51.407-1.109.718-1.803.934-.679.223-1.445.335-2.278.335z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Applications */}
          <div className="service-card floating-animation p-8 rounded-2xl text-center group relative overflow-hidden">
            <div className="service-icon w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <svg className="w-16 h-16 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                <circle cx="12" cy="16.5" r="1.5"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Mobile Applications</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Cross-platform mobile apps for iOS and Android with native performance, real-time features, offline capabilities, and seamless cloud integration.
            </p>
            {/* Tech Stack - Now permanently visible */}
            <div className="tech-stack opacity-100 transition-all duration-500 transform translate-y-0 mb-4">
              <div className="flex flex-wrap gap-3 justify-center">
                {/* React Native Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#61DAFB">
                    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.85-1.87 1.85-1.87-.82-1.87-1.85.84-1.89 1.87-1.89M18.5 12c0-2.89-2.3-5.24-5.5-6.85C9.8 6.76 7.5 9.11 7.5 12s2.3 5.24 5.5 6.85c3.2-1.61 5.5-3.96 5.5-6.85z"/>
                  </svg>
                </div>
                {/* Flutter Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#02569B">
                    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.663 13.314L8.361 6.7l14.339 14.339L20.923 24 8.4 11.477l6.577-6.577 8.639 8.639z"/>
                  </svg>
                </div>
                {/* Swift Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FA7343">
                    <path d="M7.508 0c-.287 0-.573 0-.86.002-.284.002-.568.01-.854.023C2.986.152.154 2.985.025 5.792a28.566 28.566 0 00-.023.854C.002 6.933 0 7.22 0 7.508v8.984c0 .287 0 .573.002.86.001.284.01.568.023.854.127 2.807 2.96 5.64 5.767 5.767.286.013.57.022.854.023.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.284-.001.568-.01.854-.023 2.807-.127 5.64-2.96 5.767-5.767.013-.286.022-.57.023-.854.002-.287.002-.573.002-.86V7.508c0-.287 0-.573-.002-.86a28.566 28.566 0 00-.023-.854C23.845 2.986 20.012.153 17.205.025a28.566 28.566 0 00-.854-.023C15.933.002 15.646 0 15.358 0H7.508z"/>
                  </svg>
                </div>
                {/* Kotlin Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#7F52FF">
                    <path d="M24 24H0V0h24L12 12 24 24z"/>
                  </svg>
                </div>
                {/* Firebase Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FFCA28">
                    <path d="M5.016 18.573l6.984-12.442 1.369 2.604-8.353 9.838zM3.624 21.602l11.445-16.805L17.984 8.77 20.376 21.6 12 24 3.624 21.602z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Premium CV Websites */}
          <div className="service-card floating-animation p-8 rounded-2xl text-center group relative overflow-hidden">
            <div className="service-icon w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <svg className="w-16 h-16 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                <path d="M8 12h8v2H8zm0 4h8v2H8z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Premium CV Websites</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Interactive CV websites with animations, portfolios, and contact forms. Choose from modern templates or get a completely custom design.
            </p>
            {/* Tech Stack - Now permanently visible */}
            <div className="tech-stack opacity-100 transition-all duration-500 transform translate-y-0 mb-4">
              <div className="flex flex-wrap gap-3 justify-center">
                {/* HTML5 Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#E34F26">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                  </svg>
                </div>
                {/* CSS3 Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#1572B6">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                  </svg>
                </div>
                {/* JavaScript Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#F7DF1E">
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                  </svg>
                </div>
                {/* GSAP Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#88CE02">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 17.568c-.72.72-1.692 1.116-2.736 1.116s-2.016-.396-2.736-1.116L8.64 14.112c-.72-.72-1.116-1.692-1.116-2.736s.396-2.016 1.116-2.736L11.096 6.18c.72-.72 1.692-1.116 2.736-1.116s2.016.396 2.736 1.116c.72.72 1.116 1.692 1.116 2.736s-.396 2.016-1.116 2.736l-2.456 2.456 2.456 2.46z"/>
                  </svg>
                </div>
                {/* Tailwind Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#06B6D4">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center content-reveal">
          <div className="premium-card p-8 md:p-12 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready To Get Started?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free quotation for your custom website, mobile app, or premium CV. Let&apos;s bring your vision to life with cutting-edge technology and stunning design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="mailto:dev.warreng@gmail.com" className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 border-2 border-blue-600 rounded-xl neon-border-hover transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-600/50">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get Free Quote
              </a>
              <p className="text-blue-400 font-medium">dev.warreng@gmail.com</p>
            </div>
            <p className="text-sm text-gray-400">
              🚀 Fast turnaround • 💎 Premium quality • 🔧 Custom solutions • 📱 Full support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
