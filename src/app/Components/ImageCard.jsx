import Image from 'next/image';
import jsonData from '../constant/data.json'; 

const ImageCard = ({ imageUrl, imageText }) => (
  <div className="max-w-xl mx-auto w-[300px]">
    <Image src={imageUrl} alt="Your Image" width={200} height={150} className="w-full h-auto" />
    <div className="p-3">
      <p className="text-center text-sm font-bold hover:text-gray-400">{imageText}</p>
    </div>
  </div>
);

const ImageCardList = () => {

  return (
    <div className='bg-[#F1F1F1]'>
         <h1 className="text-xl font-bold text-center pt-8 pb-2">TRENDING <span className='text-yellow-400'>STICKERS</span></h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-2">
        {jsonData.map(item => (
          <ImageCard key={item.id} imageUrl={item.imageUrl} imageText={item.imageText} />
        ))}
      </div>
    </div>
  );
};

export default ImageCardList;