import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './ModalPortal.module.css';
import Modal from '../Modal/Modal';
export const ModalPortal = ({ initialText = '' }) => {
    const portalRoot = useRef(null);
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
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: styles.inputGroup, children: [_jsx("label", { htmlFor: "text-input", className: styles.label, children: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442:" }), _jsx("input", { id: "text-input", type: "text", value: inputValue, onChange: (e) => setInputValue(e.target.value), className: styles.input })] }), _jsx("button", { onClick: handleOpenModal, className: styles.button, children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E" }), isModalOpen && portalRoot.current && createPortal(_jsx("div", { className: styles.container, children: _jsx(Modal, { visible: true, handleCloseModal: handleCloseModal, children: inputValue || 'Текст не введён' }) }), portalRoot.current)] }));
};
export default ModalPortal;
