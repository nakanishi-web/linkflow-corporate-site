import HeroSection from "@/app/sections/HelloSection";
import ProblemSolutionSection from "@/app/sections/ProblemSolutionSection";
import FeaturesSection from "@/app/sections/FeaturesSection";
import DashboardSection from "@/app/sections/DashboardSection";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <DashboardSection /> 
    </main>
  );
}