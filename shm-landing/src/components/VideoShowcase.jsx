import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

const VideoShowcase = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-primary-50 to-white py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
            Our Story
          </span>
          <h2 className="heading-2 mt-4 mb-6 text-accent-700">
            Experience Shelter House Music
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
           Serving and uplifting the kingdom of God through praise/worship and inspirational recordings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black group">
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              poster="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/assets/shelter-house-promo.mp4" type="video/mp4" />
              <source src="/assets/shelter-house-promo.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Play/Pause Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={togglePlay}
                    className="w-20 h-20 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center shadow-2xl transition-colors"
                  >
                    <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                  </motion.button>
                </div>
              )}

              {/* Bottom Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-accent-700" fill="currentColor" />
                  ) : (
                    <Play className="w-5 h-5 text-accent-700 ml-0.5" fill="currentColor" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-accent-700" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-accent-700" />
                  )}
                </button>

                <div className="flex-1"></div>

                <button
                  onClick={toggleFullscreen}
                  className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                >
                  <Maximize className="w-5 h-5 text-accent-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats or Call to Action Below Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-1 gap-8 mt-12"
          >
            {/* <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-accent-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-accent-600">Happy Clients</div>
            </div> */}
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-accent-600">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
