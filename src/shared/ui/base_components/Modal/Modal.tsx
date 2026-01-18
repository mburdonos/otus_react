import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  visible: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, children }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} type="button">
          ×
        </button>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
