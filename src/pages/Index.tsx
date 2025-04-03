
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Vision from '@/components/Vision';
import Footer from '@/components/Footer';
import GradientDivider from "@/components/ui/GradientDivider.tsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-velatrix-dark text-white">
      <Navbar />
      <Hero />
      <Products />
      <Vision />
       <GradientDivider />
      <Footer />
    </div>
  );
};

export default Index;
