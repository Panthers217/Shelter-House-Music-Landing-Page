import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const inspirationalProjects = [
    {
      id: 1,
      title: "Let It Go",
      category: "Inspirational / Solo Worship",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800",
      audio: "/assets/let-it-go.mp3"
    },
    {
      id: 2,
      title: "My Praise",
      category: "Inspirational / Solo Worship",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
      audio: "/assets/my-praise.mp3"
    },
    {
      id: 3,
      title: "Live in a Way",
      category: "Inspirational / Solo Worship",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
      audio: "/assets/live-in-a-way.mp3"
    }
  ];

  const congregationalProjects = [
    {
      id: 4,
      title: "Here Is My Heart",
      category: "Congregational Worship & Choir",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
      audio: "/assets/here-is-my-heart.mp3"
    },
    {
      id: 5,
      title: "Here In Your Presence",
      category: "Congregational Worship & Choir",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800",
      audio: "/assets/here-in-your-presence.mp3"
    },
    {
      id: 6,
      title: "All of My Days",
      category: "Congregational Worship & Choir",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800",
      audio: "/assets/all-of-my-days.mp3"
    }
  ];

  return (
    <section id="work" className="section-container bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
          Featured Work
        </span>
        <h2 className="heading-2 mt-4 mb-6 text-accent-700">
          Projects We're Proud Of
        </h2>
        <p className="text-xl text-accent-600 max-w-3xl mx-auto">
          These recordings represent the worship sound and direction Shelter House Music provides for churches and artists.
        </p>
      </motion.div>

      {/* Category 1: Inspirational / Solo Worship */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-20"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-accent-700 mb-3">
            Inspirational / Solo Worship
          </h3>
          <p className="text-accent-600 max-w-2xl mx-auto">
            Inspirational worship examples highlighting individual artists and reflective expression.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inspirationalProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-primary-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary-300 text-sm font-semibold mb-2">{project.category}</span>
                <h4 className="text-2xl font-bold text-white mb-1">{project.title}</h4>
              </div>
              <div className="p-6 bg-white">
                <span className="text-primary-600 text-sm font-semibold">{project.category}</span>
                <h4 className="text-xl font-bold text-accent-700 mt-2 mb-4">{project.title}</h4>
                
                {/* Audio Player */}
                <audio 
                  controls 
                  className="w-full"
                  preload="metadata"
                >
                  <source src={project.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Category 2: Congregational Worship & Choir (PRIMARY) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-accent-700 mb-4">
            Congregational Worship & Choir
          </h3>
          <p className="text-lg text-accent-600 max-w-2xl mx-auto">
            Worship-centered recordings designed for congregational singing and choir-led services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {congregationalProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-primary-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary-300 text-sm font-semibold mb-2">{project.category}</span>
                <h4 className="text-2xl font-bold text-white mb-1">{project.title}</h4>
              </div>
              <div className="p-6 bg-white">
                <span className="text-primary-600 text-sm font-semibold">{project.category}</span>
                <h4 className="text-xl font-bold text-accent-700 mt-2 mb-4">{project.title}</h4>
                
                {/* Audio Player */}
                <audio 
                  controls 
                  className="w-full"
                  preload="metadata"
                >
                  <source src={project.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16"
      >
        <p className="text-accent-600 mb-6">Want to see your project featured here?</p>
        <a href="#contact" className="btn-primary text-lg">
          Start Your Project
        </a>
      </motion.div> */}
    </section>
  );
};

export default FeaturedWork;
