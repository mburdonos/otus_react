import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './ModalInput.module.css';
import Modal from '../Modal/Modal';
export const ModalInput = ({ initialText = '' }) => {
    const [inputValue, setInputValue] = useState(initialText);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (_jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.inputGroup, children: [_jsx("label", { htmlFor: "text-input", className: styles.label, children: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442:" }), _jsx("input", { id: "text-input", type: "text", value: inputValue, onChange: (e) => setInputValue(e.target.value), className: styles.input })] }), _jsx("button", { onClick: handleOpenModal, className: styles.button, children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E" }), isModalOpen && (_jsx(Modal, { visible: true, handleCloseModal: handleCloseModal, children: inputValue || 'Текст не введён' }))] }));
};
export default ModalInput;
