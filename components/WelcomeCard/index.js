const WelcomeCard = ({ user }) => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center">
      <img
        className="rounded-full w-24 h-24 object-cover undefined cursor-pointer m-auto"
        src={`${user?.image}`}
        alt="avatar"
      ></img>
      <div className="flex flex-col ml-2">
        <h1 className="text-xl text-center text-gray-800 ">Welcome Back</h1>
        <h1 className="lg:text-4xl text-3xl font-semibold text-center text-gray-800">
          {user?.name}
        </h1>
      </div>
    </div>
  );
};

export default WelcomeCard;
