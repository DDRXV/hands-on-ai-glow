
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Clock, Users } from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams();
  
  // In a real application, you would fetch course details based on courseId
  // This is a simplified version with hardcoded data
  const courseDetails = {
    title: "Course Details",
    description: "This page would display details for the selected course.",
    fullDescription: "In a real implementation, this page would fetch details for the specific course based on the courseId parameter. It would show comprehensive information about the course curriculum, learning outcomes, instructor details, and more.",
    level: "All Levels",
    duration: "6-8 weeks",
    rating: 4.8,
    students: 1025,
    image: "bg-gradient-to-r from-ai-blue/20 to-ai-teal/20"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-ai-gray/20">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/courses" className="inline-flex items-center text-ai-blue mb-8 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Courses
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {courseId ? courseId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : courseDetails.title}
              </h1>
              
              <p className="text-lg text-ai-dark-gray mb-6">
                {courseDetails.description}
              </p>
              
              <div className="flex flex-wrap gap-4 items-center mb-8">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="font-semibold">{courseDetails.rating}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-ai-blue mr-1" />
                  <span>{courseDetails.students} students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-ai-blue mr-1" />
                  <span>{courseDetails.duration}</span>
                </div>
                <span className="bg-ai-gray/50 text-ai-dark-gray text-xs font-medium px-2.5 py-1 rounded">
                  {courseDetails.level}
                </span>
              </div>
              
              <div className={`aspect-video ${courseDetails.image} rounded-lg flex items-center justify-center mb-8`}>
                <div className="w-24 h-24 bg-white/40 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <span className="text-ai-navy font-bold text-xl">AI</span>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                <p className="text-ai-dark-gray mb-4">
                  {courseDetails.fullDescription}
                </p>
                <p className="text-ai-dark-gray">
                  This is a placeholder for the course details page. In a real application, this would contain:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-ai-dark-gray mb-8">
                  <li>Detailed course curriculum</li>
                  <li>Learning outcomes</li>
                  <li>Prerequisites</li>
                  <li>Instructor information</li>
                  <li>Student reviews</li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                <h3 className="text-xl font-bold mb-4">Enroll in this course</h3>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-ai-navy mb-2">$49.99</div>
                  <div className="text-sm text-ai-dark-gray">Full lifetime access</div>
                </div>
                <Button size="lg" className="w-full bg-ai-blue hover:bg-ai-blue/90 text-white mb-4">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="w-full border-ai-blue text-ai-blue hover:bg-ai-blue/10">
                  Add to Wishlist
                </Button>
                <div className="mt-6 text-xs text-center text-ai-dark-gray">
                  30-day money-back guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
