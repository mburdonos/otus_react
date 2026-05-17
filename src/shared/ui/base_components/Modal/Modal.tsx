import React, { useRef, useEffect } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  visible: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, handleCloseModal, children }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Обработка клика вне модального окна
  useEffect(() => {
    if (!visible) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (modalContentRef.current && !modalContentRef.current.contains(event.target as Node)) {
        handleCloseModal();
      }
    };

    // Используем mousedown вместо click для более точной обработки
    document.addEventListener('mousedown', handleClickOutside);
    
    // Закрытие по клавише Escape
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [visible, handleCloseModal]);

  // Предотвращаем скролл фона когда модалка открыта
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [visible]);

  if (!visible) {
    return null;
  }

  // Обработчик для предотвращения закрытия при клике на контент
  const handleContentMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modalOverlay}>
      <div 
        className={styles.modalContent} 
        ref={modalContentRef}
        onMouseDown={handleContentMouseDown}
      >
        <button 
          className={styles.closeButton} 
          type="button" 
          onClick={handleCloseModal}
          aria-label="Закрыть"
        >
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