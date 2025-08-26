// About Page Component
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
  Expand, Filter, Calendar,  Settings,
  ArrowLeft, Check, Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <Container maxWidth="lg" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Lunajupitas Motors</h1>
            <p className="text-xl max-w-3xl">
              Your trusted partner for premium truck parts and exceptional service in Zimbabwe
            </p>
          </motion.div>
        </Container>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </section>

      <Container maxWidth="lg" className="py-16">
        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Lunajupitas Motors is a premier supplier of high-quality spare parts for UD, Hino, and
                Freightliner trucks in Zimbabwe. Established with the aim of providing reliable and durable
                automotive components, we have built a solid reputation in the transport and logistics sector for
                delivering high-performance truck parts that keep vehicles operating efficiently.
              </p>
              <p className="text-gray-600 mb-4">
                Our product range includes both genuine and aftermarket parts, offering a comprehensive
                selection that ensures our customers' vehicles are always in peak condition. Our team of
                experienced professionals is committed to providing top-notch service and expert advice,
                making Lunajupitas Motors the trusted choice for businesses that rely on heavy-duty trucks.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl h-64 md:h-auto">
              {/* Placeholder for company image */}
              <div className="w-full h-full flex items-center justify-center bg-blue-100 rounded-xl">
                <Truck size={64} className="text-blue-600" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <div className="bg-white p-6 rounded-xl shadow-md h-full">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Our Mission</h3>
                <p className="text-gray-600">
                  To provide reliable, high-quality truck parts and exceptional service that keeps our customers' 
                  vehicles operating at peak performance, while building lasting relationships based on trust and value.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="bg-white p-6 rounded-xl shadow-md h-full">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading supplier of truck parts in Zimbabwe, recognized for our product quality, 
                  technical expertise, and commitment to customer satisfaction in the transport industry.
                </p>
              </div>
            </Grid>
          </Grid>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <Grid container spacing={4}>
            {[
              {
                title: "Quality",
                description: "We are committed to providing only the highest quality parts that meet rigorous industry standards.",
                icon: <Shield size={32} className="text-blue-600" />
              },
              {
                title: "Integrity",
                description: "We conduct our business with honesty and transparency, building trust with our customers and partners.",
                icon: <CheckCircle size={32} className="text-blue-600" />
              },
              {
                title: "Expertise",
                description: "Our team possesses deep knowledge of truck parts and provides expert advice to our customers.",
                icon: <Award size={32} className="text-blue-600" />
              },
              {
                title: "Customer Focus",
                description: "We prioritize our customers' needs and strive to exceed their expectations in every interaction.",
                icon: <User size={32} className="text-blue-600" />
              },
              {
                title: "Reliability",
                description: "We ensure that our products and services are dependable, providing consistent value to our customers.",
                icon: <Clock size={32} className="text-blue-600" />
              },
              {
                title: "Innovation",
                description: "We continuously seek better solutions and improvements in our products and services.",
                icon: <Settings size={32} className="text-blue-600" />
              }
            ].map((value, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <div className="bg-white p-6 rounded-xl shadow-md text-center h-full">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Our team of experienced professionals is dedicated to providing you with the best products and service. 
            With extensive knowledge of truck parts and the local market, we're here to help you keep your vehicles running smoothly.
          </p>
          <Grid container spacing={4}>
            {[
              { name: "John Doe", position: "Founder & CEO", bio: "With over 15 years in the automotive industry..." },
              { name: "Jane Smith", position: "Technical Director", bio: "Specializes in heavy-duty truck systems..." },
              { name: "Robert Johnson", position: "Sales Manager", bio: "Dedicated to building customer relationships..." },
              { name: "Sarah Williams", position: "Logistics Coordinator", bio: "Ensures timely delivery of parts..." }
            ].map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User size={40} className="text-gray-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </div>
  );
};

export default About;