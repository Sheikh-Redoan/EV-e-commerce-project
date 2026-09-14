import React from 'react';

export default function ProductGallery({ galleryImages }) {
  if (!galleryImages || galleryImages.length === 0) return null;

  return (
    <section className="w-full bg-[#0A1119] px-6 md:px-20 py-16 md:py-24 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col gap-8">
        <h2 className="text-[#F5F9FF] text-3xl font-bold font-['Inter']">
          Product Gallery
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="bg-[#101A2C] rounded-2xl border border-[#1C2A40] overflow-hidden">
              <img 
                src={img.image || "https://placehold.co/600x400?text=Gallery+Image"} 
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
