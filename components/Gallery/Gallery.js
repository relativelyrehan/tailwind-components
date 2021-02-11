import Image from 'next/image';
const Gallery = ({ templateImages }) => {
  return (
    <div className="">
      <div className="main-image">
        <div className="cursor-pointer w-full h-full object-cover rounded-lg">
          <Image
            src={templateImages[0]}
            alt=""
            height={600}
            width={800}
            layout="responsive"
          />
        </div>
      </div>
      <div className="gallery flex gap-4 py-1 my-2 lg:h-60 md:h-40 h-24">
        <div>
          <img
            className="cursor-pointer h-full w-80 object-cover rounded-lg "
            src={
              templateImages[1]
                ? templateImages[1]
                : 'https://source.unsplash.com/random?table'
            }
            alt=""
          />
        </div>
        <div>
          <img
            className="cursor-pointer h-full w-80 object-cover rounded-lg"
            src={
              templateImages[2]
                ? templateImages[2]
                : 'https://source.unsplash.com/random?workspace'
            }
            alt=""
          />
        </div>
        <div>
          <img
            className="cursor-pointer h-full w-80 object-cover rounded-lg"
            src={
              templateImages[3]
                ? templateImages[3]
                : 'https://source.unsplash.com/random?books'
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
