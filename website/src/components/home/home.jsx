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
  Wrench,
  Gift,
  Percent,
  Tag,
  Package,
  Zap,
  Car,
  Plus,
  Minus,
  Lock,
  CreditCard,
  Eye,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../cartContext";
import { useNavigate } from "react-router-dom";
import { products } from "../data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "Premium Engine Parts",
      subtitle: "High-Performance Solutions",
      description:
        "Genuine and OEM-quality engine components for maximum reliability",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&auto=format",
      cta: "Shop Engines",
      gradient: "from-blue-900 to-blue-700",
    },
    {
      id: 2,
      title: "Brake Systems",
      subtitle: "Safety First",
      description:
        "Professional-grade brake parts and components for all vehicle types",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format",
      cta: "View Brakes",
      gradient: "from-red-900 to-red-700",
    },
    {
      id: 3,
      title: "Transmission Parts",
      subtitle: "Smooth Performance",
      description:
        "Complete transmission solutions for commercial and heavy-duty vehicles",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop&auto=format",
      cta: "Explore Parts",
      gradient: "from-green-900 to-green-700",
    },
    {
      id: 4,
      title: "Electrical Components",
      subtitle: "Advanced Technology",
      description:
        "Modern electrical systems and components for today's vehicles",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format",
      cta: "See Electronics",
      gradient: "from-purple-900 to-purple-700",
    },
  ];

  const features = [
    { icon: Truck, text: "1000+ Brands" },
    { icon: Shield, text: "Quality Guaranteed" },
    { icon: Clock, text: "Fast Shipping" },
    { icon: Wrench, text: "Expert Support" },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient} transition-all duration-1000`}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-30"
          style={{ backgroundImage: `url(${currentSlideData.image})` }}
        />
      </div>

      {/* Navigation Arrows - Hidden on small screens */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 hidden sm:flex items-center justify-center"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 hidden sm:flex items-center justify-center"
      >
        <ChevronRight size={24} />
      </button>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* Slide Indicator Pills - Mobile Friendly */}
            <div className="flex justify-center mb-6 sm:mb-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`mx-1 w-8 h-2 sm:w-12 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white shadow-lg"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Slide Content */}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-white/80 font-medium tracking-wider uppercase">
                  {currentSlideData.subtitle}
                </p>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  {currentSlideData.title}
                </h1>
              </div>

              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                {currentSlideData.description}
              </p>

              {/* CTA Button */}
              <div className="pt-4 sm:pt-6">
                <button
                  className="bg-red-600 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
                  onClick={() => navigate("/products")}
                >
                  {currentSlideData.cta}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Search & Features */}
        <div className="bg-white/95 backdrop-blur-sm">
          {/* Quick Search Bar */}
          <div className="px-4 py-6 sm:py-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 text-center">
                Find Your Parts Quickly
              </h3>

              {/* Mobile-First Search Layout */}
              <div className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  <select className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl text-gray-800 font-medium focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select Brand</option>
                    <option>UD Trucks</option>
                    <option>Hino</option>
                    <option>Freightliner</option>
                    <option>Isuzu</option>
                    <option>Volvo</option>
                    <option>Mercedes</option>
                  </select>

                  <select className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl text-gray-800 font-medium focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Part Category</option>
                    <option>Engine Parts</option>
                    <option>Brake Systems</option>
                    <option>Transmission</option>
                    <option>Electrical</option>
                    <option>Suspension</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Enter part number..."
                    className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl text-gray-800 font-medium focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  className="w-full sm:w-auto mx-auto flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={() => navigate("/products")}
                >
                  <Search size={20} />
                  Search Parts
                </button>
              </div>
            </div>
          </div>

          {/* Features Bar */}
          <div className="border-t border-gray-200 px-4 py-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-2 text-gray-700"
                  >
                    <feature.icon size={18} className="text-red-600" />
                    <span className="text-sm sm:text-base font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Swipe Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 sm:hidden">
        <div className="bg-black/20 backdrop-blur-sm rounded-full px-3 py-2">
          <p className="text-white text-xs">
            {currentSlide + 1} / {slides.length}
          </p>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 18,
  });

  const { addToCart } = useCart();

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
      <ProductCarousel />

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
                icon: <Phone size={32} />,
                title: "Support 24/7",
                desc: "Expert advice",
              },
              {
                icon: <Shield size={32} />,
                title: "100% Safety",
                desc: "Only secure payments",
              },
              {
                icon: <Gift size={32} />,
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

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Interior Parts",
                subtitle: "Low prices guaranteed",
                bg: "from-blue-600 to-blue-700",
                image:
                  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop&auto=format",
              },
              {
                title: "Wheels Rim",
                subtitle: "Power looks of next level",
                bg: "from-teal-600 to-teal-700",
                image: "/rim.jpg",
              },
              {
                title: "Body Parts",
                subtitle: "For Any Vehicle",
                bg: "from-gray-600 to-gray-700",
                image: "/body.webp",
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`relative h-48 rounded-xl overflow-hidden bg-gradient-to-br ${category.bg} text-white group cursor-pointer`}
              >
                <div className="absolute inset-0 opacity-30 group-hover:opacity-20 transition-opacity">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between relative z-10">
                  <div>
                    <p className="text-sm opacity-90">{category.subtitle}</p>
                    <h3 className="text-2xl font-bold mt-1">
                      {category.title}
                    </h3>
                  </div>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors w-fit group-hover:scale-105 transform">
                    Shop Now
                  </button>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full flex items-center justify-center bg-opacity-20">
                  <Wrench className="w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              {
                name: "Body Parts",
                icon: "🚗",
                image: "/body.webp",
              },
              {
                name: "Headlights & Lighting",
                icon: "💡",
                image: "/head.jpg",
              },
              {
                name: "Brakes & Suspension",
                icon: "🔧",
                image: "/brake1.webp",
              },
              {
                name: "Engine & Drivetrain",
                icon: "⚙️",
                image:
                  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=200&h=200&fit=crop&auto=format",
              },
              {
                name: "Tools & Garage",
                icon: "🔨",
                image:
                  "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=200&h=200&fit=crop&auto=format",
              },
              {
                name: "Interior Parts",
                icon: "🪑",
                image: "/interior.jpg",
              },
              {
                name: "Filters & Fluids",
                icon: "🛢️",
                image: "/fluids.webp",
              },
              {
                name: "Electrical Parts",
                icon: "⚡",
                image: "/electric.webp",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
              >
                <div className="relative h-32 sm:h-40 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-2 right-2 text-2xl bg-white rounded-full p-2 shadow-md">
                    {category.icon}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-sm sm:text-base text-gray-900 group-hover:text-red-600 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Special Offers
              </h2>
              <p className="text-gray-600">
                Best prices guaranteed • Limited time deals
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock size={16} />
                <span>
                  Ends in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}
                  m
                </span>
              </div>
              <div className="flex space-x-2">
                <button className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  ←
                </button>
                <button className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 hover:text-red-600 transition-colors">
                      <Heart size={16} className="text-gray-400" />
                    </button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <div className="bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                      -{product.discount}%
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      In Stock
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-500 text-sm font-medium">
                      {product.brand}
                    </p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-gray-400 text-sm">
                        ${product.originalPrice}
                      </span>
                      <span className="text-gray-400 line-through text-sm">
                        $
                        {(product.price / (1 - product.discount / 100)).toFixed(
                          2
                        )}
                      </span>
                    </div>
                    <div className="text-green-600 text-sm font-medium">
                      Save ${product.savings}
                    </div>
                  </div>
                  <button
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart size={16} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-gray-100 hover:bg-red-600 hover:text-white text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-gray-300">
              View All Special Offers →
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-500 to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🔥 LIMITED TIME OFFER
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Special Offer
              </h2>
              <div className="flex items-baseline justify-center lg:justify-start mb-4">
                <span className="text-5xl sm:text-6xl font-bold text-orange-300">
                  20%
                </span>
                <span className="text-2xl ml-2">OFF</span>
              </div>
              <p className="text-lg sm:text-xl mb-6 opacity-90">
                On all brake system parts this month
              </p>
              <div className="flex justify-center lg:justify-start items-center mb-8 space-x-2 sm:space-x-4">
                <div className="bg-red-800/80 backdrop-blur-sm px-3 sm:px-4 py-3 rounded-xl text-center border border-red-500/30">
                  <span className="text-xl sm:text-2xl font-bold block">
                    {timeLeft.days.toString().padStart(2, "0")}
                  </span>
                  <p className="text-xs sm:text-sm opacity-80">Days</p>
                </div>
                <div className="bg-red-800/80 backdrop-blur-sm px-3 sm:px-4 py-3 rounded-xl text-center border border-red-500/30">
                  <span className="text-xl sm:text-2xl font-bold block">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </span>
                  <p className="text-xs sm:text-sm opacity-80">Hours</p>
                </div>
                <div className="bg-red-800/80 backdrop-blur-sm px-3 sm:px-4 py-3 rounded-xl text-center border border-red-500/30">
                  <span className="text-xl sm:text-2xl font-bold block">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </span>
                  <p className="text-xs sm:text-sm opacity-80">Mins</p>
                </div>
                <div className="bg-red-800/80 backdrop-blur-sm px-3 sm:px-4 py-3 rounded-xl text-center border border-red-500/30">
                  <span className="text-xl sm:text-2xl font-bold block">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </span>
                  <p className="text-xs sm:text-sm opacity-80">Secs</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Shop Brake Parts Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                  View All Offers
                </button>
              </div>
            </div>
            <div className="text-center relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-3xl opacity-30"></div>
                <div className="relative bg-red-700/30 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format"
                    alt="Brake Parts Special Offer"
                    className="w-full h-64 object-cover rounded-xl shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg">
                    <Percent size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                icon: <Truck size={32} />,
                title: "Fast Delivery",
                desc: "Quick delivery across Zimbabwe",
              },
              {
                icon: <Gift size={32} />,
                title: "Competitive Pricing",
                desc: "Premium parts at great prices",
              },
              {
                icon: <Phone size={32} />,
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
    </div>
  );
};

export default Home;
