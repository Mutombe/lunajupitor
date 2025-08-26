import React, { useState } from "react";
import {
  ShoppingCart,
  Plus,
  Minus,
  X,
  Heart,
  ArrowLeft,
  Truck,
  Shield,
  Clock,
  Star,
  CreditCard,
  Eye,
  Lock,
  CheckCircle,
  AlertCircle,
  Gift,
  Percent,
  Tag,
  Package,
} from "lucide-react";

const Logo = () => (
  <div className="flex items-center">
    <div className="flex-shrink-0">
      <div className="flex items-center">
        <div className="text-2xl font-bold">
          <span className="text-black">LUNAJ</span>
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

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Toyota Camry Engine Oil Filter",
      part: "15208-65F0C",
      brand: "Toyota OEM",
      price: 24.99,
      quantity: 2,
      inStock: true,
      warranty: "12 months",
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 2,
      name: "Mercedes Benz Brake Pads Set",
      part: "A0044206920",
      brand: "Genuine MB",
      price: 189.99,
      quantity: 1,
      inStock: true,
      warranty: "24 months",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Ford F-150 Air Filter",
      part: "FL-820-S",
      brand: "Motorcraft",
      price: 32.45,
      quantity: 1,
      inStock: false,
      warranty: "6 months",
      rating: 4.6,
      reviews: 203,
      estimatedDelivery: "3-5 business days",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [showPromoInput, setShowPromoInput] = useState(false);

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(0, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setAppliedPromo({ code: "SAVE10", discount: 0.1, description: "10% off entire order" });
      setShowPromoInput(false);
      setPromoCode("");
    } else {
      alert("Invalid promo code. Try 'SAVE10' for 10% off!");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const promoDiscount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  const shipping = subtotal > 500 ? 0 : 25.00;
  const tax = (subtotal - promoDiscount) * 0.08;
  const total = subtotal - promoDiscount + shipping + tax;

  const isEmpty = cartItems.length === 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <Logo />
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
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <span>Home</span>
          <span>/</span>
          <span className="text-red-600 font-medium">Shopping Cart</span>
        </div>

        {/* Page Title */}
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
          /* Empty Cart State */
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
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                        <Package className="h-8 w-8 md:h-10 md:w-10 text-gray-400" />
                      </div>
                    </div>

                    {/* Product Details */}
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
                          onClick={() => removeItem(item.id)}
                          className="p-1 md:p-2 hover:bg-red-50 rounded-lg transition-colors group"
                        >
                          <X className="h-4 w-4 text-gray-400 group-hover:text-red-600" />
                        </button>
                      </div>

                      {/* Price and Quantity */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-center justify-between sm:justify-start sm:gap-4">
                          <div className="text-lg md:text-xl font-bold text-red-600">
                            ${item.price.toFixed(2)}
                          </div>
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
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-2 hover:bg-gray-200 rounded-l-xl transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
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

              {/* Promo Code Section */}
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
                      onClick={() => setAppliedPromo(null)}
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

            {/* Order Summary */}
            <div className="space-y-4">
              {/* Summary Card */}
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 sticky top-24">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-red-600" />
                  Order Summary
                </h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {appliedPromo && (
                    <div className="flex justify-between text-green-600">
                      <span>Promo Discount ({appliedPromo.code})</span>
                      <span>-${promoDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-gray-600">
                    <span className="flex items-center gap-1">
                      Shipping
                      {shipping === 0 && (
                        <span className="text-xs text-green-600 font-medium">(FREE)</span>
                      )}
                    </span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between text-lg md:text-xl font-bold text-gray-900">
                      <span>Total</span>
                      <span className="text-red-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                {shipping > 0 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-blue-800">
                      <Truck className="h-4 w-4" />
                      <span>Add ${(500 - subtotal).toFixed(2)} more for FREE shipping!</span>
                    </div>
                    <div className="mt-2 bg-blue-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((subtotal / 500) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                <div className="space-y-3">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-colors duration-200 flex items-center justify-center gap-2">
                    <Lock className="h-4 w-4" />
                    Proceed to Checkout
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

              {/* Trust Badges */}
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

              {/* Recently Viewed */}
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

        {/* Mobile Checkout Bar */}
        {!isEmpty && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-20">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-gray-600">
                Total ({cartItems.length} items)
              </div>
              <div className="text-lg font-bold text-red-600">
                ${total.toFixed(2)}
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