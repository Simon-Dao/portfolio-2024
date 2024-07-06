// src/ImageGallery.js
import React, { useState } from 'react';

const images = [
  '/avanade.jpg',
  '/me_in_boat.jpg',
  '/internshipevent.jpg',
  '/back.png',
  '/drawing_1.png',
  '/image_2.png',
  '/jeff.png',
  '/rock 1.png',
  '/mountain.jpg',
  '/mma 1.png',
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string>("");

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <button
              className="absolute top-0 right-0 m-4 text-white text-2xl font-bold"
              onClick={() => setSelectedImage("")}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen" />
          </div>
        </div>
      )}
    </div>
  );
}