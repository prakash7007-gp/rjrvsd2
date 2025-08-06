import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, Heart } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function About() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To preserve and advance traditional healing through comprehensive education in Varma Massage therapy."
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "To be the leading institution for traditional healing education, creating skilled practitioners who serve communities worldwide."
    },
    {
      icon: Users,
      title: "Our Values",
      description: "Excellence, authenticity, compassion, and dedication to the ancient art of healing through Varma therapy."
    },
    {
      icon: Award,
      title: "Our Commitment",
      description: "Maintaining the highest standards of education while honoring traditional knowledge and practices."
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-testid="about-page-title">
              {t('about.title')}
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8" />
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" data-testid="about-page-intro">
              Preserving traditional healing knowledge while embracing modern educational excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div {...fadeInUp}>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Traditional healing education" 
                className="rounded-lg shadow-lg w-full"
                data-testid="about-main-image"
              />
            </motion.div>
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-6" data-testid="about-history-title">
                Our History & Foundation
              </h2>
              <p className="text-lg mb-6 leading-relaxed text-neutral-600" data-testid="about-history-text">
                {t('about.description1')}
              </p>
              <p className="text-lg mb-6 leading-relaxed text-neutral-600">
                {t('about.description2')}
              </p>
              <p className="text-lg leading-relaxed text-neutral-600">
                {t('about.description3')}
              </p>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-heading font-bold text-neutral-800 text-center mb-12" data-testid="values-title">
              Our Foundation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-rjr-secondary p-6 text-center h-full" data-testid={`value-card-${index}`}>
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-rjr-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-neutral-800 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Founder Section */}
          <motion.div 
            className="bg-neutral-50 p-8 rounded-lg"
            {...fadeInUp}
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Founder portrait" 
                  className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
                  data-testid="founder-image"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-heading font-bold text-neutral-800 mb-4" data-testid="founder-title">
                  Message from Our Founder
                </h3>
                <p className="text-lg mb-4 leading-relaxed text-neutral-600" data-testid="founder-message">
                  "Our institution was born from a deep reverence for the ancient healing traditions of Varma therapy. 
                  We believe that true healing comes from understanding the body's energy systems and applying time-tested 
                  techniques with modern precision and care."
                </p>
                <p className="text-lg leading-relaxed text-neutral-600">
                  "Through our comprehensive program, we ensure that each student not only learns the technical aspects 
                  of Varma massage but also embodies the compassion and wisdom that makes a true healer."
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-neutral-800" data-testid="founder-name">Dr. R. Rajesh Kumar</p>
                  <p className="text-rjr-accent" data-testid="founder-title-role">Founder & Principal</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div 
            className="mt-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-heading font-bold text-neutral-800 text-center mb-12" data-testid="achievements-title">
              Our Achievements
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6" data-testid="achievement-graduates">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-rjr-primary mb-2">500+</div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Graduates</h3>
                  <p className="text-neutral-600">Certified practitioners serving communities</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6" data-testid="achievement-experience">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-rjr-primary mb-2">15+</div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Years</h3>
                  <p className="text-neutral-600">Of excellence in traditional healing education</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6" data-testid="achievement-recognition">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-rjr-primary mb-2">100%</div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Recognition</h3>
                  <p className="text-neutral-600">University-affiliated certification program</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
