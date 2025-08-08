import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/hooks/useLanguage";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: t('common.success'),
        description: data.message || "Thank you for your message! We will get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      toast({
        title: t('common.error'),
        description: error.message || "Please check your input and try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    submitContactForm.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-testid="contact-page-title">
              {t('contact.title')}
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8" />
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" data-testid="contact-page-intro">
              {t('contact.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div {...fadeInUp}>
              <Card className="bg-white shadow-lg" data-testid="contact-form-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-6" data-testid="contact-form-title">
                    {t('contact.form_title')}
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div data-testid="form-field-name">
                      <Label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        {t('contact.name')} *
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Enter your full name"
                        data-testid="input-name"
                      />
                    </div>
                    <div data-testid="form-field-email">
                      <Label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        {t('contact.email')} *
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Enter your email address"
                        data-testid="input-email"
                      />
                    </div>
                    <div data-testid="form-field-phone">
                      <Label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                        {t('contact.phone')}
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your phone number"
                        data-testid="input-phone"
                      />
                    </div>
                    <div data-testid="form-field-message">
                      <Label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        {t('contact.message')} *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full resize-none"
                        placeholder="Tell us about your interest in the program"
                        data-testid="input-message"
                      />
                    </div>
                    <Button 
                      type="submit"
                      disabled={submitContactForm.isPending}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 transition duration-300 rounded-xl"
                      data-testid="button-submit"
                    >
                      {submitContactForm.isPending ? t('common.loading') : t('contact.send')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              <motion.div {...fadeInUp}>
                <Card className="bg-white shadow-lg" data-testid="contact-info-card">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-6" data-testid="contact-info-title">
                      {t('contact.info')}
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center" data-testid="contact-info-address">
                        <MapPin className="w-6 h-6 text-rjr-primary mr-4" />
                        <div>
                          <h4 className="font-semibold text-neutral-800">{t('contact.address')}</h4>
                          <p className="text-neutral-600">RJR Education VSD Centre<br />Tirunelveli, Tamil Nadu, India</p>
                        </div>
                      </div>
                      <div className="flex items-center" data-testid="contact-info-phone">
                        <Phone className="w-6 h-6 text-rjr-primary mr-4" />
                        <div>
                          <h4 className="font-semibold text-neutral-800">Phone</h4>
                          <p className="text-neutral-600">+91 12345 67890</p>
                        </div>
                      </div>
                      <div className="flex items-center" data-testid="contact-info-email">
                        <Mail className="w-6 h-6 text-rjr-primary mr-4" />
                        <div>
                          <h4 className="font-semibold text-neutral-800">Email</h4>
                          <p className="text-neutral-600">info@rjreducationvsd.edu</p>
                        </div>
                      </div>
                      <div className="flex items-center" data-testid="contact-info-hours">
                        <Clock className="w-6 h-6 text-rjr-primary mr-4" />
                        <div>
                          <h4 className="font-semibold text-neutral-800">Office Hours</h4>
                          <p className="text-neutral-600">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Google Maps */}
              <motion.div {...fadeInUp}>
                <Card className="bg-white shadow-lg" data-testid="map-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-heading font-semibold text-neutral-800 mb-4" data-testid="map-title">
                      {t('contact.find_us')}
                    </h3>
                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center" data-testid="map-placeholder">
                      <div className="text-center text-neutral-600">
                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm">Google Maps Integration</p>
                        <p className="text-xs text-neutral-500 mt-2">
                          Interactive map will be displayed here<br />
                          Showing RJR Education VSD Centre location
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            {...fadeInUp}
          >
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-8 rounded-lg text-white" data-testid="contact-cta">
              <h3 className="text-2xl font-heading font-bold mb-4" data-testid="contact-cta-title">
                {t('contact.ready')}
              </h3>
              <p className="text-lg mb-6 opacity-90" data-testid="contact-cta-description">
                {t('contact.ready_desc')}
              </p>
              <Button 
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 font-semibold py-3 px-8 transition duration-300 rounded-xl shadow-lg"
                data-testid="contact-cta-button"
              >
                {t('contact.apply')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
