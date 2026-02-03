import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './ModalPortal.module.css';
import Modal from '../Modal/Modal'

interface ModalPortalProps {
  initialText?: string;
}

export const ModalPortal: React.FC<ModalPortalProps> = ({ initialText = '' }) => {

  const portalRoot = useRef<HTMLDivElement>(null);

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

  const [inputValue, setInputValue] = useState(initialText);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
              <div className={styles.inputGroup}>
            <label htmlFor="text-input" className={styles.label}>
              Введите текст:
            </label>
            <input
              id="text-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={styles.input}
            />
          </div>
      <button
        onClick={handleOpenModal}
        className={styles.button}
      >
        Открыть модальное окно
      </button>
      {isModalOpen && portalRoot.current && createPortal(
        <div className={styles.container}>
          <Modal
            visible={true}
            handleCloseModal={handleCloseModal}
            children={inputValue || 'Текст не введён'}
          />
        </div>,
        portalRoot.current
      )}
    </>
  );
};

export default ModalPortal;
