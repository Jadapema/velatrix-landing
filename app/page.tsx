import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Vision from '@/components/Vision';
import Footer from '@/components/Footer';
import GradientDivider from "@/components/ui/GradientDivider";

export const metadata: Metadata = {
  title: 'Velatrix - Web3 Technology for the Next-Gen Creative IP',
  description: 'Velatrix orchestrates a modular, secure, and scalable ecosystem of infrastructure, protocols, standards, and applications for creative intellectual property.',
};

export default function Home() {
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
} 