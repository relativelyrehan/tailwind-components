const Profile = () => {
  return (
    <div className="w-4/5 md:w-1/3 lg:w-1/4 border border-gray-700 shadow-lg rounded-lg mx-auto my-16 flex flex-col justify-center items-center relative">
      <button className="bg-black rounded-full absolute bottom-10 right-6">
        <img src="../add.svg" alt="add" className="h-14" />
      </button>
      <div className="h-40 w-full relative">
        <img
          src="https://images.unsplash.com/photo-1548906133-91ad21ea3ee2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          alt="header"
          className="max-h-40 w-full object-cover"
        />
        <div className="absolute h-24 w-24 bottom-0 right-2 rounded-full bg-red-400 transform translate-y-1/2">
          <img
            src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="avatar"
            className="max-h-24 w-full rounded-full"
          />
        </div>
      </div>
      <div className="p-4 self-start leading-8">
        <h1 className="text-2xl font-medium">Bathilda Bagshot</h1>
        <div className="p-4 my-2 text-lg">
          <p>An avid reader 📚 and a wander🏎</p>
          <p>Born 16 July 🍥</p>
          <p>Currently pursuing Masters in Lit🕶</p>
          <p>Location: Area 51 🌍</p>
          <div className="flex mt-2">
            <img
              src="../facebook.svg"
              alt="social"
              className="h-14 cursor-pointer"
            />
            <img
              src="../github.svg"
              alt="social"
              className="h-14 cursor-pointer"
            />
            <img
              src="../logo.svg"
              alt="social"
              className="h-14 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
