import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

interface ModalProps {
  visible: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, handleCloseModal, children }) => {
  const portalRoot = useRef<HTMLDivElement | null>(null);

  // Создаём контейнер для портала при монтировании
  useEffect(() => {
    const div = document.createElement('div');
    div.id = 'modal-portal';
    document.body.appendChild(div);
    portalRoot.current = div;

    return () => {
      if (portalRoot.current && document.body.contains(portalRoot.current)) {
        document.body.removeChild(portalRoot.current);
      }
    };
  }, []);

  // Блокируем скролл при открытом модальном окне
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [visible]);

  if (!visible || !portalRoot.current) return null;

  return createPortal(
    <div
      className={styles.modalOverlay}
      onClick={handleCloseModal}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          type="button"
          onClick={handleCloseModal}
        >
          ×
        </button>
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>,
    portalRoot.current
  );
};

export default Modal;
