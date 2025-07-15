import { websiteData } from "@/data/websiteData";

const LuxuryServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
            {websiteData.luxuryServices.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {websiteData.luxuryServices.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {websiteData.luxuryServices.services.map((service, index) => (
            <div
              key={service.id}
              className={`flex items-center gap-4  h-fit border border-gray-500 rounded-lg`}
            >
              <div className="relative overflow-hidden shadow-lg w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full rounded-tl-lg rounded-bl-lg object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="w-1/2">
                <div className=" rounded-lg">
                  <h3 className="text-sm lg:text-3xl font-serif font-light text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-lg text-gray-600 leading-relaxed line-clamp-3 lg:line-clamp-5 ">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryServicesSection;
