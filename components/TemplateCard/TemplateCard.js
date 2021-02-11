import ReactHtmlParser from 'react-html-parser';

import Avatar from '../Avatar/Avatar';

const getImageURL = file => {
  return URL.createObjectURL(file);
};

const TemplateCard = ({
  name,
  title,
  rating,
  trade,
  screenShots,
  userPhoto,
  userName,
  subCategory,
  preview,
  description,
  imageArray
}) => {
  return (
    <div
      className={`${
        preview ? 'w-3/4' : 'w-64'
      } shadow m-4 rounded-lg cursor-pointer relative hover:shadow-2xl transition ml-auto mr-auto`}
    >
      <img
        className="max-h-40 w-full object-cover rounded-t-lg"
        src={screenShots}
        alt=""
      />

      <div className="px-3 pb-4">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h1 className="text-2xl text-bold">{name}</h1>
            <p className="text-sm text-gray-400 font-thin">{userName}</p>
            <p className="text-sm">
              <span role="img" aria-label="star">
                ⭐️{' '}
              </span>
              {rating} ・
              <span role="img" aria-label="fire">
                🔥{' '}
              </span>
              {trade} trades
            </p>
          </div>
          <Avatar
            src={userPhoto}
            size="16"
            className="-mt-6 ring-white ring-4"
          ></Avatar>
        </div>
        <p className="text-gray-500 text-sm mt-2">{title}</p>
        <div>
          {subCategory?.map((oneTag, index) => (
            <span
              key={index}
              className={`text-xs bg-${
                index % 2 === 0 ? 'blue' : 'red'
              }-100 px-2 text-indigo-800 rounded-lg mr-1 `}
            >
              {oneTag}
            </span>
          ))}
        </div>
        <div>{ReactHtmlParser(description)}</div>
        {imageArray ? (
          <div className="flex">
            {imageArray.map((file, index) => (
              <img
                key={index}
                src={getImageURL(file)}
                alt=""
                className="h-16 m-2"
              />
            ))}
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export default TemplateCard;
