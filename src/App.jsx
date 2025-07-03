<<<<<<< HEAD
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import "./index.css";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Navbar onLoginClick={() => setShowLoginModal(true)} />
=======
"use client"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedProperties from "./components/FeaturedProperties"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import "./index.css"

function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Navbar />
>>>>>>> 5362af6d56ad599016ecc4de6e933af2b096fa8d
      <Hero />
      <FeaturedProperties />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
<<<<<<< HEAD
      <LoginModal show={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
}

export default App;
=======
    </div>
  )
}

export default App
>>>>>>> 5362af6d56ad599016ecc4de6e933af2b096fa8d
