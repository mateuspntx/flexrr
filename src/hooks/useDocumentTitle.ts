// hook from https://github.com/streamich/react-use/blob/master/src/useTitle.ts

import { useEffect, useRef } from 'react';

export interface useDocumentTitleOptions {
  restoreOnUnmount?: boolean;
}

const DEFAULT_USE_TITLE_OPTIONS: useDocumentTitleOptions = {
  restoreOnUnmount: false,
};

function useDocumentTitle(
  title: string,
  options: useDocumentTitleOptions = DEFAULT_USE_TITLE_OPTIONS
) {
  const prevTitleRef = useRef(document.title);
  document.title = title;
  useEffect(() => {
    if (options && options.restoreOnUnmount) {
      return () => {
        document.title = prevTitleRef.current;
      };
    } else {
      return;
    }
  }, []);
}

export default typeof document !== 'undefined'
  ? useDocumentTitle
  : (_title: string) => {};
