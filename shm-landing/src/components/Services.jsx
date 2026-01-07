import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Music Recording",
      description: "Professional multi-track recording with state-of-the-art equipment for vocals, instruments, and full bands.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      features: ["Vocal Recording", "Instrument Tracking", "Live Band Recording", "Overdubs & Harmonies"]
    },
    {
      title: "Mixing & Mastering",
      description: "Expert audio mixing and professional mastering to ensure your music sounds polished and radio-ready.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      features: ["Professional Mixing", "Stereo Mastering", "Stem Mastering", "Audio Restoration"]
    },
    {
      title: "Music Production",
      description: "Complete music production services from composition to final arrangement with industry-standard quality.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: ["Beat Production", "Arrangement", "Session Musicians", "Creative Direction"]
    },
    {
      title: "Podcast Recording",
      description: "High-quality podcast recording and editing services to help you share your message with clarity.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828 0M12 19v2m0 0h-2m2 0h2" />
        </svg>
      ),
      features: ["Multi-track Recording", "Audio Editing", "Sound Design", "Distribution Prep"]
    },
    {
      title: "Consultation Services",
      description: "Expert guidance on music production, recording techniques, and project planning for your ministry.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      features: ["Project Planning", "Technical Consultation", "Budget Guidance", "Equipment Recommendations"]
    },
    {
      title: "Audio Restoration",
      description: "Restore and enhance old recordings, remove noise, and improve audio quality of archived material.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      features: ["Noise Reduction", "Click Removal", "Archive Enhancement", "Format Conversion"]
    }
  ];

  return (
    <section id="services" className="section-container bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
          Our Services
        </span>
        <h2 className="heading-2 mt-4 mb-6 text-gray-900">
          Professional Music Production Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From recording to final mastering, we provide comprehensive services to bring your musical vision to life.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
          >
            <div className="text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16"
      >
        <a href="#contact" className="btn-primary text-lg">
          Request a Quote
        </a>
      </motion.div>
    </section>
  );
};

export default Services;
