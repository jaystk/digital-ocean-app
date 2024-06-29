import React, { useState } from 'react';

const GuessRage = () => {
  const initialImages = [ 
    { imageSrc: "/public/astelic.png", title: "astelic", strokeColor: '' },
    { imageSrc: "/boomer.png", title: "boomer", strokeColor: '' },
    { imageSrc: "/rachel.png", title: "rachel", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "bamf", strokeColor: '' },
    { imageSrc: "/jay.png", title: "jay", strokeColor: '' },
    { imageSrc: "/jedz.png", title: "Jedz", strokeColor: '' },
    { imageSrc: "/lego.png", title: "LegoMaestro", strokeColor: '' },
    { imageSrc: "/gabby.png", title: "Gabby", strokeColor: '' },
    { imageSrc: "/vurb.png", title: "Vurb", strokeColor: '' },
    { imageSrc: "/squid.png", title: "Squid", strokeColor: '' },
    { imageSrc: "/shady.png", title: "Shady", strokeColor: '' },
    { imageSrc: "/zach.png", title: "ZachPlaysAN", strokeColor: '' },
    { imageSrc: "/walli.png", title: "Wallibear", strokeColor: '' },
    { imageSrc: "/noah.png", title: "PikaClicks", strokeColor: '' },
    { imageSrc: "/blushi.png", title: "Blushi", strokeColor: '' },
    { imageSrc: "/birken.png", title: "Mcbirken", strokeColor: '' },
    { imageSrc: "/angelicat.png", title: "Angelicat", strokeColor: '' },
    { imageSrc: "/tapl.png", title: "Tapl", strokeColor: '' },
    { imageSrc: "/uber.png", title: "Uber", strokeColor: '' },
    { imageSrc: "/thirty.png", title: "ThirtyVirus", strokeColor: '' },
    { imageSrc: "/jess.png", title: "Sagemommy69", strokeColor: '' },
    { imageSrc: "/kayne.png", title: "Kayne", strokeColor: '' },
    { imageSrc: "/zpyh.png", title: "Zyph", strokeColor: '' },
    { imageSrc: "/max.png", title: "MaxK", strokeColor: '' },
    { imageSrc: "/colin.png", title: "Colin", strokeColor: '' },
    { imageSrc: "/krustydavid.png", title: "KrustyDavid", strokeColor: '' },
    { imageSrc: "/chazm.png", title: "Chazm", strokeColor: '' },
    { imageSrc: "/dannyspoonz.png", title: "Dannyspoonz", strokeColor: '' },
    { imageSrc: "/izur.png", title: "Izur", strokeColor: '' },
    { imageSrc: "/xenbe.png", title: "Xenbe", strokeColor: '' },
    { imageSrc: "/ghostie.png", title: "Ghostie", strokeColor: '' },
    { imageSrc: "/mina.png", title: "Mina", strokeColor: '' },
    { imageSrc: "/hannahrose.png", title: "Hannahxxrose", strokeColor: '' },
    { imageSrc: "/scott.png", title: "Scott", strokeColor: '' },
    { imageSrc: "/morgan.png", title: "Morgan", strokeColor: '' },
    { imageSrc: "/sara.png", title: "Sara", strokeColor: '' },
    { imageSrc: "/emmy.png", title: "Emmy", strokeColor: '' },
    { imageSrc: "/kate.png", title: "Kate", strokeColor: '' },
    { imageSrc: "/ameila.png", title: "Ameila", strokeColor: '' },
    { imageSrc: "/dream.png", title: "Dream", strokeColor: '' },
    { imageSrc: "/Matt.png", title: "Matt", strokeColor: '' },
    { imageSrc: "/gamerboy80.png", title: "Gamerboy80", strokeColor: '' },
    { imageSrc: "/test44.png", title: "test44", strokeColor: '' },
    { imageSrc: "/test45.png", title: "test45", strokeColor: '' },
    { imageSrc: "/test46.png", title: "test46", strokeColor: '' },
    { imageSrc: "/test47.png", title: "test47", strokeColor: '' },
    { imageSrc: "/test48.png", title: "test48", strokeColor: '' },
    { imageSrc: "/test49.png", title: "test49", strokeColor: '' },
    { imageSrc: "/test50.png", title: "test50", strokeColor: '' },
    { imageSrc: "/test51.png", title: "test51", strokeColor: '' },
    { imageSrc: "/test52.png", title: "test52", strokeColor: '' },
    { imageSrc: "/test53.png", title: "test53", strokeColor: '' },
    { imageSrc: "/test54.png", title: "test54", strokeColor: '' },
    { imageSrc: "/test55.png", title: "test55", strokeColor: '' },
    { imageSrc: "/test56.png", title: "test56", strokeColor: '' },
    { imageSrc: "/test57.png", title: "test57", strokeColor: '' },
    { imageSrc: "/test58.png", title: "test58", strokeColor: '' },
    { imageSrc: "/test59.png", title: "test59", strokeColor: '' },
    { imageSrc: "/test60.png", title: "test60", strokeColor: '' },
    { imageSrc: "/test61.png", title: "test60", strokeColor: '' }

];


  const [images, setImages] = useState(initialImages);
  const [currentColor, setCurrentColor] = useState('red');
  console.log(images)

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
      <div className='flex gap-1 justify-center flex-col space-y'>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700 transition-colors" onClick={() => handleColorChange('red')}>Question 1</button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-700 transition-colors" onClick={() => handleColorChange('orange')}>Question 2</button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-700 transition-colors" onClick={() => handleColorChange('yellow')}>Question 3</button>
          <button className="px-4 py-2 bg-lime-500 text-white rounded-lg shadow-md hover:bg-lime-700 transition-colors" onClick={() => handleColorChange('lime')}>Question 4</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors" onClick={() => handleColorChange('green')}>Question 5</button>
          <button className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-700 transition-colors" onClick={() => handleColorChange('teal')}>Question 6</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors" onClick={() => handleColorChange('blue')}>Question 7</button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors" onClick={() => handleColorChange('purple')}>Question 8</button>
          <button className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-700 transition-colors" onClick={() => handleColorChange('pink')}>Final Guess</button>
        </div>

        <div className="p-4 pb-10 min-h-screen">
          <div className="grid grid-cols-12 gap-2 h-full">
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
        <img src={imageSrc} alt={title} className={`w-full h-full object-cover  ${isClicked ? 'opacity-50' : ''} hover:scale-125`} />
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
