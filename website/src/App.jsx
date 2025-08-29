import React from "react";
import { useEffect } from "react";
import Products from "./components/projects";
import Home from "./components/home/home";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import Services from "./components/services";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import CartPage from "./components/cart";
import { CartProvider } from "./components/cartContext";
import { Toaster } from "sonner";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Toaster position="top-right" richColors closeButton />
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
