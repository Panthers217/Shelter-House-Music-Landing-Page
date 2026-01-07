import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Pastor David Wilson",
      role: "Senior Pastor, New Hope Church",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      quote: "Shelter House Music transformed our worship experience. The quality of their recording and production is exceptional, and their heart for ministry shines through in everything they do.",
      rating: 5
    },
    {
      name: "Sarah Mitchell",
      role: "Gospel Recording Artist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      quote: "Working with Shelter House Music was a dream come true. They understood my vision and helped bring it to life with professionalism and genuine care. My album exceeded all expectations!",
      rating: 5
    },
    {
      name: "Minister James Thompson",
      role: "Music Director, Grace Fellowship",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      quote: "The team's expertise and state-of-the-art equipment made recording our choir's album a seamless experience. They captured the spirit of our worship beautifully.",
      rating: 5
    },
    {
      name: "Lisa Anderson",
      role: "Worship Leader, Kingdom Life Church",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      quote: "As a first-time recording artist, I was nervous, but the Shelter House team made me feel comfortable and confident. The final product was beyond what I imagined possible.",
      rating: 5
    },
    {
      name: "Rev. Michael Brown",
      role: "Pastor, Faith Community Church",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      quote: "Their donation-based model allowed our small church to produce a professional recording that we use for worship every week. Truly a blessing to our ministry.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-container bg-gradient-to-b from-white to-gray-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
          Testimonials
        </span>
        <h2 className="heading-2 mt-4 mb-6 text-gray-900">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hear from the churches, artists, and ministries we've had the privilege to serve.
        </p>
      </motion.div>

      {/* Main Featured Testimonial */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Quote Icon */}
          <div className="absolute top-8 right-8 text-primary-100 opacity-50">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
          </div>

          <div className="relative z-10">
            {/* Rating Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            <p className="text-2xl text-gray-700 leading-relaxed mb-8 text-center italic">
              "{testimonials[activeIndex].quote}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
              />
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-gray-600">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-700 hover:text-primary-600 transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-primary-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-700 hover:text-primary-600 transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Thumbnail Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
              index === activeIndex
                ? 'ring-4 ring-primary-600 scale-110'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full aspect-square object-cover"
            />
          </button>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
