// Footer Page Component
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
  Expand, Filter, Calendar,Settings,
  ArrowLeft, Check, Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <h3 className="text-xl font-bold mb-4">Lunajupitas Motors</h3>
            <p className="mb-4">
              Premier supplier of high-quality spare parts for UD, Hino, and Freightliner trucks in Zimbabwe.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+263777220420" className="flex items-center gap-2">
                <Phone size={18} /> +263 777 220 420
              </a>
              <a href="mailto:tinoembara@gmail.com" className="flex items-center gap-2">
                <Mail size={18} /> tinoembara@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={18} /> 150 North Way, Prospect, Harare, Zimbabwe
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link to="/products" className="hover:text-blue-300">Products</Link></li>
              <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
              <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <h3 className="text-xl font-bold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">UD Truck Parts</a></li>
              <li><a href="#" className="hover:text-blue-300">Hino Truck Parts</a></li>
              <li><a href="#" className="hover:text-blue-300">Freightliner Parts</a></li>
              <li><a href="#" className="hover:text-blue-300">Engine Components</a></li>
              <li><a href="#" className="hover:text-blue-300">Transmission Systems</a></li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex">
              <TextField 
                placeholder="Your email" 
                size="small"
                className="bg-white rounded-r-none"
              />
              <Button variant="contained" color="primary" className="bg-blue-600 rounded-l-none">
                Subscribe
              </Button>
            </div>
          </Grid>
        </Grid>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Lunajupitas Motors. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;