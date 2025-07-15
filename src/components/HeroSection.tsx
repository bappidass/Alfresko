import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { websiteData } from "@/data/websiteData";
import NewsMarquee from "./NewsMarquee"; // Assuming NewsMarquee is in the same directory or correctly imported
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {websiteData.hero.backgroundImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat relative"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="w-full mx-auto  text-white">
            <h1 className="text-2xl lg:text-6xl font-serif mt-6 font-light leading-tight mb-6 animate-fade-in">
              {websiteData.hero.title}
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-8  mx-auto opacity-90 animate-fade-in">
              {websiteData.hero.subtitle}
            </p>
            <div className="flex flex-col items-center gap-4"> {/* Added a flex container for buttons/marquee */}
              <button className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-sm  tracking-wide hover:bg-white font-bold font-serif hover:text-gray-900 transition-all duration-300 animate-fade-in">
                Book a Cruise
              </button>

              {/* News Marquee Section */}
              <div className="w-full max-w-6x1 mt-10  animate-fade-in"> {/* Adjusted styling for marquee */}
                <NewsMarquee />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;