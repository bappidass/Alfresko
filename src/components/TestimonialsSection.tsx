
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import { websiteData } from "@/data/websiteData";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
            Guest Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore scenic waterways through the eyes of our delighted guests!
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {websiteData.testimonials.map((testimonial,index) => (
              <SwiperSlide key={testimonial.id}>
                <div className={` rounded-lg py-2 px-8 shadow-lg  h-[400px] flex  flex-col justify-between  ${index/2?'bg-[#2C4A7C]':'bg-[#434343]'} `}>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white leading-relaxed mb-6 flex-grow">
                    {testimonial.comment}
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                     <img src={`${testimonial.avatar}`} className='w-12 h-12  bg-gray-300 rounded-full ' alt="" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{testimonial.name}</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
