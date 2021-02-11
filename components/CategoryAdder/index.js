const CategoryAdder = ({ isHidden, setCategory, array, setIsHidden }) => {
  return isHidden ? (
    <div
      onMouseLeave={() => setIsHidden(!isHidden)}
      className="w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 absolute top-20"
    >
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {array.map(property => (
          <div
            onClick={() => {
              setCategory(property);
              setIsHidden(!isHidden);
            }}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-200 hover:text-gray-900"
            onKeyDown={() => {
              setCategory(property);
              setIsHidden(!isHidden);
            }}
            role="button"
            tabIndex={0}
            key={'1'}
          >
            {property}
          </div>
        ))}
      </div>
    </div>
  ) : (
    ''
  );
};

export default CategoryAdder;
