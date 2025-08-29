import React from 'react';
import { Search, Truck, Headphones, Award, Check, Star, Clock, Shield, Users, ArrowRight, Phone, Mail } from 'lucide-react';
import Products from './projects';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Parts Sourcing",
      description: "We specialize in sourcing both original and high-quality aftermarket parts from reputable suppliers to meet your specific needs.",
      icon: <Search className="text-red-600" size={48} />,
      features: ["Genuine OEM parts", "Quality aftermarket options", "Global supplier network", "Competitive pricing"],
      color: "from-red-50 to-red-100"
    },
    {
      title: "Delivery & Logistics",
      description: "We offer fast and reliable delivery services, ensuring timely access to essential parts for your business operations.",
      icon: <Truck className="text-blue-600" size={48} />,
      features: ["Nationwide delivery", "Express shipping options", "Order tracking", "Secure packaging"],
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Expert Advice & Support",
      description: "Our knowledgeable team is always available to assist with selecting the right parts and providing technical support for your requirements.",
      icon: <Headphones className="text-green-600" size={48} />,
      features: ["Technical consultations", "Product recommendations", "Troubleshooting assistance", "Maintenance advice"],
      color: "from-green-50 to-green-100"
    },
    {
      title: "Customer Service Excellence",
      description: "We are dedicated to delivering exceptional customer service and after-sales support, ensuring your complete satisfaction with every purchase.",
      icon: <Award className="text-purple-600" size={48} />,
      features: ["After-sales support", "Warranty claims", "Returns management", "Customer feedback system"],
      color: "from-purple-50 to-purple-100"
    }
  ];

  const stats = [
    { icon: <Users size={24} />, number: "10,000+", label: "Happy Customers" },
    { icon: <Star size={24} />, number: "50,000+", label: "Parts Sourced" },
    { icon: <Clock size={24} />, number: "24/7", label: "Support Available" },
    { icon: <Shield size={24} />, number: "99.9%", label: "Quality Guarantee" }
  ];
  const navigate = useNavigate();

  const processSteps = [
    {
      step: "01",
      title: "Contact Us",
      description: "Reach out with your parts requirements via phone, email, or our online form."
    },
    {
      step: "02",
      title: "Parts Sourcing",
      description: "Our experts locate the best quality parts at competitive prices from trusted suppliers."
    },
    {
      step: "03",
      title: "Quality Check",
      description: "Every part undergoes rigorous quality inspection before dispatch to ensure reliability."
    },
    {
      step: "04",
      title: "Fast Delivery",
      description: "Secure packaging and reliable logistics ensure your parts arrive on time and in perfect condition."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/about.jpg')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At Lunaj Motors, we offer comprehensive solutions to keep your vehicles running smoothly. 
              Our services are designed to provide you with the right parts and support when you need them most.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => navigate('/products')}>
                Explore Products
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300"
                onClick={() => navigate('/contact')}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-red-500 to-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {stat.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive automotive solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.color} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group`}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-white p-4 rounded-full mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-800">
                      <div className="bg-green-500 rounded-full p-1 mr-3">
                        <Check className="text-white" size={14} />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <button className="text-red-600 font-semibold hover:text-red-700 flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures you get the right parts quickly and efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative text-center group">
                <div className="bg-gradient-to-br from-red-500 to-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Our team of experts is ready to help you find the right parts and provide technical support for your specific needs. 
            Contact us today and experience the Lunaj Motors difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
              <Phone size={20} className="mr-2" />
              Call Us Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center">
              <Mail size={20} className="mr-2" />
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;