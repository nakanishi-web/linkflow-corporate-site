import HelloSection from '@/app/sections/HelloSection';
import LogoSection from './sections/LogoSection';
import ProblemSolutionSection from '@/app/sections/ProblemSolutionSection';
import FeaturesSection from '@/app/sections/FeaturesSection';
import ValueBenefitsSection from './sections/ValueBenefitsSection'; 
import DashboardSection from '@/app/sections/DashboardSection';
import TestimonialsSection from '@/app/sections/TestimonialsSection'; 
import StepsSection from '@/app/sections/StepsSection';
import PricingSection from '@/app/sections/PricingSection';
import FaqSection from '@/app/sections/FaqSection';
import ContactSection from '@/app/sections/ContactSection'; 

export default function Home() {
  return (
    <main>
      <HelloSection />
      <LogoSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <ValueBenefitsSection />
      <DashboardSection />
      <TestimonialsSection /> 
      <StepsSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}