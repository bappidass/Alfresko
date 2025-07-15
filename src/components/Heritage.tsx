import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { websiteData } from "@/data/websiteData";

const Heritage = () => {
 
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
            Our Heritage
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A Journey Through the Rich Culture, Traditions, and History of Northeast India
          </p>
        </div>

        <div className="space-y-12">
          {websiteData.blogPosts.map((post) => (
            <div key={post.id} className="grid md:grid-cols-2 gap-8 items-center">
              <div >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className={`${post.id % 2 === 0 ? 'md:order-1' : ''}`}>
                <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">
                  {post.title}
                </h2>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="link" className="text-blue-600 hover:text-blue-800">
            Explore more blogs.
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Heritage;
