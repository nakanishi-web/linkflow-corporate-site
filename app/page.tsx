import HelloSection from '@/app/sections/HelloSection';
import ProblemSolutionSection from '@/app/sections/ProblemSolutionSection';
import FeaturesSection from '@/app/sections/FeaturesSection';
import DashboardSection from '@/app/sections/DashboardSection';
import PricingSection from '@/app/sections/PricingSection';

export default function Home() {
  return (
    <main>
      <HelloSection /> 
      <ProblemSolutionSection />
      <FeaturesSection />
      <DashboardSection />
      <PricingSection />
    </main>
  );
}