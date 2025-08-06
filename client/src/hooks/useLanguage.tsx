import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.affiliation': 'Affiliation',
    'nav.course': 'Course Details',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Welcome to RJR Education VSD Centre',
    'hero.subtitle': 'Diploma in Varma Massage (DVM)',
    'hero.description': 'Master the ancient art of traditional healing through our comprehensive Varma Massage program, affiliated with Manonmaniam Sundaranar University.',
    'hero.cta': 'Apply Now',
    
    // About Section
    'about.title': 'About RJR Education VSD Centre',
    'about.description1': 'RJR Education VSD Centre stands as a beacon of traditional healing education, dedicated to preserving and advancing the ancient practice of Varma Massage. Our institution bridges the gap between traditional knowledge and modern educational standards.',
    'about.description2': 'Founded with a mission to provide authentic, comprehensive training in Varma therapy, we combine time-honored techniques with contemporary teaching methodologies to create skilled practitioners who can serve communities with healing expertise.',
    'about.description3': 'Our commitment to excellence is reflected in our university affiliation and our dedication to maintaining the highest standards of traditional healing education.',
    'about.affiliation': 'Affiliated with',
    'about.university': 'Manonmaniam Sundaranar University',
    
    // Course Section
    'course.title': 'Diploma in Varma Massage (DVM)',
    'course.overview': 'Course Overview',
    'course.duration': 'Duration',
    'course.duration_value': '12 months comprehensive program',
    'course.certification': 'Certification',
    'course.certification_value': 'University-affiliated diploma recognition',
    'course.learning': 'Learning Method',
    'course.learning_value': 'Hands-on practical training with theory',
    'course.traditional': 'Traditional Knowledge',
    'course.traditional_desc': 'Learn authentic Varma techniques passed down through generations',
    'course.faculty': 'Expert Faculty',
    'course.faculty_desc': 'Learn from experienced masters and qualified instructors',
    'course.career': 'Career Prospects',
    'course.career_desc': 'Open doors to healthcare, wellness, and therapeutic careers',
    'course.curriculum': 'Course Curriculum',
    'course.core': 'Core Subjects',
    'course.practical': 'Practical Training',
    
    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.description': 'Ready to begin your journey in traditional healing? Contact us to learn more about our Diploma in Varma Massage program.',
    'contact.form_title': 'Send us a Message',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Information',
    'contact.address': 'Address',
    'contact.find_us': 'Find Us',
    'contact.ready': 'Ready to Start Your Journey?',
    'contact.ready_desc': 'Join our comprehensive Diploma in Varma Massage program and become a certified practitioner in traditional healing.',
    'contact.apply': 'Apply Today',
    
    // Footer
    'footer.description': 'Preserving and advancing traditional healing through comprehensive education in Varma Massage therapy, affiliated with Manonmaniam Sundaranar University.',
    'footer.quick_links': 'Quick Links',
    'footer.contact_info': 'Contact Info',
    'footer.copyright': 'All rights reserved.',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.success': 'Success!',
  },
  ta: {
    // Navigation
    'nav.home': 'முகப்பு',
    'nav.about': 'எங்களைப் பற்றி',
    'nav.affiliation': 'இணைப்பு',
    'nav.course': 'பாட விவரங்கள்',
    'nav.contact': 'தொடர்பு',
    
    // Hero Section
    'hero.title': 'RJR கல்வி VSD மையத்திற்கு வரவேற்கிறோம்',
    'hero.subtitle': 'வர்ம மசாஜ் பட்டயம் (DVM)',
    'hero.description': 'மனோன்மணியம் சுந்தரனார் பல்கலைக்கழகத்துடன் இணைந்த எங்கள் விரிவான வர்ம மசாஜ் திட்டத்தின் மூலம் பாரம்பரிய குணப்படுத்தும் கலையில் தேர்ச்சி பெறுங்கள்.',
    'hero.cta': 'இப்போதே விண்ணப்பிக்கவும்',
    
    // About Section
    'about.title': 'RJR கல்வி VSD மையம் பற்றி',
    'about.description1': 'RJR கல்வி VSD மையம் பாரம்பரிய குணப்படுத்தும் கல்வியின் கலங்கரை விளக்காக நிற்கிறது, பண்டைய வர்ம மசாஜ் பயிற்சியைப் பாதுகாக்கவும் முன்னேற்றவும் அர்ப்பணிக்கப்பட்டுள்ளது.',
    'about.description2': 'வர்ம சிகிச்சையில் உண்மையான, விரிவான பயிற்சி அளிக்கும் நோக்கத்துடன் நிறுவப்பட்ட எங்கள் நிறுவனம், நவீன கற்பித்தல் முறைகளுடன் காலங்காலமாக கடைபிடிக்கப்படும் நுட்பங்களை இணைக்கிறது.',
    'about.description3': 'எங்கள் சிறப்புக்கான அர்ப்பணிப்பு எங்கள் பல்கலைக்கழக இணைப்பிலும், பாரம்பரிய குணப்படுத்தும் கல்வியின் உயர்ந்த தரத்தை பராமரிக்கும் எங்கள் அர்ப்பணிப்பிலும் பிரதிபலிக்கிறது.',
    'about.affiliation': 'இணைக்கப்பட்டுள்ளது',
    'about.university': 'மனோன்மணியம் சுந்தரனார் பல்கலைக்கழகம்',
    
    // Course Section
    'course.title': 'வர்ம மசாஜ் பட்டயம் (DVM)',
    'course.overview': 'பாட விளக்கம்',
    'course.duration': 'காலம்',
    'course.duration_value': '12 மாத விரிவான திட்டம்',
    'course.certification': 'சான்றிதழ்',
    'course.certification_value': 'பல்கலைக்கழக-இணைந்த பட்டயம் அங்கீகாரம்',
    'course.learning': 'கற்றல் முறை',
    'course.learning_value': 'கோட்பாடுடன் கூடிய நடைமுறை பயிற்சி',
    'course.traditional': 'பாரம்பரிய அறிவு',
    'course.traditional_desc': 'தலைமுறைகளாக கடத்தப்பட்ட உண்மையான வர்ம நுட்பங்களைக் கற்றுக்கொள்ளுங்கள்',
    'course.faculty': 'நிபுணர் ஆசிரியர்கள்',
    'course.faculty_desc': 'அனுபவம் வாய்ந்த மாஸ்டர்கள் மற்றும் தகுதிவாய்ந்த பயிற்றுவிப்பாளர்களிடம் கற்றுக்கொள்ளுங்கள்',
    'course.career': 'தொழில் வாய்ப்புகள்',
    'course.career_desc': 'சுகாதாரம், நல்வாழ்வு மற்றும் சிகிச்சை தொழில்களுக்கான கதவுகளைத் திறக்கவும்',
    'course.curriculum': 'பாட திட்டம்',
    'course.core': 'முக்கிய பாடங்கள்',
    'course.practical': 'நடைமுறை பயிற்சி',
    
    // Contact Section
    'contact.title': 'தொடர்பு கொள்ளுங்கள்',
    'contact.description': 'பாரம்பரிய குணப்படுத்துதலில் உங்கள் பயணத்தைத் தொடங்கத் தயாரா? எங்கள் வர்ம மசாஜ் பட்டயப் பாடநெறி பற்றி மேலும் அறிய எங்களைத் தொடர்பு கொள்ளுங்கள்.',
    'contact.form_title': 'எங்களுக்கு ஒரு செய்தி அனுப்புங்கள்',
    'contact.name': 'முழு பெயர்',
    'contact.email': 'மின்னஞ்சல் முகவரி',
    'contact.phone': 'தொலைபேசி எண்',
    'contact.message': 'செய்தி',
    'contact.send': 'செய்தி அனுப்பு',
    'contact.info': 'தொடர்பு தகவல்',
    'contact.address': 'முகவரி',
    'contact.find_us': 'எங்களைக் கண்டுபிடி',
    'contact.ready': 'உங்கள் பயணத்தைத் தொடங்கத் தயாரா?',
    'contact.ready_desc': 'எங்கள் விரிவான வர்ம மசாஜ் பட்டயப் பாடநெறியில் சேர்ந்து பாரம்பரிய குணப்படுத்துதலில் சான்றளிக்கப்பட்ட பயிற்சியாளராக மாறுங்கள்.',
    'contact.apply': 'இன்றே விண்ணப்பிக்கவும்',
    
    // Footer
    'footer.description': 'மனோன்மணியம் சுந்தரனார் பல்கலைக்கழகத்துடன் இணைந்த வர்ம மசாஜ் சிகிச்சையில் விரிவான கல்வியின் மூலம் பாரம்பரிய குணப்படுத்துதலைப் பாதுகாத்து முன்னேற்றுதல்.',
    'footer.quick_links': 'விரைவு இணைப்புகள்',
    'footer.contact_info': 'தொடர்பு தகவல்',
    'footer.copyright': 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    
    // Common
    'common.loading': 'ஏற்றுகிறது...',
    'common.error': 'ஒரு பிழை ஏற்பட்டது',
    'common.success': 'வெற்றி!',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('rjr-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ta')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('rjr-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
