import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './FullOperationInfo.module.css';
;
const FullOperationInfo = ({ sumOperation = 0, category = 'base category', dateTime = new Date('2026-01-01'), ...restProps }) => {
    const otherFields = Object.entries(restProps);
    return (_jsxs("div", { className: styles.content, children: [_jsxs("table", { children: [_jsxs("tr", { children: [_jsx("td", { className: styles.column_title, children: "sum_operation: " }), _jsx("td", { children: sumOperation })] }), _jsxs("tr", { children: [_jsx("td", { className: styles.column_title, children: "category: " }), _jsx("td", { children: category })] }), _jsxs("tr", { children: [_jsx("td", { className: styles.column_title, children: "date: " }), _jsxs("td", { children: [dateTime.toLocaleDateString('ru-RU'), " ", dateTime.toLocaleTimeString('ru-RU')] })] }), otherFields.map(([key, value]) => (_jsxs("tr", { children: [_jsx("td", { children: key }), _jsx("td", { children: value })] }, key)))] }), _jsx("button", { className: styles.changes, children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C" })] }));
};
export default FullOperationInfo;
