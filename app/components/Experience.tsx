'use client';

import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

export default function Experience(): React.JSX.Element {
  return (
    <section id="education" className="py-16 md:py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/0 via-purple-900/5 to-purple-900/0 pointer-events-none" />
      
      <ScrollAnimationWrapper animationType="slideUp">
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 md:mb-16 text-center">
            Education Timeline
          </h2>
          
          <div className="flex justify-center items-stretch">
            <div className="w-full max-w-2xl">
              {/* Timeline container */}
              <div className="relative">
                {/* Central timeline line with gradient */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-purple-400 to-purple-600 shadow-lg shadow-purple-500/50" />
                
                {/* Timeline item */}
                <div className="flex flex-col items-center relative z-20 animate-fade-in">
                  {/* Timeline dot with pulse animation */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl animate-pulse" />
                    <div className="relative w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-4 border-slate-900 shadow-lg shadow-purple-500/50 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  
                  {/* Content card with hover animation */}
                  <div className="w-full group">
                    <div className="bg-gradient-to-br from-slate-950/80 via-purple-950/60 to-slate-950/80 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 border border-purple-500/30 hover:border-purple-400/60 shadow-xl hover:shadow-2xl hover:shadow-purple-900/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                      {/* Decorative corner elements */}
                      <div className="absolute top-0 left-0 w-6 md:w-8 h-6 md:h-8 border-t-2 border-l-2 border-purple-400/30 rounded-tl-lg" />
                      <div className="absolute bottom-0 right-0 w-6 md:w-8 h-6 md:h-8 border-b-2 border-r-2 border-purple-400/30 rounded-br-lg" />
                      
                      <div className="relative">
                        {/* Degree badge */}
                        <div className="inline-block mb-4 px-3 md:px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/50 rounded-full">
                          <span className="text-xs md:text-sm font-semibold text-purple-300">Degree</span>
                        </div>
                        
                        {/* Degree title */}
                        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-3">
                          B.TECH
                        </h3>
                        
                        {/* College name */}
                        <p className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          G PULLAIAH COLLEGE OF ENGINEERING AND TECHNOLOGY
                        </p>
                        
                        {/* Timeline period with icon */}
                        <div className="flex items-center gap-3 text-purple-300 text-base md:text-lg font-medium mt-4 pt-4 border-t border-purple-500/20">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>2023 - 2027</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}

