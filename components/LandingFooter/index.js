import Image from 'next/image';

const LandingFooter = () => {
  return (
    <div className="p-8 mt-20 md:mt-24 lg:mt-36 bg-dark">
      <div className="mx-auto flex md:flex-row flex-col justify-center">
        <div className="md:p-8 lg:p-12">
          <Image src="/footer.png" height={420} width={560} />
        </div>
        <div className="md:p-8 lg:p-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4">
            Welcome to Prototion <br /> community beta program.
          </h1>
          <p className="text-gray-400">
            Join our beta program to test the exciting features coming in the
            V-2.0. Be among the first to use these exciting features.
          </p>
          <button className="block my-12 px-8 py-4 rounded-lg bg-burnt text-white font-bold">
            Join Beta Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
