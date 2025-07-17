import { websiteData } from "@/data/websiteData";


const AboutUsPage = () => {
  const { hero, company, story } = websiteData.aboutUsData;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-light text-gray-900 mb-2">{hero.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
         <h2 className="text-3xl font-serif md:text-left text-center text-blue-600 font-light mb-4">{company.title}</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
           
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              {company.description}
            </p>
          </div>

          {/* Right Image */}
          <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
            {company.imageUrl ? (
              <img src={company.imageUrl} alt={company.imageAlt} className="object-cover w-full h-full rounded-lg" />
            ) : (
              <span className="text-gray-500">{company.imageAlt}</span>
            )}
          </div>
        </div>

        {/* Our Story & Our Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif md:text-right text-center text-blue-600 mb-2">{story.title}</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Image */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              {story.imageUrl ? (
                <img src={story.imageUrl} alt={story.imageAlt} className="object-cover w-full h-full rounded-lg" />
              ) : (
                <span className="text-gray-500">{story.imageAlt}</span>
              )}
            </div>

            {/* Right Content */}
            <div>
              {story.paragraphs.map((para, index) => (
                <p key={index} className={`text-gray-600 leading-relaxed ${index !== 0 ? 'mt-4' : ''}`}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
