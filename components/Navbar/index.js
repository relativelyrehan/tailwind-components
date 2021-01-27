const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center bg-gray-800 px-8 py-4 rounded-lg text-white hover:text-gray-100">
        <div className="flex items-center">
          <p className="font-bold text-xl cursor-pointer">$TAILWIND</p>
        </div>
        <ul className="hidden sm:flex w-1/3 justify-evenly font-semibold text-xl cursor-pointer">
          <li>Home</li>
          <li>Work</li>
          <li>Blog</li>
        </ul>
        <div className="cursor-pointer flex">
          <img src="../add.svg" alt="menu" className="h-12 sm:hidden" />
          <img src="../bell.svg" alt="bell" className="h-12" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
