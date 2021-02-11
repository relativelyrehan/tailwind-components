import Navbar from '../Navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="px-6 w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
