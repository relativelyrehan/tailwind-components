import LandingFooter from '../components/LandingFooter';
import LandingHero from '../components/LandingHero';
import LandingLayout from '../components/LandingLayout';
const Home = () => {
  return (
    <>
      <LandingLayout>
        <LandingHero />
        <LandingFooter />
      </LandingLayout>
    </>
  );
};

export default Home;
