
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      id: "intro-ml",
      title: "Introduction to Machine Learning",
      description: "Learn the fundamentals of machine learning algorithms and implementations",
      level: "Beginner",
      duration: "6 weeks",
      rating: 4.9,
      students: 1245,
      image: "bg-gradient-to-r from-ai-blue/20 to-ai-teal/20"
    },
    {
      id: "deep-learning",
      title: "Deep Learning Specialization",
      description: "Master neural networks and deep learning techniques with practical applications",
      level: "Intermediate",
      duration: "8 weeks",
      rating: 4.8,
      students: 986,
      image: "bg-gradient-to-r from-ai-purple/20 to-ai-blue/20"
    },
    {
      id: "nlp",
      title: "Natural Language Processing",
      description: "Build NLP systems and language models with cutting-edge techniques",
      level: "Advanced",
      duration: "7 weeks",
      rating: 4.7,
      students: 752,
      image: "bg-gradient-to-r from-ai-teal/20 to-ai-purple/20"
    }
  ];

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Featured <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-lg text-ai-dark-gray max-w-2xl mx-auto">
            Comprehensive, hands-on training programs designed to build practical AI skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`h-48 ${course.image} flex items-center justify-center p-8`}>
                {/* Course illustration placeholder */}
                <div className="w-24 h-24 bg-white/40 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <span className="text-ai-navy font-bold text-lg">AI</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-ai-gray/50 text-ai-dark-gray text-xs font-medium px-2.5 py-0.5 rounded">
                    {course.level}
                  </span>
                  <span className="text-xs text-ai-dark-gray">
                    {course.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-ai-navy">
                  {course.title}
                </h3>
                <p className="text-ai-dark-gray text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{course.rating}</span>
                    <span className="mx-1 text-xs text-ai-dark-gray">•</span>
                    <span className="text-xs text-ai-dark-gray">{course.students} students</span>
                  </div>
                </div>
                <Link to={`/courses/${course.id}`}>
                  <Button className="w-full bg-ai-blue hover:bg-ai-blue/90 text-white">
                    View Course
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/courses">
            <Button variant="outline" className="border-ai-blue text-ai-blue hover:bg-ai-blue/10">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
