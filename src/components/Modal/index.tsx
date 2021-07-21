import { useEffect, useCallback, useRef, memo } from 'react';

import * as S from './styles';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      e.key === 'Escape' && onClose();
    },
    [onClose]
  );

  const onClickOutside = useCallback(
    (e: MouseEvent) => {
      if ((e.target as Element).className === containerRef?.current?.className) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    let modalContainer = containerRef;

    const whenIsOpen = () => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    };

    whenIsOpen();

    window.addEventListener('keydown', handleEscapeKey);

    if (modalContainer.current) {
      modalContainer.current.addEventListener('click', onClickOutside);

      return () => {
        modalContainer?.current?.removeEventListener('click', onClickOutside);
      };
    }

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscapeKey, onClickOutside]);

  return (
    <>
      {isOpen ? (
        <S.Container isOpen={isOpen} ref={containerRef}>
          <S.Wrapper>
            <S.Header>
              {title && <h1>{title}</h1>}
              <button onClick={onClose} title="Close">
                &times;
              </button>
            </S.Header>
            <S.Content>{children}</S.Content>
          </S.Wrapper>
        </S.Container>
      ) : null}
    </>
  );
};

export default memo(Modal);
