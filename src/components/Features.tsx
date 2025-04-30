
import React from 'react';
import { Code, GraduationCap, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-ai-blue" />,
      title: "Expert-Led Instruction",
      description: "Learn from industry professionals with years of experience in artificial intelligence and machine learning.",
      gradientClass: "feature-gradient-1"
    },
    {
      icon: <Code className="h-8 w-8 text-ai-blue" />,
      title: "Hands-on Projects",
      description: "Build real AI solutions and practical applications that you can showcase in your portfolio.",
      gradientClass: "feature-gradient-2"
    },
    {
      icon: <Zap className="h-8 w-8 text-ai-blue" />,
      title: "Accelerated Learning",
      description: "Our focused approach helps you acquire AI skills faster through practical exercises, not just theory.",
      gradientClass: "feature-gradient-3"
    }
  ];

  return (
    <section id="features" className="py-20 bg-ai-gray/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">AIGlow</span>
          </h2>
          <p className="text-lg text-ai-dark-gray max-w-2xl mx-auto">
            Our unique approach to AI education emphasizes practical skills and real-world experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.gradientClass} rounded-xl p-8 h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-ai-navy">{feature.title}</h3>
              <p className="text-ai-dark-gray">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-ai-blue mb-2">96%</div>
              <p className="text-sm text-ai-dark-gray">Course completion rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ai-blue mb-2">12K+</div>
              <p className="text-sm text-ai-dark-gray">Trained students</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ai-blue mb-2">94%</div>
              <p className="text-sm text-ai-dark-gray">Employment success</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ai-blue mb-2">4.8/5</div>
              <p className="text-sm text-ai-dark-gray">Average course rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
