import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, CheckCircle, Award, User, Clock, Settings } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-64 bg-black">
        <div className="absolute inset-0">
          <img 
            src="/about.jpg"
            alt="Truck parts"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Lunaj Motors</h1>
            <p className="text-xl text-white max-w-3xl mx-auto px-4">
              Your trusted partner for premium truck parts and exceptional service
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Lunaj Motors is a premier supplier of high-quality spare parts for trucks in the region. 
                Established with the aim of providing reliable and durable automotive components, we have 
                built a solid reputation in the transport and logistics sector.
              </p>
              <p className="text-gray-600">
                Our product range includes both genuine and aftermarket parts, offering a comprehensive
                selection that ensures our customers' vehicles are always in peak condition.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
              <img 
                src="/about.jpg"
                alt="Truck parts"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Shield />, title: "Quality", desc: "Only the highest quality parts" },
              { icon: <CheckCircle />, title: "Integrity", desc: "Honest and transparent business" },
              { icon: <Award />, title: "Expertise", desc: "Deep technical knowledge" },
              { icon: <User />, title: "Customer Focus", desc: "Exceeding expectations" },
              { icon: <Clock />, title: "Reliability", desc: "Consistent value delivery" },
              { icon: <Settings />, title: "Innovation", desc: "Continuous improvement" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-red-600">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-red-600 rounded-lg p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6">Contact us today for quality truck parts and exceptional service</p>
          <button className="bg-white text-red-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;