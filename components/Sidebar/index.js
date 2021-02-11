const Sidebar = ({ setView, view }) => {
  const activeStyle = 'bg-gradient-to-r from-blue-500 text-white to-indigo-300';
  const inactiveStyle = 'bg-blue-100 text-black hover:bg-blue-200';

  return (
    <div className="lg:flex hidden flex-col w-1/5 h-full p-4">
      <div
        className={`w-4/5 pt-4 pb-4 px-2 ${
          view === 'overview' ? activeStyle : inactiveStyle
        } focus:outline-none mb-2 rounded-xl mt-4 text-center self-center text-xl font-medium cursor-pointer`}
        onClick={() => setView('overview')}
        onKeyDown={() => setView('overview')}
        tabIndex={0}
        role="button"
      >
        Overview
      </div>
      <div
        className={`w-4/5 pt-4 pb-4 px-2 ${
          view === 'trade' ? activeStyle : inactiveStyle
        } focus:outline-none mb-2 rounded-xl mt-4 text-center self-center text-xl font-medium cursor-pointer`}
        onClick={() => {
          setView('trade');
        }}
        onKeyDown={() => setView('trade')}
        tabIndex={0}
        role="button"
      >
        Trades
      </div>
      <div
        className={`w-4/5 pt-4 pb-4 px-2 ${
          view === 'reviews' ? activeStyle : inactiveStyle
        } focus:outline-none mb-2 rounded-xl mt-4 text-center self-center text-xl font-medium cursor-pointer`}
        onClick={() => setView('reviews')}
        onKeyDown={() => setView('reviews')}
        tabIndex={0}
        role="button"
      >
        Reviews
      </div>
      <div
        className={`w-4/5 pt-4 pb-4 px-2 ${
          view === 'editProfile' ? activeStyle : inactiveStyle
        } focus:outline-none mb-2 rounded-xl mt-4 text-center self-center text-xl font-medium cursor-pointer`}
        onClick={() => setView('editProfile')}
        onKeyDown={() => setView('editProfile')}
        tabIndex={0}
        role="button"
      >
        Edit Profile
      </div>
    </div>
  );
};

export default Sidebar;
