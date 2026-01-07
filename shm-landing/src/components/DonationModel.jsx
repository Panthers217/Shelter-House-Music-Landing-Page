import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const DonationModel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tiers = [
    {
      name: "Friend",
      amount: "$25",
      description: "Help us continue serving the community",
      features: [
        "Monthly newsletter updates",
        "Recognition on our website",
        "Prayer support",
        "Community impact reports"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Partner",
      amount: "$100",
      description: "Make a significant impact on gospel music",
      features: [
        "All Friend benefits",
        "Exclusive behind-the-scenes content",
        "Quarterly virtual meetups",
        "Early access to new projects",
        "Partner appreciation events"
      ],
      color: "from-primary-600 to-accent-600",
      featured: true
    },
    {
      name: "Champion",
      amount: "$250+",
      description: "Transform lives through music ministry",
      features: [
        "All Partner benefits",
        "Private studio tours",
        "Direct consultation opportunities",
        "VIP event invitations",
        "Legacy naming opportunities",
        "Dedicated support line"
      ],
      color: "from-accent-600 to-purple-600"
    }
  ];

  return (
    <section id="donate" className="section-container bg-gradient-to-br from-gray-900 via-primary-900 to-accent-900 text-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary-300 font-semibold text-sm uppercase tracking-wide">
          Support Our Ministry
        </span>
        <h2 className="heading-2 mt-4 mb-6">
          Partner With Us in Ministry
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Your generous support enables us to provide professional music production services to churches 
          and gospel artists who might not otherwise have access to quality recording facilities.
        </p>
      </motion.div>

      {/* Impact Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        {[
          { value: "85%", label: "Projects Subsidized" },
          { value: "30+", label: "Churches Served" },
          { value: "$50K+", label: "Value Donated Annually" }
        ].map((stat, index) => (
          <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
            <div className="text-4xl font-bold text-primary-300 mb-2">{stat.value}</div>
            <div className="text-gray-300">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Donation Tiers */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className={`relative rounded-2xl p-8 ${
              tier.featured 
                ? 'bg-white text-gray-900 shadow-2xl transform scale-105' 
                : 'bg-white/10 backdrop-blur-sm'
            }`}
          >
            {tier.featured && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className={`bg-gradient-to-br ${tier.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>

            <h3 className={`text-2xl font-bold mb-2 ${tier.featured ? 'text-gray-900' : 'text-white'}`}>
              {tier.name}
            </h3>
            <div className={`text-4xl font-bold mb-4 ${tier.featured ? 'text-primary-600' : 'text-primary-300'}`}>
              {tier.amount}
              <span className="text-lg font-normal text-gray-500">/month</span>
            </div>
            <p className={`mb-6 ${tier.featured ? 'text-gray-600' : 'text-gray-300'}`}>
              {tier.description}
            </p>

            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg 
                    className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${
                      tier.featured ? 'text-primary-600' : 'text-primary-300'
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className={tier.featured ? 'text-gray-700' : 'text-gray-300'}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button 
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                tier.featured
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:shadow-xl transform hover:-translate-y-1'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
            >
              Become a {tier.name}
            </button>
          </motion.div>
        ))}
      </div>

      {/* One-time Donation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Prefer a One-Time Gift?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Every contribution, whether one-time or recurring, helps us continue our mission of serving 
          churches and gospel artists with professional music production services.
        </p>
        <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5">
          Make a One-Time Donation
        </button>
      </motion.div>

      {/* Tax Deductible Notice */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-center text-gray-400 text-sm mt-8"
      >
        Shelter House Music is a 501(c)(3) nonprofit organization. All donations are tax-deductible.
      </motion.p>
    </section>
  );
};

export default DonationModel;
