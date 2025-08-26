



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText,
  Box, Container, Grid, Card, CardContent, Typography, Button,
  TextField, Chip, useMediaQuery, useTheme, Tab, Tabs, CardMedia,
  Accordion, AccordionSummary, AccordionDetails, Divider
} from '@mui/material';
import { 
  Menu, X, Phone, Mail, Truck, Clock, Shield, Star, ArrowRight,
  Search, ShoppingCart, User, MapPin, Headphones, Award, CheckCircle,
  Expand, Filter, Calendar, Settings,
  ArrowLeft, Check, Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react';

// Products Page Component
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'ud', name: 'UD Truck Parts' },
    { id: 'hino', name: 'Hino Truck Parts' },
    { id: 'freightliner', name: 'Freightliner Parts' },
    { id: 'engine', name: 'Engine Components' },
    { id: 'transmission', name: 'Transmission Systems' },
    { id: 'electrical', name: 'Electrical Systems' },
    { id: 'body', name: 'Body Parts' },
    { id: 'interior', name: 'Interior Parts' },
  ];

  const products = [
    { 
      id: 1, 
      name: 'Engine Pistons Set', 
      category: 'engine', 
      brand: 'UD',
      price: 420,
      image: '/piston.jpg'
    },
    { 
      id: 2, 
      name: 'Transmission Kit', 
      category: 'transmission', 
      brand: 'Hino',
      price: 680,
      image: '/transmission.jpg'
    },
    { 
      id: 3, 
      name: 'Headlight Assembly', 
      category: 'body', 
      brand: 'Freightliner',
      price: 320,
      image: '/headlight.webp'
    },
    { 
      id: 4, 
      name: 'Brake System Kit', 
      category: 'engine', 
      brand: 'UD',
      price: 540,
      image: 'breaks.jpg'
    },
    { 
      id: 5, 
      name: 'Dashboard Panel', 
      category: 'interior', 
      brand: 'Hino',
      price: 380,
      image: '/dashboard.webp'
    },
    { 
      id: 6, 
      name: 'Fuel Filter', 
      category: 'engine', 
      brand: 'Freightliner',
      price: 85,
      image: '/filter.webp'
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Container maxWidth="lg" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">Our Products</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Explore our comprehensive range of high-quality truck parts for UD, Hino, and Freightliner vehicles. 
          We offer both genuine and aftermarket parts to meet your specific needs.
        </p>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <Chip
              label="All Products"
              onClick={() => setSelectedCategory('all')}
              color={selectedCategory === 'all' ? 'primary' : 'default'}
              className={selectedCategory === 'all' ? 'bg-blue-600 text-white' : ''}
            />
            {categories.map(category => (
              <Chip
                key={category.id}
                label={category.name}
                onClick={() => setSelectedCategory(category.id)}
                color={selectedCategory === category.id ? 'primary' : 'default'}
                className={selectedCategory === category.id ? 'bg-blue-600 text-white' : ''}
              />
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <Grid container spacing={4}>
          {filteredProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {product.brand}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Premium quality part for optimal performance</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <Button variant="contained" color="primary" size="small">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </motion.div>
    </Container>
  );
};

export default Products;