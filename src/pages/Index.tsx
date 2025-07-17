
import Header from "@/components/Layout/DefaultHeader";
import HeroSection from "@/components/HeroSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import LuxuryServicesSection from "@/components/LuxuryServicesSection";
import StatisticsSection from "@/components/StatisticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Heritage from "@/components/Heritage";
import DriftThrough from '@/components/DriftThrough'
import Clients from "@/components/Clients";
const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExperiencesSection />
      <LuxuryServicesSection />
      <StatisticsSection />
      <TestimonialsSection />
      <DriftThrough/>
      <Clients/>
      <Heritage/>
    </div>
  );
};

export default Index;
