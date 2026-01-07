import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const AnimatedMissionContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      title: "Mission Statement",
      content: (
        <div className="space-y-4">
          <p className="text-base md:text-lg text-primary-100 leading-relaxed">
            Our mission is to create inspirational, gospel, and Christian music that promotes{' '}
            <span className="font-semibold text-accent-200">healing, peace, righteousness, joy, and spiritual renewal</span>, 
            while uplifting local congregations and artists through collaborative worship-centered recordings.
          </p>
          <p className="text-base md:text-lg text-primary-100 leading-relaxed">
            Shelter House exists to use music as a{' '}
            <span className="font-semibold text-accent-200">place of refuge</span>, 
            where faith, creativity, and community come together to glorify God.
          </p>
        </div>
      )
    },
    {
      title: "Vision Statement",
      content: (
        <p className="text-base md:text-lg text-primary-100 leading-relaxed">
          To become a trusted Christian recording ministry that empowers local churches and artists 
          to share their unique worship sound with the world—without financial barriers—while 
          strengthening unity within the Body of Christ.
        </p>
      )
    },
    {
      title: "Core Values",
      content: (
        <ul className="space-y-3 text-left max-w-3xl mx-auto">
          {[
            { title: "Faith-Centered Excellence", desc: "Honoring God through excellence in sound, production, and integrity" },
            { title: "Community Partnership", desc: "Serving churches and artists, not exploiting them" },
            { title: "Accessibility", desc: "Removing financial obstacles to professional music recording" },
            { title: "Authenticity", desc: "Preserving the true worship identity of each church and artist" },
            { title: "Stewardship", desc: "Ethical management of creative, financial, and spiritual resources" }
          ].map((value, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-accent-300 mt-2"></span>
              <div>
                <span className="font-semibold text-accent-200">{value.title}</span>
                <span className="text-primary-100"> – {value.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(timer);
  }, [content.length]);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-8">
      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mb-8">
        {content.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-accent-300 w-12' 
                : 'bg-white/30 w-8 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative min-h-[300px] md:min-h-[350px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ 
              duration: 0.8,
              ease: "easeInOut"
            }}
            className="absolute inset-0"
          >
            {/* Glass Card Effect */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 shadow-2xl">
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 text-center"
              >
                {content[currentSlide].title}
              </motion.h2>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center"
              >
                {content[currentSlide].content}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + content.length) % content.length)}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full border border-white/20 transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % content.length)}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full border border-white/20 transition-all duration-300"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AnimatedMissionContent;
