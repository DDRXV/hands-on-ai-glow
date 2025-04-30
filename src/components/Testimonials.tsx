
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The hands-on approach at AIGlow completely changed how I learn AI. I built real projects from day one, which made all the difference in landing my dream job.",
      name: "Sarah Johnson",
      title: "Machine Learning Engineer at TechCorp",
      avatarInitial: "S"
    },
    {
      quote: "After trying multiple AI courses, AIGlow was the only one that gave me practical skills I could immediately apply. The instructors are incredibly knowledgeable.",
      name: "Michael Chen",
      title: "Data Scientist at DataViz",
      avatarInitial: "M"
    },
    {
      quote: "I went from knowing nothing about AI to deploying my own models in production. The community and ongoing support have been invaluable to my career growth.",
      name: "Priya Patel",
      title: "AI Developer at StartupX",
      avatarInitial: "P"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-ai-navy text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="bg-gradient-to-r from-ai-teal to-ai-blue bg-clip-text text-transparent">Students Say</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Real stories from our graduates who have transformed their careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-white/10"
            >
              <div className="mb-6">
                {/* Quote icon */}
                <svg className="h-8 w-8 text-ai-blue/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 3.356-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 3.356-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <p className="mb-6 text-white/90">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-ai-blue/20 flex items-center justify-center text-ai-blue font-medium mr-3">
                  {testimonial.avatarInitial}
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
