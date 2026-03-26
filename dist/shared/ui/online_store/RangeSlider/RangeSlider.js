import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './RangeSlider.module.css';
export const RangeSlider = ({ min = 0, max = 100, step = 1, }) => {
    const [lowValue, setLowValue] = useState(min);
    const [highValue, setHighValue] = useState(max);
    const handleLowChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        if (newValue < highValue) {
            setLowValue(newValue);
        }
    };
    const handleHighChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        if (newValue > lowValue) {
            setHighValue(newValue);
        }
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: styles.content, children: [_jsx("input", { type: "range", min: min, max: max, step: step, value: lowValue, onChange: handleLowChange, className: styles.rangeInput }), _jsx("input", { type: "range", min: min, max: max, step: step, value: highValue, onChange: handleHighChange, className: styles.rangeInput }), _jsx("div", { className: styles.track, children: _jsx("div", { className: styles.fill, style: {
                            left: `${((lowValue - min) / (max - min)) * 100}%`,
                            width: `${((highValue - lowValue) / (max - min)) * 100}%`
                        } }) }), _jsxs("div", { className: styles.range_values, children: [_jsx("span", { children: lowValue }), _jsx("span", { children: highValue })] })] }) }));
};
export default RangeSlider;
