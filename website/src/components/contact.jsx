// Contact Page Component
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert('Thank you for your message. We will get back to you soon!');
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl">
              Get in touch with our team for expert advice, quotes, or any questions about our products and services
            </p>
          </motion.div>
        </Container>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </section>

      <Container maxWidth="lg" className="py-16">
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our products or services? Fill out the form and our team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mt-1 mr-4" size={20} />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">150 North Way, Prospect, Harare, Zimbabwe</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-blue-600 mr-4" size={20} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+263 777 220 420</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-blue-600 mr-4" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">tinoembara@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-200 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-200 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-200 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-200 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section */}
      <div className="bg-gray-100 py-8">
        <Container maxWidth="lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">Our Location</h3>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">150 North Way, Prospect, Harare, Zimbabwe</p>
                <Button variant="outlined" color="primary" className="mt-4">
                  Open in Maps
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

// Footer Component

export default Contact;