import Navbar from '../Navbar/Navbar';

const HomeLayout = ({ children }) => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="grid w-full m-auto h-96 content-center">
        <h1 className="lg:text-7xl md:text-5xl text-4xl text-center font-bold w-1/2 mx-auto antialiased">
          Trade Your Notion Templates the easy way
        </h1>
        <p className="text-xl text-center text-gray-600 font-thin italic py-3">
          Yes !{' '}
          <span role="img" aria-label="gift">
            🎁
          </span>{' '}
          Just like those Pokemon cards 🤷🏻‍♂️{' '}
        </p>
      </div>
      <div className="px-6 w-full">{children}</div>
    </div>
  );
};

export default HomeLayout;
