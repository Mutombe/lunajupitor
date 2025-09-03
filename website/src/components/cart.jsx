import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';
import { 
  ShoppingCart, Plus, Minus, X, Heart, ArrowLeft, Truck, Shield, 
  Clock, Star, CreditCard, Eye, Lock, CheckCircle, AlertCircle, 
  Gift, Percent, Tag, Package, Search, User, Menu, Phone, Mail,
  Facebook, Twitter, Instagram, Linkedin, ChevronDown, Wrench, Car, Zap, Filter
} from 'lucide-react';
import { useCart } from './cartContext';
import { toast } from 'sonner';

const CartPage = () => {
  const { items: cartItems, updateQuantity, removeFromCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [showPromoInput, setShowPromoInput] = useState(false);

  const handleQuantityChange = (id, change) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + change, item.name, change);
    }
  };

  const handleRemoveItem = (id, name) => {
    removeFromCart(id, name);
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setAppliedPromo({ code: "SAVE10", discount: 0.1, description: "10% off entire order" });
      setShowPromoInput(false);
      setPromoCode("");
      toast.success('Promo code applied!', {
        description: 'You got 10% off your entire order.',
        duration: 3000,
        position: 'top-right',
      });
    } else {
      toast.error('Invalid promo code', {
        description: "Try 'SAVE10' for 10% off!",
        duration: 3000,
        position: 'top-right',
      });
    }
  };

  const generateOrderMessage = () => {
    const orderDetails = cartItems.map(item => 
      `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`
    ).join('%0A');
    
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const promoDiscount = appliedPromo ? subtotal * appliedPromo.discount : 0;
    const shipping = subtotal > 500 ? 0 : 25.00;
    const tax = (subtotal - promoDiscount) * 0.08;
    const total = subtotal - promoDiscount + shipping + tax;
    
    return `Hello, I would like to order:%0A%0A${orderDetails}%0A%0ATotal: $${total.toFixed(2)}%0A%0APlease contact me to complete this order.`;
  };

  const redirectToWhatsApp = () => {
    const message = generateOrderMessage();
    window.open(`https://wa.me/263781287889?text=${message}`, '_blank');
    toast.success('Redirecting to WhatsApp', {
      description: 'You will be redirected to WhatsApp to complete your order.',
      duration: 3000,
      position: 'top-right',
    });
  };

  const redirectToEmail = () => {
    const message = generateOrderMessage().replace(/%0A/g, '\n');
    const subject = 'Order Inquiry - LunaJ Motors';
    window.location.href = `mailto:tinoembara@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    toast.success('Opening email client', {
      description: 'You will be redirected to your email to complete your order.',
      duration: 3000,
      position: 'top-right',
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const promoDiscount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  const shipping = subtotal > 500 ? 0 : 25.00;
  const tax = (subtotal - promoDiscount) * 0.08;
  const total = subtotal - promoDiscount + shipping + tax;

  const isEmpty = cartItems.length === 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => window.history.back()}>
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-1 text-gray-600">
                  <Shield className="h-4 w-4" />
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <Truck className="h-4 w-4" />
                  <span>Free Shipping $500+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <span>Home</span>
          <span>/</span>
          <span className="text-red-600 font-medium">Shopping Cart</span>
        </div>

        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <ShoppingCart className="h-6 w-6 md:h-8 md:w-8 text-red-600" />
            Shopping Cart
            {!isEmpty && (
              <span className="text-lg md:text-xl text-gray-600 font-normal">
                ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
              </span>
            )}
          </h1>
        </div>

        {isEmpty ? (
          <div className="text-center py-12 md:py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingCart className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any truck parts to your cart yet. 
              Start shopping to find the perfect parts for your vehicle.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200"
              onClick={() => window.location.href = '/products'}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                        <img src={item.image} alt={item.name} className="max-w-full max-h-full" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm md:text-base leading-tight mb-1">
                            {item.name}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-600 mb-2">
                            <span>Part: {item.part}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{item.brand}</span>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 fill-current" />
                              <span className="text-xs md:text-sm font-medium">{item.rating}</span>
                              <span className="text-xs text-gray-500">({item.reviews})</span>
                            </div>
                            <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              item.inStock 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-orange-100 text-orange-800'
                            }`}>
                              {item.inStock ? (
                                <>
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  In Stock
                                </>
                              ) : (
                                <>
                                  <Clock className="h-3 w-3 mr-1" />
                                  {item.estimatedDelivery}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleRemoveItem(item.id, item.name)}
                          className="p-1 md:p-2 hover:bg-red-50 rounded-lg transition-colors group"
                        >
                          <X className="h-4 w-4 text-gray-400 group-hover:text-red-600" />
                        </button>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-center justify-between sm:justify-start sm:gap-4">
                          <div className="text-xs text-gray-500">
                            {item.warranty} warranty
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between sm:justify-end gap-4">
                          <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                            <Heart className="h-4 w-4 text-gray-400 hover:text-red-600" />
                          </button>
                          <div className="flex items-center bg-gray-100 rounded-xl">
                            <button 
                              onClick={() => handleQuantityChange(item.id, -1)}
                              className="p-2 hover:bg-gray-200 rounded-l-xl transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => handleQuantityChange(item.id, 1)}
                              className="p-2 hover:bg-gray-200 rounded-r-xl transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Tag className="h-5 w-5 text-red-600" />
                    Promo Code
                  </h3>
                  {!showPromoInput && !appliedPromo && (
                    <button 
                      onClick={() => setShowPromoInput(true)}
                      className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
                    >
                      Add Code
                    </button>
                  )}
                </div>
                
                {appliedPromo ? (
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="font-medium text-green-800">{appliedPromo.code}</div>
                        <div className="text-sm text-green-600">{appliedPromo.description}</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setAppliedPromo(null);
                        toast.info('Promo code removed', {
                          description: 'Your discount has been removed.',
                          duration: 3000,
                          position: 'top-right',
                        });
                      }}
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : showPromoInput && (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter promo code (try SAVE10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none"
                      onKeyPress={(e) => e.key === 'Enter' && applyPromoCode()}
                    />
                    <button 
                      onClick={applyPromoCode}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl font-medium transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 sticky top-24">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-red-600" />
                  Order Summary
                </h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cartItems.length} items)</span>
                  </div>
                  
                  {appliedPromo && (
                    <div className="flex justify-between text-green-600">
                      <span>Promo Discount ({appliedPromo.code})</span>
                      <span>-${promoDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-gray-600">
                  </div>
                
                </div>
                
                {shipping > 0 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-blue-800">
                      <Truck className="h-4 w-4" />
                      <span> FREE shipping!</span>
                    </div>
                    <div className="mt-2 bg-blue-200 rounded-full h-2">
                    </div>
                  </div>
                )}
                
                <div className="space-y-3">
                  <button 
                    onClick={redirectToWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Order via WhatsApp</span>
                  </button>
                  
                  <button 
                    onClick={redirectToEmail}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Order via Email</span>
                  </button>
                  
                  <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 py-2 md:py-3 rounded-xl font-medium transition-colors duration-200">
                    Continue Shopping
                  </button>
                </div>
                
                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>256-bit SSL encryption</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Why Shop With Us?
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: <Truck className="h-4 w-4" />, text: "Free shipping on orders $500+", color: "text-blue-600" },
                    { icon: <Shield className="h-4 w-4" />, text: "Genuine OEM & aftermarket parts", color: "text-green-600" },
                    { icon: <Clock className="h-4 w-4" />, text: "Fast 2-3 day delivery", color: "text-orange-600" },
                    { icon: <Heart className="h-4 w-4" />, text: "30-day easy returns", color: "text-red-600" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <div className={item.color}>{item.icon}</div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-gray-600" />
                  Recently Viewed
                </h3>
                <div className="space-y-2">
                  {[
                    "BMW X5 Headlight Assembly",
                    "Honda Civic Brake Rotors",
                  ].map((item, index) => (
                    <button key={index} className="w-full text-left p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-red-600 hover:text-red-700">
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {!isEmpty && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-20">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-gray-600">
                Total ({cartItems.length} items)
              </div>
            </div>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
              <Lock className="h-4 w-4" />
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


export default CartPage;
