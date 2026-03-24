import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Modal.module.css';
const Modal = ({ visible, handleCloseModal, children }) => {
    if (!visible) {
        return null;
    }
    return (_jsx("div", { className: styles.modalOverlay, onClick: handleCloseModal, children: _jsxs("div", { className: styles.modalContent, onClick: (e) => e.stopPropagation(), children: [_jsx("button", { className: styles.closeButton, type: "button", onClick: handleCloseModal, children: "\u00D7" }), _jsx("div", { className: styles.modalBody, children: children })] }) }));
};
export default Modal;
