import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const inspirationalProjects = [
    {
      id: 1,
      title: "All of My Life",
      subGenre: "Retro Contemporary Christian (90s CCM)",
      description: "A reflective, song-driven gospel track with a classic 1990s CCM feel, focused on personal devotion and heartfelt expression.",
      styleTags: ["Inspirational", "Classic Gospel", "Retro"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
      audio: "ministry/assets/all-my-life.mp3"
    },
    {
      id: 2,
      title: "Faithful Lord",
      subGenre: "Classic Praise & Worship (90s CCM)",
      description: "A timeless worship song rooted in classic gospel traditions, uplifting and encouraging faith-driven living.",
      styleTags: ["Congregational", "Inspirational", "Retro"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
      audio: "ministry/assets/faithful-lord.mp3"
    },
    {
      id: 3,
      title: "Let It Go",
      subGenre: "Retro Inspirational Christian Pop (90s Worship Pop)",
      description: "A inspirational song with a retro pop-gospel sound that emphasizes surrender, faith, and personal prayer.",
      styleTags: ["Inspirational", "Gospel", "Retro"],
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800",
      audio: "ministry/assets/let-it-go.mp3"
    },
    {
      id: 4,
      title: "Live in a Way",
      subGenre: "Contemporary Christian Pop-Worship (Retro-Inspired)",
      description: "A Classic gospel-influenced worship track with a retro vibe, focusing on living a life that reflects faith and devotion to God.",
      styleTags: ["Inspirational", "Classic Gospel", "Retro"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
      audio: "ministry/assets/live-in-a-way.mp3"
    },
    {
      id: 5,
      title: "With All of My Heart",
      subGenre: "Classic Worship Ballad (90s CCM)",
      description: "A heartfelt worship ballad with classic gospel influences, emphasizing deep devotion and sincere expression of faith.",
      styleTags: ["Inspirational", "Classic Gospel", "Retro"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
      audio: "ministry/assets/with-all-of-my-heart.mp3"
    },
    {
      id: 6,
      title: "My Praise",
      subGenre: "Praise & Worship (Gospel-Influenced CCM)",
      description: "An uplifting praise and worship song with strong gospel influences, designed to inspire heartfelt worship..",
      styleTags: ["Praise", "Congregational", "Gospel", "Uplifting"],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
      audio: "ministry/assets/my-praise.mp3"
    },
    {
      id: 7,
      title: "God of the Impossible",
      subGenre: "Worship Rock / Inspirational Rock",
      description: "A bold, faith-filled worship rock song for solo artists, combining emotional vocals with modern worship-rock dynamics.",
      styleTags: ["Inspirational", "Solo Worship", "Worship Rock"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
      audio: "ministry/assets/god-of-the-impossible.mp3"
    },
    {
      id: 11,
      title: "Jesus Love Saves Us All",
      subGenre: "Contemporary Worship Rock Ballad",
      description: "A powerful choir-led worship ballad that builds emotional depth through rock-influenced instrumentation and congregational worship energy.",
      styleTags: ["Congregational", "Choir", "Worship Rock"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
      audio: "ministry/assets/jesus-your-love-saves-us-all.mp3"
    }
  ];

  const congregationalProjects = [
     {
      id: 8,
      title: "Here Is My Heart",
      subGenre: "Praise & Worship (Gospel-Inspired Worship Anthem)",
      description: "A heartfelt yet energetic worship anthem rooted in gospel praise tradition, offering space for call-and-response moments and strong congregational engagement",
      styleTags: ["Worship", "Congregational", "Choir"],
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
      audio: "ministrypublic/assets/here-is-my-heart.mp3"
    },
    {
      id: 9,
      title: "Here In Your Presence",
      subGenre: "Praise & Worship (Gospel Worship Flow)",
      description: "A worship-focused praise song that blends reverence with uplifting momentum, suitable for choir-led worship and seamless transitions within a live praise set.",
      styleTags: ["Congregational", "Choir"],
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800",
      audio: "ministry/assets/here-in-your-presence.mp3"
    },
    {
      id: 10,
      title: "All of My Days",
      subGenre: "Gospel Praise & Worship (Contemporary Praise)",
      description: "A joyful praise and worship song with strong gospel influence, designed for congregational participation and expressive celebration in a corporate worship setting.",
      styleTags: ["Congregational", "Choir", "Praise"],
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800",
      audio: "ministry/assets/all-of-my-days.mp3"
    },
    {
      id: 11,
      title: "Jesus Love Saves Us All",
      subGenre: "Contemporary Worship Rock Ballad",
      description: "A powerful choir-led worship ballad that builds emotional depth through rock-influenced instrumentation and congregational worship energy.",
      styleTags: ["Congregational", "Choir", "Worship Rock"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
      audio: "ministry/assets/jesus-your-love-saves-us-all.mp3"
    },
    {
      id: 12,
      title: "Let God Arise",
      subGenre: "Gospel Praise & Worship (Celebration)",
      description: "A high-energy praise anthem rooted in gospel worship tradition, featuring strong choir presence and joyful call-and-response moments.",
      styleTags: ["Praise", "Congregational", "Choir", "Celebration"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
      audio: "ministry/assets/let-god-arise.mp3"
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
                <span className="text-primary-300 text-sm font-semibold mb-2">{project.subGenre}</span>
                <h4 className="text-2xl font-bold text-white mb-1">{project.title}</h4>
              </div>
              <div className="p-6 bg-white">
                <span className="text-primary-600 text-sm font-semibold">{project.subGenre}</span>
                <h4 className="text-xl font-bold text-accent-700 mt-2 mb-2">{project.title}</h4>
                <p className="text-accent-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                
                {/* Style Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.styleTags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Audio Player */}
                <audio 
                  controls 
                  controlsList="nodownload"
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
                <span className="text-primary-300 text-sm font-semibold mb-2">{project.subGenre}</span>
                <h4 className="text-2xl font-bold text-white mb-1">{project.title}</h4>
              </div>
              <div className="p-6 bg-white">
                <span className="text-primary-600 text-sm font-semibold">{project.subGenre}</span>
                <h4 className="text-xl font-bold text-accent-700 mt-2 mb-2">{project.title}</h4>
                <p className="text-accent-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                
                {/* Style Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.styleTags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Audio Player */}
                <audio 
                  controls 
                  controlsList="nodownload"
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
    </section>
  );
};

export default FeaturedWork;
