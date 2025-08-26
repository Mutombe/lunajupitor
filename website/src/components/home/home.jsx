import React, { useState, useEffect } from "react";
import {
  Truck,
  Shield,
  Headphones,
  Award,
  Search,
  User,
  Settings,
  Filter,
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ShoppingCart,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/1234.png")`,
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Find Parts For <span className="text-red-500">Your Vehicle</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            Over hundreds of brands and tens of thousands of parts
          </p>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brand
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500">
                    <option>Select Brand</option>
                    <option>UD Trucks</option>
                    <option>Hino</option>
                    <option>Freightliner</option>
                    <option>Isuzu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500">
                    <option>Select Type</option>
                    <option>Engine Parts</option>
                    <option>Brake Parts</option>
                    <option>Transmission</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500">
                    <option>Select Year</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                  </select>
                </div>
                <div className="sm:col-span-2 lg:col-span-1 flex items-end">
                  <button className="w-full bg-red-600 text-white p-3 rounded-lg font-semibold hover:bg-red-700 transition-colors transform hover:scale-105">
                    Search Parts
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Truck size={32} />,
                title: "Free Shipping",
                desc: "On orders over $100",
              },
              {
                icon: <Headphones size={32} />,
                title: "Support 24/7",
                desc: "Expert advice",
              },
              {
                icon: <Shield size={32} />,
                title: "100% Safety",
                desc: "Only secure payments",
              },
              {
                icon: <Award size={32} />,
                title: "Hot Offers",
                desc: "Discounts up to 90%",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-red-600 mr-4 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Interior Parts",
                subtitle: "Low prices guaranteed",
                bg: "from-blue-600 to-blue-700",
              },
              {
                title: "Wheels Rim",
                subtitle: "Power looks of next level",
                bg: "from-teal-600 to-teal-700",
              },
              {
                title: "Body Parts",
                subtitle: "For Any Vehicle",
                bg: "from-gray-600 to-gray-700",
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`relative h-48 rounded-xl overflow-hidden bg-gradient-to-br ${category.bg} text-white`}
              >
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-sm opacity-90">{category.subtitle}</p>
                    <h3 className="text-2xl font-bold mt-1">
                      {category.title}
                    </h3>
                  </div>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors w-fit">
                    Shop Now
                  </button>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full flex items-center justify-center">
                  <Settings className="w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Shop by category
              </h2>
            </div>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
              Shop Now
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: "Body Parts", icon: "🚗" },
              { name: "Headlights & Lighting", icon: "💡" },
              { name: "Brakes & Suspension", icon: "🔧" },
              { name: "Engine & Drivetrain", icon: "⚙️" },
              { name: "Tools & Garage", icon: "🔨" },
              { name: "Interior Parts", icon: "🪑" },
              { name: "Body Parts", icon: "🚗" },
              { name: "Brakes & Suspension", icon: "🔧" },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-3xl sm:text-4xl mb-3">{category.icon}</div>
                <h3 className="font-medium text-sm sm:text-base text-gray-900">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Special Offers
              </h2>
              <p className="text-gray-600">Best prices guaranteed</p>
            </div>
            <div className="flex space-x-2">
              <button className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center">
                ←
              </button>
              <button className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center">
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Turbocharger Assembly",
                brand: "UD Trucks",
                price: "$420",
                oldPrice: "$490",
                discount: "15%",
                image: "/turbo.webp",
              },
              {
                name: "Brake Caliper Set",
                brand: "Hino",
                price: "$180",
                oldPrice: "$210",
                discount: "12%",
                image: "/brake.webp",
              },
              {
                name: "Fuel Injection Pump",
                brand: "Freightliner",
                price: "$350",
                oldPrice: "$390",
                discount: "10%",
                image: "/pump.webp",
              },
              {
                name: "Suspension Kit",
                brand: "Isuzu",
                price: "$560",
                oldPrice: "$620",
                discount: "10%",
                image: "/kit.jpg",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                  <div className="text-6xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="absolute top-2 right-2">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Heart size={16} className="text-gray-400" />
                    </button>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                      -{product.discount}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-500 text-sm">{product.brand}</p>
                  <h3 className="font-semibold mb-2 text-sm">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-lg text-red-600">
                        {product.price}
                      </span>
                      <span className="text-gray-500 line-through ml-2 text-sm">
                        {product.oldPrice}
                      </span>
                    </div>
                  </div>
                  <button className="w-full mt-3 bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Countdown */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Special Offer
              </h2>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-orange-300">
                20% OFF
              </h3>
              <p className="text-lg sm:text-xl mb-6">
                On all brake system parts this month
              </p>
              <div className="flex justify-center lg:justify-start items-center mb-6 space-x-2 sm:space-x-4">
                <div className="bg-red-700 px-3 sm:px-4 py-2 rounded-lg text-center">
                  <span className="text-xl sm:text-2xl font-bold">
                    {timeLeft.days.toString().padStart(2, "0")}
                  </span>
                  <p className="text-xs sm:text-sm">Days</p>
                </div>
                <div className="bg-red-700 px-3 sm:px-4 py-2 rounded-lg text-center">
                  <span className="text-xl sm:text-2xl font-bold">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </span>
                  <p className="text-xs sm:text-sm">Hours</p>
                </div>
                <div className="bg-red-700 px-3 sm:px-4 py-2 rounded-lg text-center">
                  <span className="text-xl sm:text-2xl font-bold">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </span>
                  <p className="text-xs sm:text-sm">Mins</p>
                </div>
                <div className="bg-red-700 px-3 sm:px-4 py-2 rounded-lg text-center">
                  <span className="text-xl sm:text-2xl font-bold">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </span>
                  <p className="text-xs sm:text-sm">Secs</p>
                </div>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Shop Now
              </button>
            </div>
            <div className="text-center">
              <div className="w-full max-w-md mx-auto h-64 bg-red-700 bg-opacity-30 rounded-xl flex items-center justify-center">
                <div className="text-8xl">
                  <img
                    src="/brake.webp"
                    alt="Special Offer"
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
              Why Choose Lunajupitas Motors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We stand out from the competition with our commitment to quality
              and service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield size={32} />,
                title: "Quality Assurance",
                desc: "All parts meet rigorous industry standards",
              },
              {
                icon: <CheckCircle size={32} />,
                title: "Genuine Parts",
                desc: "Only genuine or OEM-approved parts",
              },
              {
                icon: <Star size={32} />,
                title: "Expert Advice",
                desc: "Decades of trucking industry experience",
              },
              {
                icon: <MapPin size={32} />,
                title: "Fast Delivery",
                desc: "Quick delivery across Zimbabwe",
              },
              {
                icon: <Award size={32} />,
                title: "Competitive Pricing",
                desc: "Premium parts at great prices",
              },
              {
                icon: <Headphones size={32} />,
                title: "24/7 Support",
                desc: "Technical team always available",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-red-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Tendai M.",
                role: "Fleet Manager, Harare",
                rating: 5,
                text: "Excellent service and genuine parts. Fast delivery and great technical support.",
              },
              {
                name: "Sarah K.",
                role: "Transport Owner",
                rating: 5,
                text: "Best prices in Zimbabwe and quality parts. My trucks run smoothly thanks to them.",
              },
              {
                name: "James N.",
                role: "Mechanic",
                rating: 5,
                text: "Professional service and authentic parts. They helped diagnose our fleet issues quickly.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="font-semibold text-red-600">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Ready to Keep Your Trucks Running Smoothly?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for expert advice and premium truck parts that
            won't let you down.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Request a Quote
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-3 rounded-lg transition-colors flex items-center justify-center">
              <Phone size={18} className="mr-2" /> Call Us Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-xl font-bold">
                  <span className="text-white">LUNAJ</span>
                </div>
                <div className="ml-2 grid grid-cols-6 gap-1">
                  {["M", "O", "T", "O", "R", "S"].map((letter, idx) => (
                    <div
                      key={idx}
                      className="w-5 h-5 bg-red-600 text-white text-xs font-bold flex items-center justify-center rounded"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted supplier for premium truck parts in Zimbabwe
              </p>
              <div className="flex space-x-4">
                <Facebook
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
                <Twitter
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
                <Instagram
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
                <Linkedin
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Engine Parts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Brake Systems
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Transmission
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Electrical
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin
                    size={16}
                    className="text-red-500 mr-2 flex-shrink-0"
                  />
                  <span className="text-gray-400 text-sm">
                    Harare, Zimbabwe
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone
                    size={16}
                    className="text-red-500 mr-2 flex-shrink-0"
                  />
                  <span className="text-gray-400 text-sm">
                    +263 XX XXX XXXX
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="text-red-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    info@lunajupitas.co.zw
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock
                    size={16}
                    className="text-red-500 mr-2 flex-shrink-0"
                  />
                  <span className="text-gray-400 text-sm">
                    Mon-Fri: 8AM-5PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 sm:mb-0">
                © 2025 Lunajupitas Motors Pvt Ltd. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Refund Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
