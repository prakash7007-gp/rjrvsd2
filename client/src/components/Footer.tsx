import { Link } from "wouter";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.course'), href: "/course-details" },
    { name: t('nav.affiliation'), href: "/affiliation" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-heading font-bold mb-4" data-testid="footer-title">
              RJR Education VSD Centre
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed" data-testid="footer-description">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-rjr-primary transition duration-300"
                data-testid="social-link-twitter"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-rjr-primary transition duration-300"
                data-testid="social-link-facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-rjr-primary transition duration-300"
                data-testid="social-link-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4" data-testid="footer-quick-links">
              {t('footer.quick_links')}
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-rjr-primary transition duration-300"
                    data-testid={`footer-link-${item.href.replace('/', '') || 'home'}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4" data-testid="footer-contact-info">
              {t('footer.contact_info')}
            </h4>
            <div className="space-y-2 text-gray-300">
              <p data-testid="footer-address">Tirunelveli, Tamil Nadu</p>
              <p data-testid="footer-phone">+91 12345 67890</p>
              <p data-testid="footer-email">info@rjreducationvsd.edu</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300" data-testid="footer-copyright">
            &copy; 2024 RJR Education VSD Centre. {t('footer.copyright')} | 
            <span className="text-rjr-primary"> {t('about.affiliation')} {t('about.university')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
