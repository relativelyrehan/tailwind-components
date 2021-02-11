const StatisticCard = ({ stats, title, icon, view }) => {
  return (
    <div
      className={`md:w-1/3 w-full h-36 flex lg:flex-row flex-col items-center rounded-lg cursor-pointer justify-center p-6 mb-6 mr-4 xl:mb-0 last:mr-0 text-gray-800 bg-gradient-to-r from-red-200 to-yellow-100 ${
        view === 'overview' ? '' : 'hidden'
      }`}
    >
      <img src={icon} className="lg:h-16 h-12" alt="emoji" />
      <div className="flex flex-col justify-center">
        <p className="font-semibold lg:text-3xl text-2xl text-center">
          {stats}
        </p>
        <p className="text-center">{title}</p>
      </div>
    </div>
  );
};

export default StatisticCard;
