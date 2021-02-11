import { useState } from 'react';

const Trade = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };
  return (
    <>
      <div className="p-4 flex text-white justify-between items-center text-xl">
        <div className="cursor-pointer">User_001</div>
        <div className="cursor-pointer">Template One</div>
        <div>
          <button className="p-4 bg-gray-400 rounded" onClick={toggle}>
            Select
          </button>
        </div>
        <div className="cursor-pointer">Reject</div>
      </div>

      {/* <Modal isShowing={isShowing} hide={toggle}></Modal> */}
    </>
  );
};

export default Trade;
