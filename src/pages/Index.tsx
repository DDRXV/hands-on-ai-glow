
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-ai-gray/20">
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Instructors />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
};

export default Index;
