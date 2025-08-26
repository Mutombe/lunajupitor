import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  Truck,
  Clock,
  Shield,
  Star,
  ArrowRight,
  Search,
  ShoppingCart,
  User,
  MapPin,
  Headphones,
  Award,
  CheckCircle,
  Expand,
  Filter,
  Calendar,
  Settings,
  Heart,
  Eye,
  ArrowLeft,
  Check,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronDown,
  Package,
  Wrench,
  Car,
  Zap,
} from "lucide-react";

const Logo = () => (
  <div className="flex items-center">
    <div className="flex-shrink-0">
      <div className="flex items-center">
        <div className="text-2xl font-bold">
          <span className="text-black">LNJ</span>
        </div>
        <div className="ml-2 grid grid-cols-6 gap-1">
          {["M", "O", "T", "O", "R", "S"].map((letter, idx) => (
            <div
              key={idx}
              className="w-6 h-6 bg-red-600 text-white text-xs font-bold flex items-center justify-center rounded"
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Enhanced Navbar Component
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Brands", path: "/brands" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const categories = [
    { name: "Engine Parts", icon: <Car size={16} />, count: "2.5k+" },
    { name: "Transmission", icon: <Wrench size={16} />, count: "1.8k+" },
    { name: "Brake Systems", icon: <Shield size={16} />, count: "3.2k+" },
    { name: "Suspension", icon: <Package size={16} />, count: "1.5k+" },
    { name: "Electrical", icon: <Zap size={16} />, count: "900+" },
    { name: "Filters", icon: <Filter size={16} />, count: "1.2k+" },
    { name: "Body Parts", icon: <Car size={16} />, count: "2.1k+" },
    { name: "Tools & Garage", icon: <Wrench size={16} />, count: "800+" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <span className="hidden sm:inline flex items-center gap-1">
              🚚 Free shipping on orders over $500
            </span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">
              <Headphones size={14} />
              Expert advice: +263 777 220 420
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
        <div className="container mx-auto px-4">
          {/* Main Toolbar */}
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="px-4 py-2 rounded-xl text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium transition-all duration-200 text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for truck parts..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 text-sm"
                />
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-2">
              <button className="p-2 hover:bg-red-50 rounded-xl transition-colors duration-200">
                <Heart className="h-5 w-5 text-gray-600 hover:text-red-600" />
              </button>
              <button className="p-2 hover:bg-red-50 rounded-xl transition-colors duration-200 relative">
                <ShoppingCart className="h-5 w-5 text-gray-600 hover:text-red-600" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  3
                </span>
              </button>
              <button className="p-2 hover:bg-red-50 rounded-xl transition-colors duration-200">
                <User className="h-5 w-5 text-gray-600 hover:text-red-600" />
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-colors duration-200 text-sm">
                Get Quote
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center space-x-2">
              <button 
                onClick={handleSearchToggle}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Search className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
                  3
                </span>
              </button>
              <button 
                onClick={handleDrawerToggle}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            searchOpen ? 'max-h-20 pb-4' : 'max-h-0'
          }`}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for truck parts..."
                className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200"
                autoFocus={searchOpen}
              />
              <button 
                onClick={handleSearchToggle}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Category Navigation - Desktop */}
          <div className="hidden lg:flex items-center justify-center py-3 space-x-2 overflow-x-auto">
            {categories.slice(0, 7).map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(activeCategory === category.name ? '' : category.name)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === category.name
                    ? 'bg-red-50 border-red-200 text-red-700'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-red-200 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className="text-xs text-red-600 font-semibold">
                  {category.count}
                </span>
              </button>
            ))}
            <button className="flex items-center space-x-1 px-3 py-2 text-red-600 hover:text-red-700 font-medium text-sm">
              <span>View All</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Category Navigation - Tablet */}
          <div className="hidden md:flex lg:hidden items-center py-3 space-x-2 overflow-x-auto scrollbar-hide">
            {categories.slice(0, 5).map((category) => (
              <button
                key={category.name}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-full border border-gray-200 text-sm font-medium whitespace-nowrap hover:border-red-200 hover:text-red-600 transition-colors"
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-50 ${mobileOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            mobileOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={handleDrawerToggle}
        />
        
        {/* Drawer */}
        <div className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <Logo />
            <button 
              onClick={handleDrawerToggle}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex flex-col h-full">
            {/* Mobile Search */}
            <div className="p-4 border-b border-gray-100">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for truck parts..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-red-500 transition-all duration-200"
                />
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 py-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="flex items-center justify-between mx-4 my-1 px-4 py-3 rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium transition-all duration-200"
                  onClick={handleDrawerToggle}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: mobileOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                  }}
                >
                  <span>{item.name}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}

              {/* Categories in Mobile */}
              <div className="mx-4 my-2">
                <button
                  onClick={() => setCategoriesOpen(!categoriesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-all duration-200"
                >
                  <span>Categories</span>
                  <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${
                    categoriesOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  categoriesOpen ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="py-2">
                    {categories.slice(0, 6).map((category, index) => (
                      <a
                        key={category.name}
                        href="#"
                        className="flex items-center space-x-3 px-8 py-2.5 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                      >
                        {category.icon}
                        <div className="flex-1">
                          <div className="text-sm font-medium">{category.name}</div>
                          <div className="text-xs text-red-600 font-semibold">{category.count}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Contact & Actions */}
            <div className="border-t border-gray-100 p-4">
              <div className="space-y-3 mb-4">
                <a
                  href="tel:+263777220420"
                  className="flex items-center space-x-3 text-red-600 p-3 rounded-xl hover:bg-red-50 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">+263 777 220 420</span>
                </a>
                <a
                  href="mailto:tinoembara@gmail.com"
                  className="flex items-center space-x-3 text-red-600 p-3 rounded-xl hover:bg-red-50 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-semibold">tinoembara@gmail.com</span>
                </a>
              </div>
              
              <div className="space-y-2">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-colors">
                  Get Quote
                </button>
                <button className="w-full border border-red-600 text-red-600 hover:bg-red-50 py-3 rounded-xl font-semibold transition-colors">
                  My Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
   </>  
  );
}

export default Navbar;