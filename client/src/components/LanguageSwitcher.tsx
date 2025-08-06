import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/hooks/useLanguage";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={(value: 'en' | 'ta') => setLanguage(value)}>
      <SelectTrigger 
        className="w-32 bg-rjr-secondary border-rjr-primary text-neutral-800 focus:ring-rjr-primary"
        data-testid="language-switcher"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en" data-testid="language-option-en">English</SelectItem>
        <SelectItem value="ta" data-testid="language-option-ta">தமிழ்</SelectItem>
      </SelectContent>
    </Select>
  );
}
