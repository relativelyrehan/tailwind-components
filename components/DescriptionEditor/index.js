import { useState } from 'react';
import EditorJs from 'react-editor-js';

import convertDataToHtml from '../../utils/editorParser';
import { EDITOR_JS_TOOLS } from '../../utils/tools';

const DescEditor = ({ setdescription }) => {
  const [userFilledData, setuserFilledData] = useState({});

  const saveData = data => {
    setuserFilledData(data);
    data.saver.save().then(data => {
      const html = convertDataToHtml(data.blocks);
      setdescription(html);
    });
  };

  return (
    <div>
      <style>
        {`
         h1.ce-header{
          font-size:2rem !important;
        }
        h2.ce-header{
          font-size:1.5rem !important;
        }
        h3.ce-header{
          font-size:1.17rem !important;
        }
        h4.ce-header{
          font-size:1rem !important;
        }
      `}
      </style>
      <EditorJs
        data={userFilledData}
        onChange={saveData}
        tools={EDITOR_JS_TOOLS}
      />
    </div>
  );
};

export default DescEditor;
