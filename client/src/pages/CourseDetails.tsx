import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, BookOpen, Award, CheckCircle, Calendar, MapPin, GraduationCap } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/useLanguage";

export default function CourseDetails() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const courseModules = [
    {
      title: "Foundation Module",
      duration: "2 Months",
      topics: [
        "Introduction to Varma Therapy",
        "Historical Background and Philosophy",
        "Basic Anatomy and Physiology",
        "Energy Systems in Traditional Medicine"
      ]
    },
    {
      title: "Theoretical Framework",
      duration: "3 Months",
      topics: [
        "Pressure Point Identification",
        "Energy Flow Pathways",
        "Diagnostic Techniques",
        "Treatment Principles and Methods"
      ]
    },
    {
      title: "Practical Training",
      duration: "4 Months",
      topics: [
        "Hands-on Massage Techniques",
        "Patient Assessment and Care",
        "Safety Protocols and Ethics",
        "Case Study Analysis"
      ]
    },
    {
      title: "Clinical Practice",
      duration: "3 Months",
      topics: [
        "Supervised Clinical Internship",
        "Real Patient Interactions",
        "Professional Development",
        "Certification Preparation"
      ]
    }
  ];

  const careerPaths = [
    {
      title: "Private Practice",
      description: "Establish your own Varma therapy clinic and build a clientele",
      icon: MapPin
    },
    {
      title: "Healthcare Centers",
      description: "Work in hospitals, wellness centers, and rehabilitation facilities",
      icon: Users
    },
    {
      title: "Sports Medicine",
      description: "Specialize in sports injury recovery and athletic performance",
      icon: Award
    },
    {
      title: "Research & Education",
      description: "Contribute to traditional medicine research and teach future practitioners",
      icon: GraduationCap
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-testid="course-details-title">
              {t('course.title')}
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8" />
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" data-testid="course-details-intro">
              A comprehensive 12-month program designed to master the ancient art of traditional healing
            </p>
            <Badge variant="secondary" className="mt-6 bg-white text-rjr-primary px-6 py-2 text-lg" data-testid="course-affiliation-badge">
              {t('about.affiliation')} {t('about.university')}
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div {...fadeInUp}>
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Varma massage training session" 
                className="rounded-lg shadow-lg w-full"
                data-testid="course-training-image"
              />
            </motion.div>
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-6" data-testid="course-overview-title">
                {t('course.overview')}
              </h2>
              <p className="text-lg mb-6 leading-relaxed text-neutral-600" data-testid="course-overview-description">
                Our Diploma in Varma Massage (DVM) is a comprehensive program that combines ancient healing 
                wisdom with modern educational standards. Students learn authentic Varma techniques, 
                anatomical knowledge, and therapeutic applications.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center" data-testid="course-stat-duration">
                  <Clock className="w-8 h-8 text-rjr-primary mr-3" />
                  <div>
                    <h4 className="font-semibold text-neutral-800">12 Months</h4>
                    <p className="text-sm text-neutral-600">Full Program</p>
                  </div>
                </div>
                <div className="flex items-center" data-testid="course-stat-students">
                  <Users className="w-8 h-8 text-rjr-primary mr-3" />
                  <div>
                    <h4 className="font-semibold text-neutral-800">20 Students</h4>
                    <p className="text-sm text-neutral-600">Max per Batch</p>
                  </div>
                </div>
                <div className="flex items-center" data-testid="course-stat-practical">
                  <BookOpen className="w-8 h-8 text-rjr-primary mr-3" />
                  <div>
                    <h4 className="font-semibold text-neutral-800">60% Practical</h4>
                    <p className="text-sm text-neutral-600">Hands-on Training</p>
                  </div>
                </div>
                <div className="flex items-center" data-testid="course-stat-certification">
                  <Award className="w-8 h-8 text-rjr-primary mr-3" />
                  <div>
                    <h4 className="font-semibold text-neutral-800">University Diploma</h4>
                    <p className="text-sm text-neutral-600">Recognized Certification</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Course Modules */}
          <motion.div 
            className="mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-heading font-bold text-neutral-800 text-center mb-12" data-testid="course-modules-title">
              Course Modules & Timeline
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courseModules.map((module, index) => (
                <Card key={module.title} className="border-2 border-rjr-secondary hover:border-rjr-primary transition-colors duration-300" data-testid={`module-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-rjr-primary border-rjr-primary">
                        Module {index + 1}
                      </Badge>
                      <span className="text-sm text-neutral-600 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {module.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-neutral-800 mb-4">
                      {module.title}
                    </h3>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start text-sm" data-testid={`topic-${index}-${topicIndex}`}>
                          <CheckCircle className="w-4 h-4 text-rjr-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-600">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Course Details Tabs */}
          <motion.div 
            className="mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-heading font-bold text-neutral-800 text-center mb-12" data-testid="course-details-tabs-title">
              Detailed Course Information
            </h2>
            <Tabs defaultValue="syllabus" className="w-full" data-testid="course-details-tabs">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="syllabus" data-testid="tab-syllabus">Syllabus</TabsTrigger>
                <TabsTrigger value="assessment" data-testid="tab-assessment">Assessment</TabsTrigger>
                <TabsTrigger value="faculty" data-testid="tab-faculty">Faculty</TabsTrigger>
                <TabsTrigger value="admission" data-testid="tab-admission">Admission</TabsTrigger>
              </TabsList>
              
              <TabsContent value="syllabus" className="space-y-6" data-testid="content-syllabus">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-4">
                      Core Syllabus Components
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-3">Theoretical Subjects</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center" data-testid="syllabus-theory-1">
                            <CheckCircle className="w-4 h-4 text-rjr-primary mr-2" />
                            <span className="text-neutral-600">Fundamentals of Varma Therapy</span>
                          </li>
                          <li className="flex items-center" data-testid="syllabus-theory-2">
                            <CheckCircle className="w-4 h-4 text-rjr-primary mr-2" />
                            <span className="text-neutral-600">Human Anatomy & Physiology</span>
                          </li>
                          <li className="flex items-center" data-testid="syllabus-theory-3">
                            <CheckCircle className="w-4 h-4 text-rjr-primary mr-2" />
                            <span className="text-neutral-600">Traditional Medicine Principles</span>
                          </li>
                          <li className="flex items-center" data-testid="syllabus-theory-4">
                            <CheckCircle className="w-4 h-4 text-rjr-primary mr-2" />
                            <span className="text-neutral-600">Energy Systems & Chakras</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-3">Practical Training</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center" data-testid="syllabus-practical-1">
                            <CheckCircle className="w-4 h-4 text-rjr-primary mr-2" />
                            <span className="text-neutral-600">Massage Techniques & Pressure Points</span>
                          </li>
                          <li className="flex items-center" data-testid="syllabus-practical-2">
                            <CheckCircle className="w-4 h-4 text-rjr-primary mr-2" />
                            <span className="text-neutral-600">Patient Assessment & Diagnosis</span>
                          </li>
                          <li className="flex items-center" data-testid="syllabus-practical-3">
                            <CheckCircle className="w-4 h-4 text-rjr-primary mr-2" />
                            <span className="text-neutral-600">Treatment Planning & Execution</span>
                          </li>
                          <li className="flex items-center" data-testid="syllabus-practical-4">
                            <CheckCircle className="w-4 h-4 text-rjr-primary mr-2" />
                            <span className="text-neutral-600">Clinical Internship & Case Studies</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="assessment" className="space-y-6" data-testid="content-assessment">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-4">
                      Assessment Structure
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-rjr-secondary rounded-lg" data-testid="assessment-continuous">
                        <span className="font-medium text-neutral-800">Continuous Assessment</span>
                        <Badge variant="secondary" className="bg-rjr-primary text-white">40%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-rjr-secondary rounded-lg" data-testid="assessment-practical">
                        <span className="font-medium text-neutral-800">Practical Examinations</span>
                        <Badge variant="secondary" className="bg-rjr-primary text-white">35%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-rjr-secondary rounded-lg" data-testid="assessment-theory">
                        <span className="font-medium text-neutral-800">Theory Examinations</span>
                        <Badge variant="secondary" className="bg-rjr-primary text-white">25%</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="faculty" className="space-y-6" data-testid="content-faculty">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-4">
                      Expert Faculty Team
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="text-center" data-testid="faculty-traditional">
                        <img 
                          src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                          alt="Traditional Varma Master" 
                          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h4 className="font-semibold text-neutral-800">Master Krishnan</h4>
                        <p className="text-rjr-accent">Traditional Varma Expert</p>
                        <p className="text-sm text-neutral-600 mt-2">40+ years of experience in Varma therapy</p>
                      </div>
                      <div className="text-center" data-testid="faculty-medical">
                        <img 
                          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                          alt="Medical Doctor" 
                          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h4 className="font-semibold text-neutral-800">Dr. Priya Sharma</h4>
                        <p className="text-rjr-accent">MBBS, MD (Anatomy)</p>
                        <p className="text-sm text-neutral-600 mt-2">Modern medical perspective integration</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="admission" className="space-y-6" data-testid="content-admission">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-4">
                      Admission Requirements
                    </h3>
                    <div className="space-y-4">
                      <div data-testid="admission-eligibility">
                        <h4 className="font-semibold text-neutral-800 mb-2">Eligibility Criteria</h4>
                        <ul className="space-y-2 text-neutral-600">
                          <li>• Minimum 12th grade or equivalent qualification</li>
                          <li>• Age: 18-45 years</li>
                          <li>• Basic understanding of health and wellness concepts</li>
                          <li>• Physical fitness for hands-on practice</li>
                        </ul>
                      </div>
                      <div data-testid="admission-documents">
                        <h4 className="font-semibold text-neutral-800 mb-2">Required Documents</h4>
                        <ul className="space-y-2 text-neutral-600">
                          <li>• Educational certificates and transcripts</li>
                          <li>• Identity proof (Aadhar/Passport)</li>
                          <li>• Medical fitness certificate</li>
                          <li>• Recent passport-size photographs</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Career Opportunities */}
          <motion.div 
            className="mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-heading font-bold text-neutral-800 text-center mb-12" data-testid="career-opportunities-title">
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careerPaths.map((career, index) => (
                <Card key={career.title} className="text-center p-6 border-2 border-rjr-secondary hover:border-rjr-primary transition-colors duration-300" data-testid={`career-card-${index}`}>
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-rjr-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <career.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-neutral-800 mb-3">
                      {career.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {career.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center bg-gradient-to-r from-rjr-primary to-rjr-accent p-8 rounded-lg text-white"
            {...fadeInUp}
          >
            <h3 className="text-2xl font-heading font-bold mb-4" data-testid="course-cta-title">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-lg mb-6 opacity-90" data-testid="course-cta-description">
              Join our next batch and become a certified Varma massage practitioner
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-white text-rjr-primary hover:bg-gray-100 font-semibold"
                  data-testid="course-cta-apply"
                >
                  Apply Now
                </Button>
              </Link>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-rjr-primary"
                data-testid="course-cta-download"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
