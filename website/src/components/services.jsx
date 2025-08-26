import React from 'react';
import { motion } from 'framer-motion';
import { Search, Truck, Headphones, Award, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Parts Sourcing",
      description: "We specialize in sourcing both original and high-quality aftermarket parts from reputable suppliers to meet your specific needs.",
      icon: <Search className="text-red-600" size={48} />,
      features: ["Genuine OEM parts", "Quality aftermarket options", "Global supplier network", "Competitive pricing"]
    },
    {
      title: "Delivery & Logistics",
      description: "We offer fast and reliable delivery services, ensuring timely access to essential parts for your business operations.",
      icon: <Truck className="text-red-600" size={48} />,
      features: ["Nationwide delivery", "Express shipping options", "Order tracking", "Secure packaging"]
    },
    {
      title: "Expert Advice & Support",
      description: "Our knowledgeable team is always available to assist with selecting the right parts and providing technical support for your requirements.",
      icon: <Headphones className="text-red-600" size={48} />,
      features: ["Technical consultations", "Product recommendations", "Troubleshooting assistance", "Maintenance advice"]
    },
    {
      title: "Customer Service Excellence",
      description: "We are dedicated to delivering exceptional customer service and after-sales support, ensuring your complete satisfaction with every purchase.",
      icon: <Award className="text-red-600" size={48} />,
      features: ["After-sales support", "Warranty claims", "Returns management", "Customer feedback system"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Lunaj Motors, we offer comprehensive solutions to keep your vehicles running smoothly. 
            Our services are designed to provide you with the right parts and support when you need them most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red-50 p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="text-red-600 mr-2" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-red-600 text-white rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Need Assistance with Your Vehicle Parts?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you find the right parts and provide technical support for your specific needs.
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Contact Us Today
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;