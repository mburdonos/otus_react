import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
const Modal = ({ visible, handleCloseModal, children }) => {
    const portalRoot = useRef(null);
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
        }
        else {
            document.body.style.overflow = 'hidden';
        }
    }, [visible]);
    if (!visible || !portalRoot.current)
        return null;
    return createPortal(_jsx("div", { className: styles.modalOverlay, onClick: handleCloseModal, children: _jsxs("div", { className: styles.modalContent, onClick: (e) => e.stopPropagation(), children: [_jsx("button", { className: styles.closeButton, type: "button", onClick: handleCloseModal, children: "\u00D7" }), _jsx("div", { className: styles.modalBody, children: children })] }) }), portalRoot.current);
};
export default Modal;
