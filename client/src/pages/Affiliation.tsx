import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function Affiliation() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const certificationFeatures = [
    {
      icon: CheckCircle,
      title: "Accredited Program",
      description: "University-recognized curriculum that meets national education standards"
    },
    {
      icon: Award,
      title: "Valid Certification",
      description: "Nationally recognized diploma with professional credibility"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Regular audits and evaluations to maintain academic excellence"
    },
    {
      icon: Zap,
      title: "Academic Excellence",
      description: "Comprehensive assessment and continuous improvement programs"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-rjr-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-testid="affiliation-page-title">
              University Affiliation
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8" />
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" data-testid="affiliation-page-intro">
              Proudly affiliated with {t('about.university')} for academic excellence and recognition
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Affiliation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-rjr-secondary to-white border-2 border-rjr-primary shadow-xl">
              <CardContent className="p-12">
                <div className="flex items-center justify-center mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="University certification seal" 
                    className="h-32 w-32 rounded-full border-4 border-rjr-primary shadow-lg"
                    data-testid="university-seal"
                  />
                </div>
                <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-6" data-testid="university-name">
                  {t('about.university')}
                </h2>
                <Badge variant="secondary" className="bg-rjr-primary text-white px-6 py-2 text-lg mb-6" data-testid="affiliation-badge">
                  Officially Affiliated Institution
                </Badge>
                <p className="text-lg text-neutral-600 leading-relaxed" data-testid="affiliation-description">
                  Our institution is proudly affiliated with Manonmaniam Sundaranar University, ensuring that our 
                  Diploma in Varma Massage program meets the highest academic standards and provides recognized 
                  certification that is valued nationwide and internationally.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certification Features */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-heading font-bold text-neutral-800 text-center mb-12" data-testid="certification-benefits-title">
              Certification Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certificationFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center p-6 h-full border-2 border-rjr-secondary hover:border-rjr-primary transition-colors duration-300" data-testid={`benefit-card-${index}`}>
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-rjr-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-neutral-800 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Legal Recognition Section */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
            {...fadeInUp}
          >
            <div>
              <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-6" data-testid="legal-recognition-title">
                Legal Recognition & Accreditation
              </h2>
              <div className="space-y-4">
                <div className="flex items-start" data-testid="recognition-ugc">
                  <CheckCircle className="w-6 h-6 text-rjr-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-neutral-800">UGC Recognition</h4>
                    <p className="text-neutral-600">University Grants Commission approved institution</p>
                  </div>
                </div>
                <div className="flex items-start" data-testid="recognition-state">
                  <CheckCircle className="w-6 h-6 text-rjr-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-neutral-800">State Government Approval</h4>
                    <p className="text-neutral-600">Officially recognized by Tamil Nadu State Government</p>
                  </div>
                </div>
                <div className="flex items-start" data-testid="recognition-aicte">
                  <CheckCircle className="w-6 h-6 text-rjr-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-neutral-800">Professional Body Recognition</h4>
                    <p className="text-neutral-600">Acknowledged by traditional medicine councils</p>
                  </div>
                </div>
                <div className="flex items-start" data-testid="recognition-national">
                  <CheckCircle className="w-6 h-6 text-rjr-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-neutral-800">National Validity</h4>
                    <p className="text-neutral-600">Diploma valid across India for practice and employment</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Legal documentation and certificates" 
                className="rounded-lg shadow-lg w-full"
                data-testid="legal-documentation-image"
              />
            </div>
          </motion.div>

          {/* Academic Standards Section */}
          <motion.div 
            className="bg-neutral-50 p-8 rounded-lg"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-heading font-bold text-neutral-800 text-center mb-8" data-testid="academic-standards-title">
              Academic Standards & Quality Assurance
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div data-testid="curriculum-standards">
                <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-4">
                  Curriculum Standards
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center" data-testid="standard-university-approved">
                    <CheckCircle className="w-5 h-5 text-rjr-primary mr-3" />
                    <span className="text-neutral-600">University-approved syllabus and course structure</span>
                  </li>
                  <li className="flex items-center" data-testid="standard-expert-designed">
                    <CheckCircle className="w-5 h-5 text-rjr-primary mr-3" />
                    <span className="text-neutral-600">Expert-designed curriculum by traditional healers</span>
                  </li>
                  <li className="flex items-center" data-testid="standard-modern-integration">
                    <CheckCircle className="w-5 h-5 text-rjr-primary mr-3" />
                    <span className="text-neutral-600">Integration of modern medical knowledge</span>
                  </li>
                  <li className="flex items-center" data-testid="standard-practical-focus">
                    <CheckCircle className="w-5 h-5 text-rjr-primary mr-3" />
                    <span className="text-neutral-600">Extensive practical training and assessment</span>
                  </li>
                </ul>
              </div>
              <div data-testid="evaluation-standards">
                <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-4">
                  Evaluation & Assessment
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center" data-testid="evaluation-continuous">
                    <CheckCircle className="w-5 h-5 text-rjr-primary mr-3" />
                    <span className="text-neutral-600">Continuous assessment and progress monitoring</span>
                  </li>
                  <li className="flex items-center" data-testid="evaluation-external">
                    <CheckCircle className="w-5 h-5 text-rjr-primary mr-3" />
                    <span className="text-neutral-600">External evaluation by university experts</span>
                  </li>
                  <li className="flex items-center" data-testid="evaluation-practical">
                    <CheckCircle className="w-5 h-5 text-rjr-primary mr-3" />
                    <span className="text-neutral-600">Practical skill demonstrations and examinations</span>
                  </li>
                  <li className="flex items-center" data-testid="evaluation-certification">
                    <CheckCircle className="w-5 h-5 text-rjr-primary mr-3" />
                    <span className="text-neutral-600">University-issued diploma and transcripts</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
