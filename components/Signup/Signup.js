import { signin } from 'next-auth/client';
import Image from 'next/image';

const Signup = () => {
  return (
    <div className="h-full w-full text-white">
      <div className="flex items-center justify-evenly flex-col p-4">
        <h1 className="xl:text-4xl md:text-3xl text-2xl font-semibold text-center mb:4 md:mb-6 lg:mb-8">
          Get started <br /> with Prototion
        </h1>
        <Image src="/signup.png" alt="sign up" height={150} width={250} />
        <div className="my-5 text-center">
          <p>Trade your notion templates, the easy way!</p>
        </div>
        <div>
          <button
            onClick={() => {
              signin('google');
            }}
            className="text-center mb-4 p-2 sm:p-4 md:px-14 md:py-2 rounded-lg border bottom-2 border-gray-800 font-medium focus:outline-none flex justify-items-center items-center"
          >
            <img src="/images/search.svg" alt="" className="h-4 mr-3" />
            Continue with Google
          </button>
          <button
            onClick={() => {
              signin('twitter');
            }}
            className="p-2 sm:p-4 md:px-14 md:py-2 rounded-lg mt-4 border bottom-2 border-gray-800 font-medium focus:outline-none flex justify-items-center items-center"
          >
            <img src="/images/twitter.svg" alt="asjdklf" className="h-4 mr-3" />
            Continue with Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
