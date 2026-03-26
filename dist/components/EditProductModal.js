import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const EditProductModal = ({ isOpen, onClose, product, onSave }) => {
    const [editedProduct, setEditedProduct] = React.useState(product);
    React.useEffect(() => {
        setEditedProduct(product);
    }, [product]);
    if (!isOpen || !editedProduct)
        return null;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({
            ...editedProduct,
            [name]: name === 'price' ? parseFloat(value) : value
        });
    };
    const handleSave = () => {
        if (editedProduct) {
            onSave(editedProduct);
            onClose();
        }
    };
    return (_jsx("div", { className: "modal-overlay", children: _jsxs("div", { className: "modal", children: [_jsx("h2", { children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430" }), _jsxs("div", { className: "modal-form", children: [_jsxs("div", { children: [_jsx("label", { children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:" }), _jsx("input", { type: "text", name: "title", value: editedProduct.title, onChange: handleChange })] }), _jsxs("div", { children: [_jsx("label", { children: "\u0426\u0435\u043D\u0430:" }), _jsx("input", { type: "number", name: "price", step: "0.01", value: editedProduct.price, onChange: handleChange })] }), _jsxs("div", { children: [_jsx("label", { children: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 (URL):" }), _jsx("input", { type: "text", name: "image", value: editedProduct.image, onChange: handleChange })] })] }), _jsxs("div", { className: "modal-actions", children: [_jsx("button", { onClick: handleSave, className: "save-btn", children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" }), _jsx("button", { onClick: onClose, className: "cancel-btn", children: "\u041E\u0442\u043C\u0435\u043D\u0430" })] })] }) }));
};
export default EditProductModal;
