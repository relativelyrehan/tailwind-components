import Image from 'next/image';
import ReactHtmlParser from 'react-html-parser';

import Avatar from '../Avatar/Avatar';

const getImageURL = file => {
  return URL.createObjectURL(file);
};

const Cards = ({
  name,
  trade,
  screenShots,
  userPhoto,
  userName,
  subCategory,
  description,
  imageArray
}) => {
  return (
    <div
      className={`w-76 shadow rounded-lg cursor-pointer relative hover:shadow-2xl mx-auto transition bg-cards text-white mb-12 border-2 border-darkThree`}
    >
      <img
        className="lg:max-h-44 w-full xl:max-h-56 object-cover rounded-t-lg"
        src={screenShots}
        alt=""
      />

      <div className="px-3 pb-4">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h1 className="text-2xl font-body font-semibold my-1 leading-8 mt-4">
              {name}
            </h1>
          </div>
        </div>
        <div className="text-sm mt-1 text-gray-400 leading-5">
          {ReactHtmlParser(description).slice(0, 50)}
        </div>
        <p className="text-sm my-2">
          <Image src="/user.svg" height={16} width={16} />
          {trade} 1000+ Users
        </p>
        <div className=" my-2">
          {subCategory?.map((oneTag, index) => (
            <span
              key={index}
              className={`text-xs bg-${
                index % 2 === 0 ? 'blue' : 'red'
              }-100 px-2 text-indigo-800 rounded-2xl mr-1 py-1`}
            >
              {oneTag}
            </span>
          ))}
        </div>
        {imageArray ? (
          <div className="flex">
            {imageArray.map((file, index) => (
              <img
                key={index}
                src={getImageURL(file)}
                alt=""
                className="h-16"
              />
            ))}
          </div>
        ) : undefined}
      </div>
      <div className="py-1 px-4 flex items-center border-t-2 border-darkThree">
        <Avatar src={userPhoto} size="10"></Avatar>

        <p className="ml-4 text-lg font-medium flex flex-col">
          <span className="text-gray-300 font-body">Created by</span>
          <span className="font-bold">{userName}</span>
        </p>
      </div>
    </div>
  );
};

export default Cards;
