
import React from 'react';
import { Hero } from '../components/Hero';
import Projects from '../components/Projects';
import { Services } from '../components/Services';
import Nosotros from '../components/Nosotros';
import Footer from '../components/Footer';
import NewNavbar from '../components/NewNavbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewNavbar />
      <Hero />
      <Services />
      <Projects />
      <Nosotros />
      <Footer />
    </div>
  );
};

export default Home;
