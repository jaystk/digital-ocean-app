import React, { useState } from 'react';

const GuessRage = () => {
  const initialImages = [
    { imageSrc: "./src/assets/astelic.png", title: "astelic", strokeColor: '' },
    { imageSrc: "./src/assets/boomer.png", title: "boomer", strokeColor: '' },
    { imageSrc: "./src/assets/rachel.png", title: "rachel", strokeColor: '' },
    { imageSrc: "https://i.imgur.com/u1G0KGq.png", title: "bamf", strokeColor: '' },
    { imageSrc: "./src/assets/jay.png", title: "jay", strokeColor: '' },
    { imageSrc: "./src/assets/jedz.png", title: "Jedz", strokeColor: '' },
    { imageSrc: "./src/assets/lego.png", title: "LegoMaestro", strokeColor: '' },
    { imageSrc: "./src/assets/gabby.png", title: "Gabby", strokeColor: '' },
    { imageSrc: "./src/assets/vurb.png", title: "Vurb", strokeColor: '' },
    { imageSrc: "./src/assets/squid.png", title: "Squid", strokeColor: '' },
    { imageSrc: "./src/assets/shady.png", title: "Shady", strokeColor: '' },
    { imageSrc: "./src/assets/zach.png", title: "ZachPlaysAN", strokeColor: '' },
    { imageSrc: "./src/assets/walli.png", title: "Wallibear", strokeColor: '' },
    { imageSrc: "./src/assets/noah.png", title: "PikaClicks", strokeColor: '' },
    { imageSrc: "./src/assets/blushi.png", title: "Blushi", strokeColor: '' },
    { imageSrc: "./src/assets/birken.png", title: "Mcbirken", strokeColor: '' },
    { imageSrc: "./src/assets/angelicat.png", title: "Angelicat", strokeColor: '' },
    { imageSrc: "./src/assets/tapl.png", title: "Tapl", strokeColor: '' },
    { imageSrc: "./src/assets/uber.png", title: "Uber", strokeColor: '' },
    { imageSrc: "./src/assets/thirty.png", title: "ThirtyVirus", strokeColor: '' },
    { imageSrc: "./src/assets/jess.png", title: "Sagemommy69", strokeColor: '' },
    { imageSrc: "./src/assets/kayne.png", title: "Kayne", strokeColor: '' },
    { imageSrc: "./src/assets/zpyh.png", title: "Zyph", strokeColor: '' },
    { imageSrc: "./src/assets/max.png", title: "MaxK", strokeColor: '' },
    { imageSrc: "./src/assets/colin.png", title: "Colin", strokeColor: '' },
    { imageSrc: "./src/assets/krustydavid.png", title: "KrustyDavid", strokeColor: '' },
    { imageSrc: "./src/assets/chazm.png", title: "Chazm", strokeColor: '' },
    { imageSrc: "./src/assets/dannyspoonz.png", title: "Dannyspoonz", strokeColor: '' },
    { imageSrc: "./src/assets/izur.png", title: "Izur", strokeColor: '' },
    { imageSrc: "./src/assets/xenbe.png", title: "Xenbe", strokeColor: '' },
    { imageSrc: "./src/assets/ghostie.png", title: "Ghostie", strokeColor: '' },
    { imageSrc: "./src/assets/mina.png", title: "Mina", strokeColor: '' },
    { imageSrc: "./src/assets/hannahrose.png", title: "Hannahxxrose", strokeColor: '' },
    { imageSrc: "./src/assets/scott.png", title: "Scott", strokeColor: '' },
    { imageSrc: "./src/assets/morgan.png", title: "Morgan", strokeColor: '' },
    { imageSrc: "./src/assets/sara.png", title: "Sara", strokeColor: '' },
    { imageSrc: "./src/assets/emmy.png", title: "Emmy", strokeColor: '' },
    { imageSrc: "./src/assets/kate.png", title: "Kate", strokeColor: '' },
    { imageSrc: "./src/assets/ameila.png", title: "Ameila", strokeColor: '' },
    { imageSrc: "./src/assets/dream.png", title: "Dream", strokeColor: '' },
    { imageSrc: "./src/assets/Matt.png", title: "Matt", strokeColor: '' },
    { imageSrc: "./src/assets/gamerboy80.png", title: "Gamerboy80", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test44", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test45", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test46", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test47", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test48", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test49", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test50", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test51", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test52", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test53", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test54", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test54", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test55", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test56", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test57", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test58", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test59", strokeColor: '' },
    { imageSrc: "./src/assets/.png", title: "test60", strokeColor: '' },


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
