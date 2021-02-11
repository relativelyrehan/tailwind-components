import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useState } from 'react';
import Slider from 'react-slick';

import TemplateCard from '../../components/TemplateCard/TemplateCard';

const ViewTrade = ({
  close,
  refresh,
  setrefresh,
  tradeId,
  otherData,
  templates
}) => {
  const settings = {
    dots: true,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false
  };

  const [active, setactive] = useState(-1);

  const previewTemplate = () => {
    if (active === -1) {
      alert('select template to preview');
    } else {
      // eslint-disable-next-line security/detect-object-injection
      const url = `/template/${templates[active].slug}?trade=${tradeId}`;
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      var win = window.open(url, '_blank');
      win.focus();
    }
  };

  const continueTrade = () => {
    if (active === -1) {
      alert('select template to preview');
    } else {
      const data = JSON.stringify({
        tradeId,
        // eslint-disable-next-line security/detect-object-injection
        traderTemplateId: templates[active]._id
      });
      fetch('/api/trade/complete', { method: 'POST', body: data })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            close();
            setrefresh(!refresh);
          }
        });
    }
  };

  return (
    <div className="p-8 w-full">
      <h1 className="font-medium text-2xl text-center">Jacob&apos;s Themes</h1>
      <div className="p-8 w-full h-full">
        <Slider {...settings}>
          {templates.map((oneTemplate, index) => (
            <div
              key={index}
              className={`${index === active ? 'bg-green-300' : ''} m-2 p-2`}
              onClick={() => setactive(index)}
              onKeyDown={() => setactive(index)}
              role="button"
              tabIndex={0}
            >
              <TemplateCard
                name={oneTemplate.name}
                title={oneTemplate.title}
                rating={oneTemplate.averageRating}
                trade={oneTemplate.trades}
                screenShots={oneTemplate.screenShots[0]}
                userPhoto={otherData.image}
                userName={otherData.name}
                subCategory={oneTemplate.subCategory}
              ></TemplateCard>
            </div>
          ))}
        </Slider>
        <div className="mt-8 ml-auto mr-auto flex justify-center">
          <button
            onClick={previewTemplate}
            className="bg-red-400 rounded-xl p-4 mr-2 w-1/4"
          >
            Preview
          </button>
          <button
            onClick={continueTrade}
            className="bg-green-400 rounded-xl p-4 ml-2 w-1/4"
          >
            Trade
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewTrade;
