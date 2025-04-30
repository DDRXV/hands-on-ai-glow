
import React from 'react';
import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-ai-blue to-ai-purple text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master AI Through Hands-on Learning?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of students who are building practical AI skills and advancing their careers with AIGlow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-ai-blue hover:bg-white/90 rounded-lg px-8 py-6">
              Explore Courses
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-lg px-8 py-6">
              Request Information
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
