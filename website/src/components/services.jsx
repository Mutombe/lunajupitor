// Services Page Component
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {  Link } from 'react-router-dom';
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

const Services = () => {
  const services = [
    {
      title: "Parts Sourcing",
      description: "We specialize in sourcing both original and high-quality aftermarket parts from reputable suppliers to meet your specific needs.",
      icon: <Search size={48} className="text-blue-600" />,
      features: ["Genuine OEM parts", "Quality aftermarket options", "Global supplier network", "Competitive pricing"]
    },
    {
      title: "Delivery & Logistics",
      description: "Lunajupitas Motors offers fast and reliable delivery services across Zimbabwe, ensuring timely access to essential parts for your business operations.",
      icon: <Truck size={48} className="text-blue-600" />,
      features: ["Nationwide delivery", "Express shipping options", "Order tracking", "Secure packaging"]
    },
    {
      title: "Expert Advice & Support",
      description: "Our knowledgeable team is always available to assist with selecting the right parts and providing technical support for your specific requirements.",
      icon: <Headphones size={48} className="text-blue-600" />,
      features: ["Technical consultations", "Product recommendations", "Troubleshooting assistance", "Maintenance advice"]
    },
    {
      title: "Customer Service Excellence",
      description: "We are dedicated to delivering exceptional customer service and after-sales support, ensuring your complete satisfaction with every purchase.",
      icon: <Award size={48} className="text-blue-600" />,
      features: ["After-sales support", "Warranty claims", "Returns management", "Customer feedback system"]
    }
  ];

  return (
    <Container maxWidth="lg" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          At Lunajupitas Motors, we offer comprehensive solutions to keep your trucks running smoothly. 
          Our services are designed to provide you with the right parts and support when you need them most.
        </p>

        <Grid container spacing={6}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="text-green-500 mr-2" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-blue-600 text-white p-8 rounded-xl mt-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Need Assistance with Your Truck Parts?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you find the right parts and provide technical support for your specific needs.
          </p>
          <Button
            variant="contained"
            size="large"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
            component={Link}
            to="/contact"
          >
            Contact Us Today
          </Button>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Services;