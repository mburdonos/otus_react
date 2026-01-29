import React, { useState } from 'react';
import styles from './ModalInput.module.css';
import Modal from '../Modal/Modal'

interface ModalInputProps {
  initialText?: string;
}

export const ModalInput: React.FC<ModalInputProps> = ({ initialText = '' }) => {
  const [inputValue, setInputValue] = useState(initialText);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
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

      {isModalOpen && (
        <Modal 
        visible={true} 
        handleCloseModal={handleCloseModal} 
        children= {inputValue || 'Текст не введён'}/>
      )}
    </div>
  );
};

export default ModalInput;
