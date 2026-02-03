import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  visible: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, handleCloseModal, children }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}  onClick={handleCloseModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} type="button" onClick={handleCloseModal}>
          ×
        </button>
        <div className={styles.modalBody}>
          {children}
          </div>
      </div>
    </div>
  );
};

export default Modal;