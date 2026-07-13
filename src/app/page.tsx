import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import HowCocomoWorks from "@/components/HowCocomoWorks";
import PlatformModules from "@/components/PlatformModules";
import CreatorNetwork from "@/components/CreatorNetwork";
import AIGrowthEngine from "@/components/AIGrowthEngine";
import AIConversation from "@/components/AIConversation";
import Analytics from "@/components/Analytics";
import WhyCocomo from "@/components/WhyCocomo";
import Metrics from "@/components/Metrics";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustBar />
      <Metrics />
      <HowCocomoWorks />
      <PlatformModules />
      <CreatorNetwork />
      <AIGrowthEngine />
      <AIConversation />
      <Analytics />
      <WhyCocomo />
      <FinalCTA />
    </div>
  );
}
