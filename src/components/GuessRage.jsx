import React, { useState } from 'react';

const GuessRage = () => {
  const initialImages = [
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test1", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test2", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test3", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test4", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test5", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test6", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test7", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test8", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test9", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test10", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test11", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test12", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test13", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test14", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test15", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test16", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test17", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test18", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test19", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test20", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test21", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test22", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test23", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test24", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test25", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test26", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test27", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test28", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test29", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test30", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test31", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test32", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test33", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test34", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "test35", strokeColor: '' },
  ];

  const [images, setImages] = useState(initialImages);
  const [currentColor, setCurrentColor] = useState('red');

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  const handleImageClick = (index) => {
    setImages(prevImages =>
      prevImages.map((image, i) => 
        i === index ? { ...image, strokeColor: currentColor } : image
      )
    );
  };

  return (
    <>
      <div className='flex bg-blue-950'>
      <div className='flex flex-col space-y'>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700 transition-colors" onClick={() => handleColorChange('red')}>Red</button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-700 transition-colors" onClick={() => handleColorChange('orange')}>Orange</button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-700 transition-colors" onClick={() => handleColorChange('yellow')}>Yellow</button>
          <button className="px-4 py-2 bg-lime-500 text-white rounded-lg shadow-md hover:bg-lime-700 transition-colors" onClick={() => handleColorChange('lime')}>Lime</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors" onClick={() => handleColorChange('green')}>Green</button>
          <button className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-700 transition-colors" onClick={() => handleColorChange('teal')}>Teal</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors" onClick={() => handleColorChange('blue')}>Blue</button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors" onClick={() => handleColorChange('purple')}>Purple</button>
          <button className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-700 transition-colors" onClick={() => handleColorChange('pink')}>Pink</button>
        </div>

        <div className="container mx-auto p-4 pb-10 min-h-screen">
          <div className="grid grid-cols-7 gap-2 h-full">
            {images.map((image, index) => (
              <ImageCard 
                key={index} 
                imageSrc={image.imageSrc} 
                title={image.title} 
                strokeColor={image.strokeColor}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ImageCard = ({ imageSrc, title, strokeColor, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };

  return (
    <div className="relative bg-blue-200 shadow-lg rounded-lg overflow-hidden flex flex-col">
      <div className="relative flex flex-col justify-center items-center p-4 cursor-pointer h-48" onClick={handleImageClick}>
        <img src={imageSrc} alt={title} className={`w-full h-full object-cover ${isClicked ? 'opacity-50' : ''} hover:scale-125`} />
        {isClicked && (
          <div className="absolute inset-0 flex justify-center items-center">
            <svg className="w-3/4 h-3/4" viewBox="0 0 100 100">
              <line x1="10" y1="10" x2="90" y2="90" stroke={strokeColor} strokeWidth="10" />
              <line x1="90" y1="10" x2="10" y2="90" stroke={strokeColor} strokeWidth="10" />
            </svg>
          </div>
        )}
      </div>
      <div className="bg-blue-400 text-center py-2">
        <span className="text-white font-semibold">{title}</span>
      </div>
    </div>
  );
};

export default GuessRage;
