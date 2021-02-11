const ShareModal = () => {
  return (
    <div className="w-1/3 h-96 flex justify-center items-center flex-col border rounded-lg">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
        Share this template
      </h1>
      <p className="my-2 text-xl">
        If you love this template, share it with the{' '}
        <span role="img" aria-label="globe">
          🌍
        </span>
        !
      </p>

      <div className="flex w-full my-8 justify-evenly items-center">
        <button className="rounded-full border p-4 hover:bg-gray-100">
          <img src="../images/twitter.svg" alt="twitter" className="h-16" />
        </button>
        <button className="rounded-full border p-4 hover:bg-gray-100">
          <img src="../images/facebook.svg" alt="twitter" className="h-16" />
        </button>
        <button className="rounded-full border p-4 hover:bg-gray-100">
          <img src="../images/linkedin.svg" alt="twitter" className="h-16" />
        </button>
      </div>

      <p className="text-xl text-gray-700 hover:text-gray-800 cursor-pointer">
        Explore More templates !!
      </p>
    </div>
  );
};

export default ShareModal;
