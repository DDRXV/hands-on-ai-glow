
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="font-display text-2xl font-bold text-ai-navy">
              AI<span className="text-ai-teal">Glow</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-medium text-ai-navy hover:text-ai-blue transition-colors">
              Why Us
            </a>
            <a href="#courses" className="font-medium text-ai-navy hover:text-ai-blue transition-colors">
              Courses
            </a>
            <a href="#instructors" className="font-medium text-ai-navy hover:text-ai-blue transition-colors">
              Instructors
            </a>
            <a href="#testimonials" className="font-medium text-ai-navy hover:text-ai-blue transition-colors">
              Testimonials
            </a>
            <Button size="sm" className="bg-ai-blue hover:bg-ai-blue/90 text-white ml-2">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ai-navy focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-6">
              <a 
                href="#features" 
                className="font-medium text-ai-navy hover:text-ai-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Us
              </a>
              <a 
                href="#courses" 
                className="font-medium text-ai-navy hover:text-ai-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </a>
              <a 
                href="#instructors" 
                className="font-medium text-ai-navy hover:text-ai-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Instructors
              </a>
              <a 
                href="#testimonials" 
                className="font-medium text-ai-navy hover:text-ai-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <Button size="sm" className="bg-ai-blue hover:bg-ai-blue/90 text-white w-full">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
