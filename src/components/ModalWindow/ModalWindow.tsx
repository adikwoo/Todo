import React, { useEffect } from 'react';
import * as Styled from './ModalWindow.styles';
import closeIcon from '../../../public/close-dark.svg';

interface ModalWindowProps {
  onClose: () => void;
  noClose?: boolean;
  zIndex?: boolean;
  children?: React.ReactNode
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  onClose,
  children,
  noClose,
  zIndex,
}) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <>
      <Styled.ModalWindowBackdrop onClick={!noClose ? onClose : () => {}} />
      {zIndex ? (
        <Styled.ModalWindowContainer100>
          <Styled.ModalWindowHeader>
            <Styled.ModalCloseIconContainer onClick={onClose}>
              {!noClose && <img src={closeIcon} alt="close icon" />}
            </Styled.ModalCloseIconContainer>
          </Styled.ModalWindowHeader>
          <div className="modal-window">{children} </div>
        </Styled.ModalWindowContainer100>
      ) : (
        <Styled.ModalWindowContainer>
          <Styled.ModalWindowHeader>
            <Styled.ModalCloseIconContainer
              onClick={!noClose ? onClose : () => {}}
            >
              {!noClose && <img src={closeIcon} alt="close icon" />}
            </Styled.ModalCloseIconContainer>
          </Styled.ModalWindowHeader>
          <div className="modal-window">{children} </div>
        </Styled.ModalWindowContainer>
      )}
    </>
  );
};

export default ModalWindow;
