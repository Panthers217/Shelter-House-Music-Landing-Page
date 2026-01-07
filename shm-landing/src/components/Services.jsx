import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Church Choir & Congregational Recordings",
      description: "Capture the spirit of your congregation with professional multi-track recordings of choirs, praise teams, and worship services.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: ["Single Production", "EP Development", "Full Album Recording", "Final Mastering", "Distribution"]
    },
    {
      title: "Gospel & Christian Artist Production",
      description: "Full production services for gospel and Christian artists—from single tracks to complete albums with professional quality.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      features: ["Single Production", "EP Development", "Full Album Recording", "Final Mastering", "Distribution"]
    },
    // {
    //   title: "Custom Songwriting Services",
    //   description: "Original songs crafted specifically for your church themes, special events, or ministry celebrations.",
    //   icon: (
    //     <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    //     </svg>
    //   ),
    //   features: ["Lyric Writing", "Music Composition", "Theme Songs", "Event-Specific Songs"]
    // },
    // {
    //   title: "Live Session Recording & Post-Production",
    //   description: "Professional recording of small ensembles and live performances with complete editing, mixing, and mastering services.",
    //   icon: (
    //     <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828 0M12 19v2m0 0h-2m2 0h2" />
    //     </svg>
    //   ),
    //   features: ["Live Recording", "Professional Editing", "Mixing Services", "Final Mastering"]
    // },
    // {
    //   title: "Distribution Support",
    //   description: "Guidance and support for releasing your music through donation-based platforms and digital distribution channels.",
    //   icon: (
    //     <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    //     </svg>
    //   ),
    //   features: ["Platform Setup", "Donation-Based Releases", "Digital Distribution", "Release Strategy"]
    // }
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
          We create inspirational gospel and Christian music that promotes healing, peace, righteousness, joy, and spiritual renewal—uplifting congregations and artists through collaborative worship-centered recordings.

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

     
    </section>
  );
};

export default Services;
