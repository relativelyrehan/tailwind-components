import Image from 'next/image';

import useModal from '../../utils/useModal';
import Modal from '../Modal/Modal';
import Signup from '../Signup/Signup';

const LandingLayout = ({ children }) => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <div className="bg-darkOne overflow-x-hidden">
        <div className="h-full w-full">
          <div className="w-full h-full text-gray-100 relative">
            <nav className="p-8 lg:px-16 lg:py-8 flex justify-between">
              <Image src="/logo.svg" alt="logo" height={48} width={48} />
              <span className="flex items-center font-bold text-white">
                <button
                  className="mx-1 md:mx-4 px-4 md:px-8 py-2 text-lg"
                  onClick={toggle}
                >
                  Log in
                </button>
                <button
                  className="mx-1 md:mx-4 px-4 md:px-8 py-2 transition-all bg-burnt rounded-lg"
                  onClick={toggle}
                >
                  Join Now
                </button>{' '}
              </span>
            </nav>
            <main className="">{children}</main>
          </div>
        </div>
      </div>
      <Modal isShowing={isShowing} hide={toggle}>
        <Signup />
      </Modal>
    </>
  );
};

export default LandingLayout;
