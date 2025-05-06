
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const CoursesPage = () => {
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
    },
    {
      id: "computer-vision",
      title: "Computer Vision Fundamentals",
      description: "Master image recognition, object detection, and visual data analysis",
      level: "Intermediate",
      duration: "6 weeks",
      rating: 4.8,
      students: 935,
      image: "bg-gradient-to-r from-ai-blue/20 to-ai-purple/20"
    },
    {
      id: "reinforcement-learning",
      title: "Reinforcement Learning",
      description: "Learn how to train agents to make decisions through reward-based feedback",
      level: "Advanced",
      duration: "8 weeks",
      rating: 4.6,
      students: 684,
      image: "bg-gradient-to-r from-ai-purple/20 to-ai-teal/20"
    },
    {
      id: "ai-ethics",
      title: "AI Ethics & Responsibility",
      description: "Understand the ethical implications of AI and responsible development practices",
      level: "All Levels",
      duration: "4 weeks",
      rating: 4.9,
      students: 1087,
      image: "bg-gradient-to-r from-ai-teal/20 to-ai-blue/20"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-ai-gray/20">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Courses</span>
            </h1>
            <p className="text-lg text-ai-dark-gray max-w-2xl mx-auto">
              Comprehensive, hands-on training programs designed to build practical AI skills
            </p>
          </div>

          {/* Filters - simplified version for now */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="outline" className="bg-white">
              All Courses
            </Button>
            <Button variant="outline" className="bg-white">
              Beginner
            </Button>
            <Button variant="outline" className="bg-white">
              Intermediate
            </Button>
            <Button variant="outline" className="bg-white">
              Advanced
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div 
                key={course.id} 
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursesPage;
