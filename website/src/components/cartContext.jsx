// contexts/CartContext.js
import React, { createContext, useContext, useReducer } from "react";
import { toast } from "sonner";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: Math.max(0, action.payload.quantity) }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success("Product added to cart!", {
      description: `${product.name} has been added to your shopping cart.`,
      duration: 3000,
      position: "top-right",
    });
  };

  const removeFromCart = (productId, productName) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
    toast.info("Product removed from cart", {
      description: `${productName} has been removed from your cart.`,
      duration: 3000,
      position: "top-right",
    });
  };

  const updateQuantity = (productId, quantity, productName, change) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity } });
    if (change > 0) {
      toast.success("Quantity increased", {
        description: `Increased quantity of ${productName}.`,
        duration: 2000,
        position: "top-right",
      });
    } else {
      toast.info("Quantity decreased", {
        description: `Decreased quantity of ${productName}.`,
        duration: 2000,
        position: "top-right",
      });
    }
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.info("Cart cleared", {
      description: "All items have been removed from your cart.",
      duration: 3000,
      position: "top-right",
    });
  };

  const getCartTotal = () => {
    return cartState.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getCartItemsCount = () => {
    return cartState.items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
