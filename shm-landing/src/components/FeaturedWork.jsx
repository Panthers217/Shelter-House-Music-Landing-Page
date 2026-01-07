import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Albums', 'Singles', 'Live Recordings', 'Podcasts'];

  const projects = [
    {
      id: 1,
      title: "Praise & Worship Vol. 1",
      artist: "Kingdom Voices Choir",
      category: "Albums",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
      description: "Full-length worship album featuring 12 original songs"
    },
    {
      id: 2,
      title: "Grace Abounds",
      artist: "Sarah Johnson",
      category: "Singles",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800",
      description: "Powerful gospel single with orchestral arrangement"
    },
    {
      id: 3,
      title: "Sunday Service Live",
      artist: "New Hope Baptist Church",
      category: "Live Recordings",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
      description: "Live recording of anniversary celebration service"
    },
    {
      id: 4,
      title: "Faith Journey Podcast",
      artist: "Pastor Marcus Williams",
      category: "Podcasts",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800",
      description: "Weekly podcast series on spiritual growth"
    },
    {
      id: 5,
      title: "Jesus, My Everything",
      artist: "David Thompson",
      category: "Singles",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
      description: "Contemporary Christian single with urban influence"
    },
    {
      id: 6,
      title: "Hymns Reimagined",
      artist: "Unity Gospel Ensemble",
      category: "Albums",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800",
      description: "Modern arrangements of classic hymns"
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="section-container bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
          Featured Work
        </span>
        <h2 className="heading-2 mt-4 mb-6 text-gray-900">
          Projects We're Proud Of
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore some of the amazing projects we've had the privilege to work on with talented artists and ministries.
        </p>
      </motion.div>

      {/* Category Filter */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div> */}

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden bg-gray-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary-300 text-sm font-semibold mb-2">{project.category}</span>
              <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.artist}</p>
              <p className="text-gray-200 text-sm">{project.description}</p>
            </div>
            <div className="p-6 bg-white">
              <span className="text-primary-600 text-sm font-semibold">{project.category}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-1">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.artist}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16"
      >
        <p className="text-gray-600 mb-6">Want to see your project featured here?</p>
        <a href="#contact" className="btn-primary text-lg">
          Start Your Project
        </a>
      </motion.div> */}
    </section>
  );
};

export default FeaturedWork;
