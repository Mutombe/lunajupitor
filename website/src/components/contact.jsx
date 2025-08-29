import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const mapRef = useRef(null);
  const leafletMap = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log(formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  useEffect(() => {
    // Load Leaflet CSS and JS dynamically
    const loadLeaflet = async () => {
      // Add CSS
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
        document.head.appendChild(cssLink);
      }

      // Add JS
      if (!window.L) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
        script.onload = initMap;
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    const initMap = () => {
      if (mapRef.current && window.L && !leafletMap.current) {
        // Initialize the map
        leafletMap.current = window.L.map(mapRef.current).setView([-17.8252, 31.0335], 13);

        // Add dark theme tile layer
        window.L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
          maxZoom: 20,
          attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
        }).addTo(leafletMap.current);

        // Custom red marker
        const redIcon = window.L.divIcon({
          className: 'custom-marker',
          html: `<div style="
            width: 30px;
            height: 30px;
            background: #dc2626;
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
              <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });

        // Add marker
        window.L.marker([-17.8252, 31.0335], { icon: redIcon })
          .addTo(leafletMap.current)
          .bindPopup(`
            <div style="text-align: center; padding: 8px; color: white;">
              <strong style="font-size: 16px;">Automotive Parts Store</strong><br>
              <span style="color: #ccc;">150 North Way, Prospect<br>Harare, Zimbabwe</span><br>
              <a href="tel:+263777220420" style="color: #dc2626; margin-top: 8px; display: inline-block;">+263 777 220 420</a>
            </div>
          `)
          .openPopup();
      }
    };

    loadLeaflet();

    // Cleanup
    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Custom Styles */}
      <style>{`
        .leaflet-popup-content-wrapper {
          background: #1a1a1a !important;
          border-radius: 8px !important;
        }
        .leaflet-popup-tip {
          background: #1a1a1a !important;
        }
        .hero-gradient {
          background: linear-gradient(135deg, #1a1a1a 0%, #dc2626 100%);
        }
        .btn-gradient {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
        }
        .btn-gradient:hover {
          background: linear-gradient(135deg, #b91c1c, #991b1b);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.3);
        }
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-fade-in-delay">
            Get in touch with our team for expert advice, quotes, or any questions about our automotive parts and services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Have questions about our automotive parts or services? Fill out the form and our team will get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:ring-4 focus:ring-red-100 transition-all duration-200 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:ring-4 focus:ring-red-100 transition-all duration-200 outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:ring-4 focus:ring-red-100 transition-all duration-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:ring-4 focus:ring-red-100 transition-all duration-200 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:ring-4 focus:ring-red-100 transition-all duration-200 outline-none resize-vertical"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-gradient text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
                </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <MapPin className="text-red-600 mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">150 North Way, Prospect, Harare, Zimbabwe</p>
                    </div>
                  </div>

                  <div className="flex items-center bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <Phone className="text-red-600 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+263 777 220 420</p>
                    </div>
                  </div>

                  <div className="flex items-center bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <Mail className="text-red-600 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">tinoembara@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold text-gray-900">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold text-gray-900">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold text-gray-900">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Linkedin, href: "#" }
                  ].map(({ icon: Icon, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      className="bg-gray-100 text-red-600 p-3 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    >
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Find Our Location</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div
              ref={mapRef}
              className="h-96 w-full bg-gray-200 flex items-center justify-center"
            >
              {!leafletMap.current && (
                <div className="text-center">
                  <MapPin size={48} className="text-red-600 mx-auto mb-4" />
                  <p className="text-gray-600">Loading map...</p>
                </div>
              )}
            </div>
            <div className="p-8 text-center bg-white">
              <p className="text-lg text-gray-700 mb-4">150 North Way, Prospect, Harare, Zimbabwe</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=150+North+Way+Prospect+Harare+Zimbabwe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;