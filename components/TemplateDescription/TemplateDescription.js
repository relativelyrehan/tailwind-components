import 'react-toastify/dist/ReactToastify.css';

import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { FiTwitter } from 'react-icons/fi';
import { GiTrade } from 'react-icons/gi';
import { toast, ToastContainer } from 'react-toastify';

import useModal from '../../utils/useModal';
import Avatar from '../Avatar/Avatar';
import Modal from '../Modal/Modal';

const openInNewTab = url => {
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  var win = window.open(url, '_blank');
  win.focus();
};

const TemplateDescription = ({ tradeId, templateData }) => {
  const { isShowing, toggle } = useModal();
  const router = useRouter();
  const [session, loading] = useSession();

  if (loading) {
    return <div>loading....</div>;
  }

  const completeTrade = () => {
    const data = JSON.stringify({
      tradeId,
      // eslint-disable-next-line security/detect-object-injection
      traderTemplateId: templateData._id
    });
    fetch('/api/trade/complete', { method: 'POST', body: data })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          router.push(`/dashboard`);
        }
      });
  };

  const innitiateTrade = () => {
    if (!session) {
      toast.warn('Login to start a trade');
    } else {
      const data = JSON.stringify({
        buyerUserId: templateData.userId?._id,
        buyerTemplateId: templateData._id
      });
      fetch('/api/trade/create', { method: 'POST', body: data })
        .then(response => response.json())
        .then(data => {
          if (
            data.success === false &&
            data.message === 'u have no templates'
          ) {
            toast.warn('Create your own templates to participate in tradeing');
          } else if (
            data.success === false &&
            data.message === 'Trade active'
          ) {
            alert('trade is active');
          } else if (data.success) {
            toggle();
          }
        });
    }
  };
  return (
    <div className="px-5">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
      />

      <ToastContainer />
      <div className="flex justify-between">
        <div className="grid grid-flow-row flex-1">
          <div className="flex gap-2 my-3">
            {templateData.subCategory.map((oneSubCat, index) => (
              <span
                key={index}
                className={`bg-${
                  index % 2 === 0 ? 'blue' : 'red'
                }-100 rounded-full px-4  py-1 text-sm cursor-pointer text-green-900`}
              >
                {oneSubCat}
              </span>
            ))}
          </div>
          <h1 className="font-bold text-6xl ">{templateData.name}</h1>
          <p className="text-base text-gray-600 italic">
            by {templateData.userId.name}
          </p>
          <p className="font-bold text-2xl antialiased my-5">Trade Only</p>
          <p>{templateData.title}</p>

          <div className="meta-details flex flex-col gap-4 mt-5 font-semibold">
            <p>
              <span role="img" aria-label="star" className="text-3xl">
                ⭐️
              </span>
              {templateData.averageRating} Rating
            </p>
            <p>
              <span role="img" aria-label="fire" className="text-3xl">
                🔥{' '}
              </span>{' '}
              {templateData.trades} Trades{' '}
            </p>
            <p>
              <span role="img" aria-label="graph" className="text-3xl">
                📈{' '}
              </span>{' '}
              {templateData.sales} Sales{' '}
            </p>
            <p>
              <span role="img" aria-label="eyes" className="text-3xl">
                👀{' '}
              </span>{' '}
              {templateData.views} Views{' '}
            </p>
          </div>
        </div>
        <div className="author-image w-28 flex-initial py-10">
          <Avatar src={templateData.userId.image} size="28"></Avatar>
        </div>
      </div>
      <div className="my-10 action-items flex">
        {templateData.type === 'free' ? (
          <a href={templateData.shareLink}>
            <button className=" flex items-center bg-indigo-500 py-5 px-16 text-white text-2xl uppercase rounded font-semibold">
              <GiTrade className="mr-2" /> Get it now !
            </button>
          </a>
        ) : (
          <div>
            {tradeId === undefined ? (
              <div>
                {templateData.userId._id === session?.id ? (
                  <button
                    disabled={true}
                    onClick={innitiateTrade}
                    className="cursor-not-allowed  flex items-center bg-indigo-500 py-5 px-16 text-white text-2xl uppercase rounded font-semibold"
                  >
                    <GiTrade className="mr-2" /> Your template!{' '}
                  </button>
                ) : (
                  <button
                    onClick={innitiateTrade}
                    className="flex items-center bg-indigo-500 py-5 px-16 text-white text-2xl uppercase rounded font-semibold"
                  >
                    <GiTrade className="mr-2" /> Trade{' '}
                  </button>
                )}
              </div>
            ) : (
              <button
                onClick={completeTrade}
                className="flex items-center bg-indigo-500 py-5 px-16 text-white text-2xl uppercase rounded font-semibold"
              >
                <GiTrade className="mr-2" />
                Complete Trade{' '}
              </button>
            )}
          </div>
        )}

        <button
          onClick={() =>
            openInNewTab(
              `https://twitter.com/intent/tweet?text=hey+%F0%9F%91%8B%2C%0D%0Acheckout+this+amazing+template+I+came+across%0D%0A&url=${window.location.href}`
            )
          }
          className=" flex items-center bg-gray-500 py-5 px-16 text-white text-2xl uppercase rounded ml-3 font-semibold"
        >
          <FiTwitter className="mr-2" />
          Share{' '}
        </button>
      </div>
      <Modal isShowing={isShowing} hide={toggle}>
        <div className="h-full w-full">
          <div className="flex flex-col items-center justify-center mx-4 my-4">
            <h1 className="text-7xl my-5">
              <span role="img" aria-label="fun">
                🎉
              </span>
            </h1>
            <div className="my-5 text-center">
              <h1 className="text-2xl font-semibold">
                Hurray! trade initiated
              </h1>
              <p>Choose your next Move</p>
            </div>
            <div className="flex flex-row items-center justify-center">
              <button
                className="h-8 w-1/2 text-sm mr-2 text-center mb-4 px-8 py-8 rounded-lg bg-gray-200 hover:bg-gray-300 font-medium focus:outline-none flex justify-center items-center"
                onClick={() => router.push('/')}
              >
                Browse more templates
              </button>
              <button
                className="h-8 w-1/2 text-sm ml-2 text-center mb-4 px-8 py-8 rounded-lg bg-gray-200 hover:bg-gray-300 font-medium focus:outline-none flex justify-center items-center"
                onClick={() => router.push('/createTemplate')}
              >
                Create your own template
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TemplateDescription;
