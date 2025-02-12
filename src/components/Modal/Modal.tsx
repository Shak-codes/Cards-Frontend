// src/components/Modal.tsx
import React, { ReactNode, useEffect } from 'react';
import './styles.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onClick, children }) => {
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) onClick();
  }
  return (
    <div className={`modal-overlay ${isOpen ? 'open' : 'close'}`} onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};


export default Modal;

