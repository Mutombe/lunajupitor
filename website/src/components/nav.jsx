import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
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
  Badge,
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
  Heart,
  Eye,
  ArrowLeft,
  Check,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
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

// Navbar Component
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Brands", path: "/brands" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const categories = [
    "Engine Parts",
    "Transmission",
    "Brake Systems",
    "Suspension",
    "Electrical",
    "Filters",
    "Body Parts",
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", py: 4 }}>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              justifyContent: "center",
              color: location.pathname === item.path ? "#2563eb" : "inherit",
              fontWeight: location.pathname === item.path ? "bold" : "normal",
            }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 4 }}>
        <a
          href="tel:+263777220420"
          className="flex items-center justify-center gap-2 text-blue-600 mb-2"
        >
          <Phone size={18} /> +263 777 220 420
        </a>
        <a
          href="mailto:tinoembara@gmail.com"
          className="flex items-center justify-center gap-2 text-blue-600"
        >
          <Mail size={18} /> tinoembara@gmail.com
        </a>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Top Announcement Bar */}
      <Box
        sx={{
          bgcolor: "#1e40af",
          color: "white",
          py: 0.5,
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        <Container maxWidth="lg">
          Free shipping on orders over $500 | Expert advice: +263 777 220 420
        </Container>
      </Box>

      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          py: 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>

            {/* Search Bar */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                mx: 4,
                maxWidth: "500px",
              }}
            >
              <div className="relative w-full">
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search for truck parts..."
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <Search size={20} className="text-gray-400 mr-2" />
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "30px",
                      backgroundColor: "#f8fafc",
                    },
                  }}
                />
              </div>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <IconButton>
                <Heart size={20} />
              </IconButton>
              <IconButton>
                <Badge badgeContent={3} color="primary">
                  <ShoppingCart size={20} />
                </Badge>
              </IconButton>
              <IconButton>
                <User size={20} />
              </IconButton>
              <Button
                variant="contained"
                color="primary"
                className="bg-blue-600"
              >
                Get Quote
              </Button>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <Menu />
            </IconButton>
          </Toolbar>

          {/* Category Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              mt: 1,
              overflowX: "auto",
              py: 1,
            }}
          >
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                variant="outlined"
                sx={{ mx: 0.5, borderRadius: "16px" }}
                clickable
              />
            ))}
          </Box>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ position: "absolute", right: 8, top: 8, zIndex: 1 }}
        >
          <X />
        </IconButton>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
