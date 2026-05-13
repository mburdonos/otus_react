import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ProductEditForm = ({ product, onChange, onSave, onCancel }) => {
    if (!product)
        return null;
    const handleChange = (field, value) => {
        onChange(field, value);
    };
    return (_jsxs("div", { className: "product-edit-form", children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "edit-title", children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:" }), _jsx("input", { id: "edit-title", type: "text", value: product.title, onChange: (e) => handleChange('title', e.target.value) })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "edit-price", children: "\u0426\u0435\u043D\u0430:" }), _jsx("input", { id: "edit-price", type: "number", step: "0.01", value: product.price, onChange: (e) => handleChange('price', parseFloat(e.target.value)) })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "edit-image", children: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 (URL):" }), _jsx("input", { id: "edit-image", type: "text", value: product.image, onChange: (e) => handleChange('image', e.target.value) })] }), _jsxs("div", { className: "form-actions", children: [_jsx("button", { type: "button", onClick: onSave, className: "btn-save", children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" }), _jsx("button", { type: "button", onClick: onCancel, className: "btn-cancel", children: "\u041E\u0442\u043C\u0435\u043D\u0430" })] })] }));
};
