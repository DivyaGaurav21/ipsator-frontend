import React from 'react';

const HoverCard = ({ title, imageUrl, description }) => {
  return (
    <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:translate-y-[-10px]">
      <img src={imageUrl} alt={title} className="w-full h-[350px]" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-red-800 text-center">{title}</h2>
        <div className="text-sm font-serif text-gray-500">
          {description.map((paragraph, index) => (
            <p key={index} className='text-justify'>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
