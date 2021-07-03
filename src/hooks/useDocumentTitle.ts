import { useEffect } from 'react';

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    window.document.title = title;
  }, [title]);
};

export default useDocumentTitle;
