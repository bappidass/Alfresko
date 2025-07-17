
import { websiteData } from "@/data/websiteData";
import { Link } from "react-router-dom"

const DailyCruisesPage = () => {
  return (
    <section className="py-6 ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-5xl font-serif font-light text-gray-900 mb-6">
            {websiteData.dailyCruises.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {websiteData.dailyCruises.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {websiteData.dailyCruises.section.map((section) => (
          <Link
  to="/booking-flow"
  key={section.id}
  className="group cursor-pointer block"
>
  <div className="relative overflow-hidden rounded-lg shadow-lg">
    <div
      className="h-[426px] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url(${section.image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-8 left-8 text-white">
        <h3 className="text-3xl font-serif font-light mb-3">
          {section.title}
        </h3>
        <p className="text-lg font-light leading-relaxed max-w-md">
          {section.description}
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

export default DailyCruisesPage;
