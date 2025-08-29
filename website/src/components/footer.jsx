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
                    +263 777 220 420
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="text-red-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    info@lunajmotors.co.zw
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
  );
};

export default Footer;


