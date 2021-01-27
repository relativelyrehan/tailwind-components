const Card = () => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-center text-3xl md:text-5xl lg:text-6xl font-bold my-4 text-gray-800">
          Our Plans
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly text-lg">
          <div className="w-4/5 lg:w-1/5 border border-gray-700 shadow-lg rounded-lg text-gray-700 text-center p-8 hover:bg-gray-50 cursor-pointer my-4">
            <p className="text-2xl font-bold">Base Plan</p>
            <h1 className="text-4xl lg:text-5xl my-8 text-gray-900 font-bold">$249</h1>
            <ul className="list-disc">You will get following</ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <button className="transition bg-black text-gray-50 px-6 py-2 font-bold rounded-lg my-4 hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110">
              Buy now
            </button>
          </div>
          <div className="w-4/5 lg:w-1/5 border border-gray-700 shadow-lg rounded-lg text-gray-700 text-center p-8 hover:bg-gray-50 cursor-pointer my-4">
            <p className="bg-gray-800 text-white text-2xl font-semibold py-2 rounded-lg mb-4">
              Recommended
            </p>
            <p className="text-2xl font-bold">Best Plan</p>
            <h1 className="text-4xl lg:text-5xl my-8 text-gray-900 font-bold">$349</h1>
            <ul className="list-disc">You will get following</ul>
            <li>Feature 1-3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
            <button className="transition bg-black text-gray-50 px-6 py-2 font-bold rounded-lg my-4 hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110">
              Buy now
            </button>
          </div>
          <div className="w-4/5 lg:w-1/5 border border-gray-700 shadow-lg rounded-lg text-gray-700 text-center p-8 hover:bg-gray-50 cursor-pointer my-4">
            <p className="text-2xl font-bold">Ultra Plan</p>
            <h1 className="text-4xl lg:text-5xl my-8 text-gray-900 font-bold">$499</h1>
            <ul className="list-disc">You will get following</ul>
            <li>Feature 1-5</li>
            <li>Feature 6</li>
            <li>Feature 7</li>
            <button className="transition bg-black text-gray-50 px-6 py-2 font-bold rounded-lg my-4 hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
