import React from "react";
import { Button } from "@/components/ui/button";
import { websiteData } from "@/data/websiteData";

const DriftThrough = () => {
  const { title, subtitle, galleryImages, viewMoreButtonLink } = websiteData.driftThroughData;

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Large image on left */}
          <div className="md:col-span-2">
            <img
              src={galleryImages[0]}
              alt="Large cruise ship"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Two smaller images on right */}
          <div className="grid grid-rows-2 gap-6">
            <img
              src={galleryImages[1]}
              alt="Cruise deck"
              className="w-full h-44 object-cover rounded-lg shadow-lg"
            />
            <img
              src={galleryImages[2]}
              alt="Cruise interior"
              className="w-full h-44 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Second row - smaller images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <img
            src={galleryImages[3]}
            alt="Gallery image"
            className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src={galleryImages[4]}
            alt="Gallery image"
            className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="text-center">
          <Button variant="outline" className="px-8 py-3 border border-blue-600 text-blue-600">
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DriftThrough;
