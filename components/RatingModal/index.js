import { useState } from 'react';
import StarRatings from 'react-star-ratings';

const RatingModal = () => {
  const [rating, setRating] = useState(0);
  return (
    <>
      <div className="py-3 w-1/3 border rounded-xl">
        <div className="bg-white min-w-1xl flex flex-col">
          <div className="px-12 py-5 text-center">
            <h2 className="text-gray-800 text-3xl font-semibold">
              Rate this template!
            </h2>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center py-6 space-y-3">
              <span className="text-2xl text-gray-800 text-center">
                How Would you rate this template?
              </span>
              <div className="flex space-x-3">
                <StarRatings
                  rating={rating}
                  starRatedColor="#FFB628"
                  changeRating={setRating}
                  starHoverColor="#FFB628"
                  starDimension={'40px'}
                  numberOfStars={5}
                  name="rating"
                />
              </div>
            </div>
            <div className="w-3/4 flex flex-col">
              <button className="py-3 my-8 text-lg bg-red-500 rounded text-white">
                Rate now
              </button>
            </div>
          </div>
          <div className="h-20 flex items-center justify-center">
            <p className="text-gray-700 cursor-pointer text-xl hover:text-gray-800">
              Maybe later
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingModal;
