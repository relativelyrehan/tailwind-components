import Cards from '../Cards';
const LandingHero = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-5xl text-center font-bold md:mb-16 lg:mb-16 p-8">
        <span className="text-white">Welcome to Prototion</span>{' '}
        <p className="text-2xl md:text-4xl text-gray-300 mt-4 md:mt-6 lg:mt-8">
          Premium Notion templates for everybody
        </p>
      </h1>
      <div className="flex md:flex-row flex-col justify-center mt-4 md:mt-12 lg:mt-16 w-full lg:w-4/5 xl:w-2/3 mx-auto">
        <div className="px-6 md:pl-12 lg:pl-12 mb-12 sm:mb-0 relative">
          <a href="https://prototion.com/resolution-board">
            <Cards
              name={'Coming Soon'}
              description={'An all in one template to manage your tasks'.slice(
                0,
                50
              )}
              screenShots={
                'https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
              }
              userPhoto={
                'https://pbs.twimg.com/profile_images/1357550397120868352/C0-T9dBU_400x400.jpg'
              }
              userName={'Sarthak Sharma'}
              subCategory={['Productivity', 'Planning']}
            />
          </a>
          <div className="absolute top-0 md:top-80 md:-left-0 lg:-left-20 xl:-left-32 text-center">
            <img
              src="../arrow-one.svg"
              alt="arrow"
              className="h-24 sm:h-36 lg:h-48"
            />
            <p className="font-hand font-bold text-4xl text-sparkleOne">Free</p>
          </div>
        </div>
        <div className="px-6 md:pl-12 lg:pl-8 relative">
          <Cards
            name={'Resolution Board'}
            screenShots={
              'https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
            }
            userPhoto={
              'https://pbs.twimg.com/profile_images/1357550397120868352/C0-T9dBU_400x400.jpg'
            }
            userName={'Sarthak Sharma'}
            subCategory={['Productivity', 'Planning']}
            description={'An all in one template to manage your tasks'.slice(
              0,
              50
            )}
          />
          <div className="absolute top-0 right-0 md:-right-8 lg:-right-20 xl:-right-40 text-center">
            <img
              src="../arrow-two.svg"
              alt="arrow"
              className="h-24 sm:h-36 lg:h-48"
            />
            <p className="font-hand font-bold text-4xl text-sparkleTwo my-4">
              $10
            </p>
          </div>
        </div>
      </div>
      <button className="block mx-auto my-12 px-8 py-4 rounded-lg bg-burnt text-white font-bold">
        Explore More &rarr;
      </button>
    </div>
  );
};

export default LandingHero;
