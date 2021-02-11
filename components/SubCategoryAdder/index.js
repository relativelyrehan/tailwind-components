const SubCategoryAdder = ({
  isHidden,
  subCategory,
  setSubCategory,
  array,
  setIsHidden
}) => {
  const addSubCategory = property => {
    if (subCategory.includes(property)) {
      const extraArray = subCategory.filter(item => item._id != property._id);

      setSubCategory(extraArray);
    } else {
      setSubCategory([...subCategory, property]);
    }
  };

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
        {array.map(property =>
          subCategory.includes(property) ? (
            <div
              onClick={() => addSubCategory(property)}
              className="block px-4 py-2 text-sm text-grey-700 bg-green-200 hover:text-gray-900"
              onKeyDown={() => {
                () => addSubCategory(property);
              }}
              role="button"
              tabIndex={0}
              key={'1'}
            >
              {property.name}
            </div>
          ) : (
            <div
              onClick={() => addSubCategory(property)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-200 hover:text-gray-900"
              onKeyDown={() => {
                () => addSubCategory(property);
              }}
              role="button"
              tabIndex={0}
              key={'1'}
            >
              {property.name}
            </div>
          )
        )}
      </div>
    </div>
  ) : (
    ''
  );
};

export default SubCategoryAdder;
