import React from 'react';
import { websiteData } from '@/data/websiteData';
const Clients = () => {
 

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
            Our Clients
          </h1>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {websiteData.clientLogos.map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24 flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-500">{client.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === 3 ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
