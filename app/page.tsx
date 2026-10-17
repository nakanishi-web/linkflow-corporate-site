import HelloSection from '@/app/sections/HelloSection';
import LogoSection from './sections/LogoSection';
import ProblemSolutionSection from '@/app/sections/ProblemSolutionSection';
import FeaturesSection from '@/app/sections/FeaturesSection';
import ValueBenefitsSection from './sections/ValueBenefitsSection'; 
import DashboardSection from '@/app/sections/DashboardSection';
import PricingSection from '@/app/sections/PricingSection';
import ContactSection from '@/app/sections/ContactSection'; 

export default function Home() {
  return (
    <main>
      <HelloSection />
      <LogoSection />
      {/* 1. 課題と解決（共感・当事者意識） */}
      <ProblemSolutionSection />
      {/* 2. 機能紹介（解決手段の提示） */}
      <FeaturesSection />
      {/* 3. 選ばれる理由・ベネフィット（独自性・導入効果の強調） */}
      <ValueBenefitsSection />
      <DashboardSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}