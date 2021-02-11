import { useRouter } from 'next/router';
import React from 'react';

import TemplateCard from '../TemplateCard/TemplateCard';

const TemplateList = ({ templates }) => {
  const router = useRouter();

  const handleClick = slug => {
    router.push(`/template/${slug}`);
  };
  return (
    <div>
      <div className="w-full flex flex-row flex-wrap">
        {templates && templates.length > 0
          ? templates.map((oneTemplate, index) => (
              <div
                key={index}
                onClick={() => handleClick(oneTemplate.slug)}
                onKeyDown={() => handleClick(oneTemplate.slug)}
                role="button"
                tabIndex={0}
                className="m-2"
              >
                <TemplateCard
                  name={oneTemplate.name}
                  title={oneTemplate.title}
                  rating={oneTemplate.averageRating}
                  trade={oneTemplate.trades}
                  screenShots={oneTemplate.screenShots[0]}
                  userPhoto={oneTemplate.userId.image}
                  userName={oneTemplate.userId.name}
                  subCategory={oneTemplate.subCategory}
                ></TemplateCard>
              </div>
            ))
          : undefined}
      </div>
    </div>
  );
};

export default TemplateList;
