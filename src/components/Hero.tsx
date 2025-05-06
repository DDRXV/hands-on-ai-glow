
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Master AI Through <span className="gradient-text">Hands-on Training</span>
            </h1>
            <p className="text-lg md:text-xl text-ai-dark-gray mb-8 max-w-lg">
              Build practical AI skills with expert-led courses and real-world projects. Go from beginner to AI professional with our immersive learning approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button size="lg" className="bg-ai-blue hover:bg-ai-blue/90 text-white rounded-lg">
                  Explore Courses
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="border-ai-blue text-ai-blue hover:bg-ai-blue/10 rounded-lg">
                  View Free Resources <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex items-center text-sm text-ai-dark-gray">
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-xs font-semibold text-ai-navy">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <p>Join <span className="font-semibold text-ai-navy">2,500+</span> students already learning</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="p-4 bg-white shadow-lg rounded-lg animate-float">
              <div className="aspect-[4/3] bg-ai-gray rounded-md flex items-center justify-center">
                <div className="p-8 flex items-center justify-center">
                  <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-gradient-to-br from-ai-blue to-ai-purple rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">AI</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-32 bg-ai-gray/50 rounded-full"></div>
                      <div className="h-2 w-24 bg-ai-gray/50 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="h-4 w-3/4 bg-ai-gray/50 rounded-full"></div>
                <div className="h-3 w-1/2 bg-ai-gray/40 rounded-full mt-2"></div>
              </div>
            </div>
            
            <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2">
              <div className="w-32 h-32 bg-gradient-to-br from-ai-blue/20 to-ai-purple/20 rounded-full filter blur-xl animate-pulse-slow"></div>
            </div>
            
            <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/4">
              <div className="w-40 h-40 bg-gradient-to-br from-ai-teal/20 to-ai-blue/20 rounded-full filter blur-xl animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
