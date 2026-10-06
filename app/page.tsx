import HeroSection from "@/app/sections/HelloSection";
import ProblemSolutionSection from "@/app/sections/ProblemSolutionSection";
import FeaturesSection from "@/app/sections/FeaturesSection"; 

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
    </main>
  );
}