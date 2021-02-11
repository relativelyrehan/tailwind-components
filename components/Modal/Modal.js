import Image from 'next/image';

const Modal = ({ isShowing, hide, children }) => {
  return (
    <div>
      {isShowing ? (
        <div className="fixed bg-black bg-opacity-30 w-screen h-screen z-50 top-0 left-0 flex justify-center p-8 md:p-4 fade-animation">
          <div className="modal-outer border w-full h-auto sm:3/5 md:w-2/5 xl:w-1/3 bg-dark self-center xl:p-8 rounded-lg">
            <div className="flex p-2 md:px-4 lg:px-6 xl:px-8 md:py-4 justify-between">
              <Image src="/logo.svg" alt="logo" width={30} height={30} />
              <button onClick={hide} className="text-3xl text-gray-800">
                <Image src="/close.svg" height={20} width={20} />
              </button>
            </div>
            {children}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Modal;
