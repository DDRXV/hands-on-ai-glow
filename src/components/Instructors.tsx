
import React from 'react';

const Instructors = () => {
  const instructors = [
    {
      name: "Dr. Alex Morgan",
      role: "AI Research Scientist",
      bio: "Former AI researcher at Google with 10+ years of experience in machine learning and neural networks.",
      avatarInitial: "A",
      specialty: "Deep Learning & Computer Vision"
    },
    {
      name: "Prof. Rebecca Chen",
      role: "ML Engineering Lead",
      bio: "Tech industry veteran who led ML initiatives at Fortune 500 companies and teaches at Stanford.",
      avatarInitial: "R",
      specialty: "Machine Learning Systems"
    },
    {
      name: "James Wilson",
      role: "NLP Specialist",
      bio: "Published author in the field of natural language processing with experience deploying language models at scale.",
      avatarInitial: "J",
      specialty: "Natural Language Processing"
    },
    {
      name: "Dr. Maya Patel",
      role: "AI Ethics Expert",
      bio: "Combines technical expertise with a focus on responsible AI implementation and ethical frameworks.",
      avatarInitial: "M",
      specialty: "Ethical AI & Governance"
    }
  ];

  return (
    <section id="instructors" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn from <span className="gradient-text">Industry Experts</span>
          </h2>
          <p className="text-lg text-ai-dark-gray max-w-2xl mx-auto">
            Our instructors bring real-world AI experience into every course
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-32 bg-gradient-to-r from-ai-blue/10 to-ai-teal/10 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-ai-blue text-2xl font-bold shadow-sm">
                  {instructor.avatarInitial}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1 text-ai-navy">
                  {instructor.name}
                </h3>
                <p className="text-ai-blue text-sm font-medium mb-2">
                  {instructor.role}
                </p>
                <p className="text-xs text-ai-dark-gray mb-3 bg-ai-gray/50 py-1 px-2 rounded inline-block">
                  {instructor.specialty}
                </p>
                <p className="text-sm text-ai-dark-gray">
                  {instructor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
