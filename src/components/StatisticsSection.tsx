import { websiteData } from "@/data/websiteData";
import CountUp from "react-countup";

const StatisticsSection = () => {
  return (
    <section
      className="py-20 relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('/images/Static-section.png')` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {websiteData.statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                  <CountUp end={parseInt(stat.value)} duration={4} />+
                </div>
                <div className="text-lg font-light text-gray-600">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
