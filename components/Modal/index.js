const Modal = () => {
  return (
    <div className="w-4/5 md:w-1/3 lg:w-1/4 border border-gray-700 shadow-lg rounded-lg mx-auto my-16 p-8 flex flex-col justify-center items-center relative">
      <span className="absolute top-2 right-4 cursor-pointer">x</span>
      <img src="./logo.svg" alt="logo" className="h-24" />
      <p className="text-blue-400 text-2xl font-bold">Welcome Back !</p>
      <input
        type="text"
        placeholder="Enter your username"
        className="bg-blue-100 w-full p-4 rounded-lg my-2 border border-gray-900 focus:outline-none"
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="bg-blue-100 w-full p-4 rounded-lg my-2 border border-gray-900 focus:outline-none"
      />
      <button className="bg-blue-400 px-6 py-4 my-2 self-start rounded-lg text-gray-50 font-bold">
        Sign in
      </button>
    </div>
  );
};

export default Modal;
