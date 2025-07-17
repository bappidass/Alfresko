import { Button } from "@/components/ui/button";
import { websiteData } from "@/data/websiteData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const PrivateChartersPage = () => {
  const { hero, galleryImages, content } = websiteData.charterData;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-2xl md:text-5xl font-serif font-light text-gray-900 mb-2">
            {hero.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{hero.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6">
        {/* Swiper Main Gallery */}
        <div className="relative mb-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            effect="fade"
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="rounded-lg overflow-hidden"
          >
            {galleryImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-96 object-cover"
                />
              </SwiperSlide>
            ))}

            {/* Custom navigation buttons */}
            <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white hover:text-black z-10">
             
            </button>
            <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white hover:text-black z-10">
             
            </button>
          </Swiper>
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2 mb-12">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-16 md:h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
            />
          ))}
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-serif font-light text-center mb-8">
            {content.heading}
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed mb-8">
            {content.paragraphs.map((para, index) => (
              <p key={index} className={index === content.paragraphs.length - 1 ? "font-medium" : ""}>
                {para}
              </p>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
              GET QUOTE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateChartersPage;
