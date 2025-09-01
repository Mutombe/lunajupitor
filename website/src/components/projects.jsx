import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Chip,
  useMediaQuery,
  useTheme,
  Tab,
  Tabs,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
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
  ArrowLeft,
  Check,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { products } from "./data";
import { useCart } from "./cartContext";
import { Package } from "lucide-react";
import ImagePreview, { useImagePreview } from "./home/imagePreview";

// Products Page Component
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { preview, openPreview, closePreview } = useImagePreview();
  const { addToCart } = useCart();

  const categories = [
    { id: "ud", name: "UD Truck Parts" },
    { id: "hino", name: "Hino Truck Parts" },
    { id: "freightliner", name: "Freightliner Parts" },
    { id: "engine", name: "Engine Components" },
    { id: "transmission", name: "Transmission Systems" },
    { id: "electrical", name: "Electrical Systems" },
    { id: "body", name: "Body Parts" },
    { id: "interior", name: "Interior Parts" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Our Products</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Explore our comprehensive range of high-quality truck parts for UD,
        Hino, and Freightliner vehicles. We offer both genuine and aftermarket
        parts to meet your specific needs.
      </p>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedCategory === "all"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category.id
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gray-200 overflow-hidden">
              <div
                className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                onClick={() =>
                  openPreview(
                    product.image,
                    product.name,
                    product.name,
                    `Brand: ${product.brand} | Price: $${product.price}`
                  )
                }
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {product.brand}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Premium quality part for optimal performance
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-red-600">
                  ${product.price}
                </span>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found in this category.</p>
        </div>
      )}

      {/* Add the ImagePreview component */}
      <ImagePreview
        isOpen={preview.isOpen}
        onClose={closePreview}
        src={preview.src}
        alt={preview.alt}
        title={preview.title}
        description={preview.description}
      />
    </div>
  );
};

export default Products;
