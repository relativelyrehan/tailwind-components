import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import List from '@editorjs/list';

import { uploadDescImage } from './uploadDescImage.js';

export const EDITOR_JS_TOOLS = {
  list: List,
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        coub: true
      }
    }
  },
  image: {
    class: ImageTool,
    config: {
      uploader: {
        uploadByFile(file) {
          return uploadDescImage(file);
        }
      }
    }
  },

  header: {
    class: Header,
    inlineToolbar: true,
    config: {
      placeholder: 'Enter a header',
      levels: [1, 2, 3, 4],
      defaultLevel: 1
    }
  }
};
