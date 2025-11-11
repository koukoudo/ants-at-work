import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { galleryImages } from "../../../../assets/images/galleryImages";

export const GallerySection = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const handleImageClick = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="relative bg-[#111110] py-16">
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16">
        <div className="flex items-center mb-8">
          <div className="w-4 h-4 mr-4 bg-[#ffde17] rounded-full"></div>
          <h2 className="text-xl font-light text-white">OUR WORK</h2>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((item) => (
            <Card key={item.id} className="bg-[#1111104c] rounded-[15px] backdrop-blur-[10px] border-0 overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 break-inside-avoid mb-8 cursor-pointer" onClick={() => handleImageClick(item)}>
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt={`${item.title} - Ants At Work ${item.category} Project in Johannesburg`}
                    className={`w-full ${item.height} object-cover`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300 text-center px-4">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-[#ffde17] transition-colors duration-200 z-10"
            >
              ×
            </button>
            
            {/* Image */}
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};
