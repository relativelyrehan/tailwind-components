// import { AiFillDelete, AiFillEye, AiOutlineDownload } from 'react-icons/ai';
// import { FaRegHandshake } from 'react-icons/fa';
// import { MdModeEdit } from 'react-icons/md';

const StatisticList = ({ title, views, downloads, trades, view }) => {
  return (
    <div
      className={`cursor-pointer p-6 flex md:flex-row flex-col bg-gradient-to-r from-green-200 to-blue-100 text-gray-800 mb-4 rounded-xl md:justify-between justify-center hover:bg-yellow-100 ${
        view === 'overview' ? '' : 'hidden'
      } `}
    >
      <div className="text-xl font-medium md:w-1/5 w-full flex items-center justify-center">
        {' '}
        <img
          src="../images/circle.svg"
          className="h-4"
          alt="emoji"
        /> &nbsp; {title}{' '}
      </div>
      <div className="text-xl font-medium flex md:border-0 border-b border-black items-center md:w-1/5 w-full justify-evenly text-center">
        <img src="../images/chart.svg" className="h-8" alt="emoji" />
        &nbsp; {views}
      </div>
      <div className="text-xl font-medium flex md:border-0 border-b border-black items-center md:w-1/5 w-full justify-evenly text-center">
        <img src="../images/fire.svg" className="h-8" alt="emoji" />
        &nbsp; {downloads}
      </div>
      <div className="text-xl font-medium flex md:border-0 border-b border-black items-center md:w-1/5 w-full justify-evenly text-center">
        <img src="../images/money.svg" className="h-8" alt="emoji" />
        &nbsp; {trades}
      </div>
      <div className="text-xl font-medium flex md:border-0 border-b border-black items-center md:w-1/5 w-full justify-evenly text-center">
        <span className="cursor-pointer mr-2">
          <img src="../images/edit.svg" className="h-8" alt="emoji" />
        </span>
        <span className="cursor-pointer">
          <img src="../images/delete.svg" className="h-8" alt="emoji" />
        </span>
      </div>
    </div>
  );
};

export default StatisticList;
