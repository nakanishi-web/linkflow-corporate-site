import HelloSection from '@/app/sections/HelloSection';
import LogoSection from './sections/LogoSection';
import ProblemSolutionSection from '@/app/sections/ProblemSolutionSection';
import FeaturesSection from '@/app/sections/FeaturesSection';
import DashboardSection from '@/app/sections/DashboardSection';
import PricingSection from '@/app/sections/PricingSection';
import ContactSection from '@/app/sections/ContactSection'; 

export default function Home() {
  return (
    <main>
      <HelloSection />
      <LogoSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <DashboardSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}