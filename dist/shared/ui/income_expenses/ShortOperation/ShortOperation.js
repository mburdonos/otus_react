import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './ShortOperation.module.css';
;
const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        text = text.substring(0, maxLength);
        text += '...';
    }
    return text;
};
const ShortOperation = ({ sumOperation = 0, category = 'base category', description, lengthDescription = 30, }) => {
    return (_jsx("div", { className: styles.content, children: _jsxs("table", { children: [_jsxs("tr", { children: [_jsx("td", { className: styles.column_title, children: "sum_operation: " }), _jsx("td", { children: sumOperation })] }), _jsxs("tr", { children: [_jsx("td", { className: styles.column_title, children: "category: " }), _jsx("td", { children: category })] }), description ? _jsxs("tr", { children: [_jsx("td", { className: styles.column_title, children: "description: " }), _jsx("td", { children: truncateText(description, lengthDescription) })] }) : null] }) }));
};
export default ShortOperation;
