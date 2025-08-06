import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.affiliation'), href: "/affiliation" },
    { name: t('nav.course'), href: "/course-details" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" data-testid="logo-link">
              <h1 className="text-xl font-heading font-bold text-rjr-primary cursor-pointer">
                RJR Education VSD
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-testid={`nav-link-${item.href.replace('/', '') || 'home'}`}
                  className={`px-3 py-2 text-sm font-medium transition duration-300 hover:text-rjr-primary hover:underline ${
                    location === item.href
                      ? "text-rjr-primary border-b-2 border-rjr-primary"
                      : "text-neutral-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-neutral-800 hover:text-rjr-primary focus:outline-none focus:text-rjr-primary"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="mobile-menu-button"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition duration-300 ${
                  location === item.href
                    ? "text-rjr-primary bg-rjr-secondary"
                    : "text-neutral-800 hover:text-rjr-primary"
                }`}
                onClick={() => setIsOpen(false)}
                data-testid={`mobile-nav-link-${item.href.replace('/', '') || 'home'}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
