import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      content: "(252) 364-8303"
      // link: "tel:+12525550123"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      content: "ministry@shelterhousemusic.com",
      link: "mailto:ministry@shelterhousemusic.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      content: "Jacksonville, NC 28540",
      link: null
    },
    // {
    //    icon: (
    //      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    //      </svg>
    //    ),
    //   title: "Hours",
    //   content: "Mon-Fri: 9AM-6PM",
    //   link: null
    // }
  ];

  return (
    <section id="contact" className="section-container bg-gradient-to-b from-primary-50 to-primary-100">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
          Get In Touch
        </span>
        <h2 className="heading-2 mt-4 mb-6 text-accent-700">
         Contact Us
        </h2>
        {/* <p className="text-xl text-accent-600 max-w-3xl mx-auto\">
          Have a question or ready to book a session? We'd love to hear from you. Reach out and let's create something amazing together.
        </p> */}
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-accent-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-accent-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-accent-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="(252) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-accent-700 mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="recording">Music Recording</option>
                  <option value="mixing">Mixing & Mastering</option>
                  <option value="production">Music Production</option>
                  <option value="podcast">Podcast Recording</option>
                  <option value="consultation">Consultation</option>
                  <option value="restoration">Audio Restoration</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-accent-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary text-lg">
                Send Message
              </button>
            </div>
          </form> */}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Contact Cards */}
          <div className="grid gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                {info.link ? (
                  <a href={info.link} className="flex items-start gap-4 group">
                    <div className="text-primary-600 bg-primary-50 p-3 rounded-lg group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-accent-700 mb-1">{info.title}</h3>
                      <p className="text-accent-600 group-hover:text-primary-600 transition-colors">
                        {info.content}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="text-primary-600 bg-primary-50 p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-accent-700 mb-1">{info.title}</h3>
                      <p className="text-accent-600">{info.content}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Media */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-gradient-to-br from-primary-600 to-accent-600 p-8 rounded-2xl text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <p className="mb-6 text-primary-100">
              Stay connected with us on social media for updates, behind-the-scenes content, and more.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'youtube', 'twitter'].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform}.com/shelterhousemusic`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <span className="sr-only">{platform}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
