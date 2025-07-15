import { websiteData } from "@/data/websiteData";
import { Link } from "react-router-dom";

const ExperiencesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
            {websiteData.experiences.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {websiteData.experiences.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {websiteData.experiences.items.map((experience) => (
            <Link
              to={`/daily-cruises`} // Example route — adjust as needed
              key={experience.id}
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div
                  className="h-[426px] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${experience.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-3xl font-serif font-light mb-3">
                      {experience.title}
                    </h3>
                    <p className="text-lg font-light leading-relaxed max-w-md">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
