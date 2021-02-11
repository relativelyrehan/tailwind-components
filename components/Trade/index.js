import { useState } from 'react';
import Clipboard from 'react-clipboard.js';

import useModal from '../../utils/useModal';
import Modal from '../Modal/Modal';
import ViewTrade from '../ViewTrade';

const Trade = ({
  refresh,
  setrefresh,
  tradeView,
  requestedTrades,
  activeTrades,
  completedTrades,
  forUser
}) => {
  const { isShowing, toggle } = useModal();
  const [templates, setTemplates] = useState([]);
  const [otherData, setOtherData] = useState();
  const [activeTrade, setactiveTrade] = useState();
  const cancelTrade = tradeId => {
    fetch('api/trade/cancel', {
      method: 'POST',
      body: JSON.stringify({ tradeId })
    })
      .then(response => response.json())
      .then(() => {
        setrefresh(!refresh);
      });
  };

  const continueTrade = (tradeId, traderUserId) => {
    setactiveTrade(tradeId);
    fetch(`/api/template/getUserTemplates?id=${traderUserId}`)
      .then(response => response.json())
      .then(data => {
        setOtherData(data.user);
        setTemplates(data.userTemplates);
        toggle();
      });
  };

  return (
    <>
      <Modal isShowing={isShowing} hide={toggle}>
        <ViewTrade
          close={toggle}
          refresh={refresh}
          setrefresh={setrefresh}
          tradeId={activeTrade}
          otherData={otherData}
          templates={templates}
        />
      </Modal>

      {completedTrades.map((trade, index) => (
        <div
          key={index}
          className={` p-4 flex lg:flex-row flex-col bg-gradient-to-r from-green-200 to-blue-100 mb-4 text-xl font-medium rounded-xl justify-between items-center ${
            tradeView === 'completed' ? '' : 'hidden'
          }`}
        >
          <div className="flex flex-col lg:w-1/4 w-full lg:my-0 my-2 justify-center text-center">
            <span className="lg:self-start text-sm text-gray-600 ">With</span>
            <span className="lg:self-start cursor-pointer">
              {forUser === trade.buyerUserId._id
                ? trade.traderUserId.name
                : trade.buyerUserId.name}
            </span>
          </div>

          <div className="flex flex-col lg:w-1/4 w-full lg:my-0 my-2 justify-center text-center">
            <span className="lg:self-start text-sm text-gray-600 ">Sent</span>
            <span className="lg:self-start cursor-pointer">
              {forUser === trade.buyerUserId._id
                ? trade.buyerTemplateId.name
                : trade.traderTemplateId.name}
            </span>
          </div>
          <div className="flex flex-col lg:w-1/4 w-full lg:my-0 my-2 justify-center text-center">
            <span className="lg:self-start text-sm text-gray-600 ">
              Recieved
            </span>
            <span className="lg:self-start cursor-pointer">
              {forUser === trade.buyerUserId._id
                ? trade.traderTemplateId.name
                : trade.buyerTemplateId.name}
            </span>
          </div>
          <div className="flex flex-row lg:w-1/4 w-full">
            <div className="flex items-center lg:self-start lg:mx-0 mx-auto w-2/3 justify-center cursor-pointer text-blue-600 text-sm underline bg-gray-100 rounded-full p-4">
              {forUser === trade.buyerUserId._id
                ? trade.traderTemplateId.shareLink
                : trade.buyerTemplateId.shareLink}
              <Clipboard
                data-clipboard-text={
                  forUser === trade.buyerUserId._id
                    ? trade.traderTemplateId.shareLink
                    : trade.buyerTemplateId.shareLink
                }
              >
                <img src="../images/copy.svg" className="h-8" alt="copy" />
              </Clipboard>
            </div>
          </div>
        </div>
      ))}

      {activeTrades.map((trade, index) => (
        <div
          key={index}
          className={` p-4 flex lg:flex-row flex-col bg-gradient-to-r from-green-200 to-blue-100 mb-4 rounded-xl justify-between items-center ${
            tradeView === 'active' ? '' : 'hidden'
          }`}
        >
          <div className="lg:text-xl text-2xl font-medium lg:w-1/5 w-full justify-center flex items-center">
            <img src="../images/circle.svg" className="h-4" alt="emoji" />
            &nbsp; Incoming
          </div>
          <div className="lg:text-xl text-2xl font-medium flex items-center lg:w-1/5 w-full justify-center flex-col">
            <span className="lg:self-start lg:m-0 my-2 text-sm text-gray-600 ">
              From
            </span>
            <span className="lg:self-start lg:m-0 my-2 cursor-pointer text-gray-900">
              {trade.traderUserId.name}
            </span>
          </div>
          <div className="lg:text-xl text-2xl font-medium flex flex-col items-center lg:w-1/5 w-full justify-center">
            <span className="lg:self-start lg:m-0 my-2 text-sm text-gray-600 ">
              For template:
            </span>
            <span className="lg:self-start lg:m-0 my-2 cursor-pointer text-gray-900">
              {trade.buyerTemplateId.name}
            </span>
          </div>

          <div className="flex text-white font-bold">
            {' '}
            <button
              className="bg-green-400 p-4 rounded-xl hover:bg-green-500 m-2"
              onClick={() => continueTrade(trade._id, trade.traderUserId._id)}
            >
              Browse
            </button>
            <button
              className="bg-red-400 p-4 rounded-xl hover:bg-red-500 hover:text-white m-2"
              onClick={() => cancelTrade(trade._id)}
            >
              Reject
            </button>{' '}
          </div>
        </div>
      ))}

      {requestedTrades.map((trade, index) => (
        <div
          key={index}
          className={` p-4 flex lg:flex-row flex-col bg-gradient-to-r from-green-200 to-blue-100 mb-4 rounded-xl justify-between items-center ${
            tradeView == 'requested' ? '' : 'hidden'
          }`}
        >
          <div className="lg:text-xl text-2xl font-medium lg:w-1/5 justify-center w-full flex items-center">
            <img src="../images/circle.svg" className="h-4" alt="emoji" />
            &nbsp; Requested
          </div>
          <div className="lg:text-xl text-2xl font-medium flex items-center lg:w-1/5 justify-center w-full flex-col">
            <span className="lg:self-start  lg:text-sm lg:m-0 my-2 text-xl text-gray-600 ">
              To
            </span>
            <span className="lg:self-start  cursor-pointer text-gray-900">
              {trade.buyerUserId.name}
            </span>
          </div>
          <div className="lg:text-xl text-2xl font-medium flex flex-col items-center lg:w-1/5 justify-center w-full">
            <span className="lg:self-start  lg:text-sm lg:m-0 my-2 text-xl text-gray-600 ">
              For template:
            </span>
            <span className="lg:self-start  cursor-pointer text-gray-900">
              {trade.buyerTemplateId.name}
            </span>
          </div>

          <button
            className="bg-red-400 text-white font-bold p-4 lg:w-auto w-2/3 rounded-xl hover:bg-red-500 m-2"
            onClick={() => cancelTrade(trade._id)}
          >
            Cancel
          </button>
        </div>
      ))}
    </>
  );
};

export default Trade;
