import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Award, BookOpen, Users, Lightbulb, Briefcase, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/useLanguage";
import logo from "@/assets/logo.png";
import varma from "@/assets/varma.jpg";



export default function Home() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

        <motion.div
          className="relative z-10 text-center text-white max-w-5xl mx-auto px-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight" data-testid="hero-title">
              {t('hero.title')}
            </h1>
            <h2 className="text-xl md:text-2xl font-heading font-medium mb-8 text-amber-200" data-testid="hero-subtitle">
              {t('hero.subtitle')}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90" data-testid="hero-description">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-8 text-lg transition duration-300 transform hover:scale-105 shadow-xl rounded-xl"
                  data-testid="hero-cta-button"
                >
                  {t('hero.cta')}
                </Button>
              </Link>
              <Link href="/course-details">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold py-4 px-8 text-lg transition duration-300 rounded-xl backdrop-blur-sm"
                  data-testid="hero-learn-more-button"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 mb-6" data-testid="about-title">
              {t('about.title')}
            </h2>
            <div className="w-24 h-1 bg-rjr-primary mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <img
                src={logo}
                alt="Educational institution building"
                className="rounded-lg shadow-lg w-full hover:rotate-y-180 transform transition-transform duration-700"
                data-testid="about-image"
              />

            </motion.div>
            <motion.div {...fadeInUp}>
              <p className="text-lg mb-6 leading-relaxed text-neutral-600" data-testid="about-description-1">
                {t('about.description1')}
              </p>
              <p className="text-lg mb-6 leading-relaxed text-neutral-600" data-testid="about-description-2">
                {t('about.description2')}
              </p>
              <p className="text-lg mb-8 leading-relaxed text-neutral-600" data-testid="about-description-3">
                {t('about.description3')}
              </p>

              {/* Affiliation Badge */}
              <Card className="bg-white border-l-4 border-rjr-accent" data-testid="affiliation-badge">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Award className="w-8 h-8 text-rjr-accent" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-heading font-semibold text-neutral-800">
                        {t('about.affiliation')}
                      </h3>
                      <p className="text-rjr-accent font-medium">{t('about.university')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Highlight Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 mb-6" data-testid="course-title">
              {t('course.title')}
            </h2>
            <div className="w-24 h-1 bg-rjr-primary mx-auto mb-8" />
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto" data-testid="course-description">
              Master the ancient healing art of Varma therapy through our comprehensive diploma program, designed to create skilled practitioners in traditional healing methods.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div {...fadeInUp}>
              <img
                src={varma}
                alt="Varma massage therapy session"
                className="rounded-lg shadow-lg w-full"
                data-testid="course-image"
              />
            </motion.div>
            <motion.div {...fadeInUp}>
              <h3 className="text-2xl font-heading font-semibold text-neutral-800 mb-6" data-testid="course-overview-title">
                {t('course.overview')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start" data-testid="course-duration">
                  <Clock className="w-6 h-6 text-rjr-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-neutral-800">{t('course.duration')}</h4>
                    <p className="text-neutral-600">{t('course.duration_value')}</p>
                  </div>
                </div>
                <div className="flex items-start" data-testid="course-certification">
                  <Award className="w-6 h-6 text-rjr-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-neutral-800">{t('course.certification')}</h4>
                    <p className="text-neutral-600">{t('course.certification_value')}</p>
                  </div>
                </div>
                <div className="flex items-start" data-testid="course-learning">
                  <BookOpen className="w-6 h-6 text-rjr-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-neutral-800">{t('course.learning')}</h4>
                    <p className="text-neutral-600">{t('course.learning_value')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Course Features */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-rjr-secondary p-6 text-center h-full" data-testid="feature-traditional">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-rjr-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-neutral-800 mb-2">
                    {t('course.traditional')}
                  </h3>
                  <p className="text-neutral-600">{t('course.traditional_desc')}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-rjr-secondary p-6 text-center h-full" data-testid="feature-faculty">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-rjr-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-neutral-800 mb-2">
                    {t('course.faculty')}
                  </h3>
                  <p className="text-neutral-600">{t('course.faculty_desc')}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-rjr-secondary p-6 text-center h-full" data-testid="feature-career">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-rjr-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-neutral-800 mb-2">
                    {t('course.career')}
                  </h3>
                  <p className="text-neutral-600">{t('course.career_desc')}</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Detailed Curriculum */}
          <motion.div
            className="bg-neutral-50 p-8 rounded-lg"
            {...fadeInUp}
          >
            <h3 className="text-2xl font-heading font-semibold text-neutral-800 mb-6 text-center" data-testid="curriculum-title">
              {t('course.curriculum')}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div data-testid="core-subjects">
                <h4 className="text-lg font-heading font-semibold text-neutral-800 mb-4">
                  {t('course.core')}
                </h4>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center" data-testid="subject-fundamentals">
                    <CheckCircle className="w-4 h-4 text-rjr-primary mr-2" />
                    Fundamentals of Varma Therapy
                  </li>
                  <li className="flex items-center" data-testid="subject-anatomy">
                    <CheckCircle className="w-4 h-4 text-rjr-primary mr-2" />
                    Anatomy and Physiology
                  </li>
                  <li className="flex items-center" data-testid="subject-pressure-points">
                    <CheckCircle className="w-4 h-4 text-rjr-primary mr-2" />
                    Pressure Point Identification
                  </li>
                  <li className="flex items-center" data-testid="subject-therapeutic">
                    <CheckCircle className="w-4 h-4 text-rjr-primary mr-2" />
                    Therapeutic Techniques
                  </li>
                </ul>
              </div>
              <div data-testid="practical-training">
                <h4 className="text-lg font-heading font-semibold text-neutral-800 mb-4">
                  {t('course.practical')}
                </h4>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center" data-testid="practical-hands-on">
                    <CheckCircle className="w-4 h-4 text-rjr-primary mr-2" />
                    Hands-on Practice Sessions
                  </li>
                  <li className="flex items-center" data-testid="practical-case-study">
                    <CheckCircle className="w-4 h-4 text-rjr-primary mr-2" />
                    Case Study Analysis
                  </li>
                  <li className="flex items-center" data-testid="practical-internship">
                    <CheckCircle className="w-4 h-4 text-rjr-primary mr-2" />
                    Clinical Internship
                  </li>
                  <li className="flex items-center" data-testid="practical-ethics">
                    <CheckCircle className="w-4 h-4 text-rjr-primary mr-2" />
                    Professional Ethics
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rjr-primary  ">
        <motion.div
          className="max-w-4xl mx-auto text-center px-4"
          {...fadeInUp}
        >
          <div className="text-white">
            <h3 className="text-2xl font-heading font-bold mb-4" data-testid="cta-title">
              {t('contact.ready')}
            </h3>
            <p className="text-lg mb-6 opacity-90" data-testid="cta-description">
              {t('contact.ready_desc')}
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 font-semibold py-3 px-8 transition duration-300 transform hover:scale-105 rounded-xl shadow-lg"
                data-testid="cta-apply-button"
              >
                {t('contact.apply')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
