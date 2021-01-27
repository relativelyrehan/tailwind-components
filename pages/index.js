import Card from "../components/Card";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <div className="w-full h-full p-8">
      <Navbar />
      <Card />
      <Modal />
      <Profile />
    </div>
  );
};

export default Home;
