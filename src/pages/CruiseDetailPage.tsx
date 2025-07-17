import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

const cruiseData = {
  category: 'DAILY CRUISES • SUNDOWN CRUISE',
  title: 'Sunset Cruise',
  description:
    'Sail the mighty Brahmaputra as it was meant to be explored. Ignite your passion and uncover the wonders of this majestic river.',
  featuredImage:
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
  galleryImages: [
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
  ],
  pricingOptions: [
    { label: 'Middle Deck', pricingLabel: 'Adult', price: 600 },
    { label: 'Upper Deck', pricingLabel: 'Children', price: 500 },
  ],
  duration: '1 Hour',
  timing: '5:00 PM - 6:00 PM',
  inclusions:
    'Sail the mighty Brahmaputra as it was meant to be explored. Ignite your passion and uncover the wonders of this majestic river.',
};

const CruiseDetailPage = () => {
  const navigation = useNavigate()
  const {
    title,
    description,
    galleryImages,
    pricingOptions,
    duration,
    timing,
    inclusions,
  } = cruiseData;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Swiper Gallery */}
          <div className="relative rounded-lg overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              effect="fade"
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full h-96"
            >
              {galleryImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="h-96 w-full bg-cover bg-center bg-no-repeat relative"
                    style={{ backgroundImage: `url(${image})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 rounded-lg" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Swiper nav buttons */}
            <button className="swiper-button-prev absolute left-4 top-1/2 z-10 transform -translate-y-1/2 bg-white/80 p-2 rounded-full">
           
            </button>
            <button className="swiper-button-next absolute right-4 top-1/2 z-10 transform -translate-y-1/2 bg-white/80 p-2 rounded-full">
             
            </button>
             <div className="grid grid-cols-7 gap-2 mt-10">
              {galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-80"
                />
              ))}
            </div>
          </div>

          {/* Cruise Details */}
          <div>
            <h1 className="text-4xl font-serif mb-4">{title}</h1>
            <p className="text-gray-600 mb-6">{description}</p>

            {/* Pricing Section */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-4">PRICING</h3>
              <div className="flex gap-4 mb-4">
                {pricingOptions.map((option, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? 'default' : 'outline'}
                    className={index === 0 ? 'bg-blue-500' : ''}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>

              <div className="space-y-2 mb-4">
                {pricingOptions.map((option, index) => (
                  <div key={index} className="flex justify-between">
                    <span>
                      {option.pricingLabel} : ₹{option.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-16 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs">📷</span>
                </div>
                <div>
                  <div className="font-semibold">DURATION</div>
                  <div>{duration}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="font-semibold">TIMING</div>
                <div>{timing}</div>
              </div>
            </div>

            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg" onClick={()=>navigation('/booking-flow')}>
              CHECK FOR AVAILABILITY
            </Button>
          </div>
        </div>

        {/* Inclusions Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-serif mb-6">Inclusions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed">{inclusions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CruiseDetailPage;
