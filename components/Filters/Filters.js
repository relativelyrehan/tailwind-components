import React, { useEffect, useState } from 'react';

const Filters = ({ refresh, setrefresh, filters }) => {
  useEffect(() => {
    if (window.location.search) {
      const urlParamameters = new URLSearchParams(window.location.search);
      let currentFilters = urlParamameters.get('filter').split(',');
      setactiveFilters([...currentFilters]);
    }
  }, [refresh]);

  const handleSubCat = sub => {
    if (window.location.search) {
      const urlParamameters = new URLSearchParams(window.location.search);
      let currentFilters = urlParamameters.get('filter').split(',');
      if (currentFilters.includes(sub.name)) {
        const newArray = currentFilters.filter(item => item != sub.name);
        window.history.replaceState(
          undefined,
          undefined,
          `?filter=${newArray.join(',')}`
        );
      } else {
        let newArray = currentFilters;
        if (newArray[0] === '') {
          newArray.splice(0, 1);
        }
        newArray.push(sub.name);
        window.history.replaceState(
          undefined,
          undefined,
          `?filter=${newArray.join(',')}`
        );
      }
    } else {
      window.history.replaceState(undefined, undefined, `?filter=${sub.name}`);
    }

    setrefresh(!refresh);
  };
  const [activeFilters, setactiveFilters] = useState([]);
  const [activeIndex, setactiveIndex] = useState(-1);
  return (
    <aside className="shadow rounded-lg w-1/5 m-4 flex sticky h-96 top-10 flex-col">
      <h1 className="p-4 text-2xl">Filters</h1>
      <div className="">
        {filters.map((oneFilter, index) => (
          <div
            onClick={() => setactiveIndex(index)}
            onKeyDown={() => setactiveIndex(index)}
            role="button"
            tabIndex={0}
            key={index}
            className="relative px-10 my-5 cursor-pointer"
          >
            <span role="img" aria-label="guy">
              👷🏽
            </span>{' '}
            {oneFilter.name}
            <div
              className={`${
                activeIndex === index ? '' : 'hidden'
              } flex flex-col`}
            >
              {oneFilter.sub_categoryIds.map((sub, index1) => (
                <button onClick={() => handleSubCat(sub)} key={index1}>
                  {activeFilters.includes(sub.name) ? (
                    <div className="text-red-500" key={index1}>
                      {sub.name}
                    </div>
                  ) : (
                    <div key={index1}>{sub.name}</div>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Filters;
