import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Resources = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const resources = [
    {
      title: "Recording Preparation Guide",
      description: "A comprehensive guide to help you prepare for your recording session",
      type: "PDF Guide",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Vocal Warm-up Exercises",
      description: "Essential vocal exercises to prepare for your recording session",
      type: "Audio Guide",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      title: "Home Studio Setup Tips",
      description: "Learn how to set up a basic home studio for demos and practice",
      type: "Video Tutorial",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Music Copyright Basics",
      description: "Understanding music copyright and licensing for ministry use",
      type: "Article",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Mixing Terminology Glossary",
      description: "Common audio production terms explained for beginners",
      type: "Reference",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Budget Planning Worksheet",
      description: "Plan your recording project budget with our helpful template",
      type: "Spreadsheet",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const blogPosts = [
    {
      title: "5 Tips for a Successful Recording Session",
      date: "December 15, 2025",
      excerpt: "Learn the essential tips that will help you make the most of your studio time and achieve professional results.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800"
    },
    {
      title: "The Importance of Pre-Production",
      date: "December 1, 2025",
      excerpt: "Discover why proper pre-production planning is crucial for creating high-quality music recordings.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800"
    },
    {
      title: "Choosing the Right Microphone",
      date: "November 20, 2025",
      excerpt: "A comprehensive guide to understanding different microphone types and choosing the best one for your voice.",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800"
    }
  ];

  return (
    <section id="resources" className="section-container bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
          Free Resources
        </span>
        <h2 className="heading-2 mt-4 mb-6 text-gray-900">
          Tools & Learning Materials
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access our collection of free resources designed to help you prepare for recording and improve your music production knowledge.
        </p>
      </motion.div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="text-primary-600 bg-primary-50 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                {resource.icon}
              </div>
              <div className="flex-1">
                <span className="text-xs text-primary-600 font-semibold uppercase tracking-wide">
                  {resource.type}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2 group-hover:text-primary-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {resource.description}
                </p>
                <button className="text-primary-600 font-semibold text-sm flex items-center group-hover:gap-2 transition-all">
                  Download
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Blog Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-center mb-12">
          <h3 className="heading-3 text-gray-900 mb-4">Latest from Our Blog</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with tips, tutorials, and insights from our recording professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h4 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-primary-600 font-semibold flex items-center group-hover:gap-2 transition-all">
                  Read More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Resources;
