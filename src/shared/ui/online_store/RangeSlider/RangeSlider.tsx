import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import styles from './RangeSlider.module.css';

interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: [number, number];
  onChange?: (values: [number, number]) => void;
}

export const RangeSlider = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = [min, max],
  onChange,
}: RangeSliderProps) => {
  const [values, setValues] = useState<[number, number]>(defaultValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const newValues = [...values] as [number, number];
    newValues[index] = Number(e.target.value);
    setValues(newValues);
    if (onChange) onChange(newValues);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.rangeDisplay}>
        <span>{values[0]}</span>
        <span>—</span>
        <span>{values[1]}</span>
      </div>
      <div className={styles.sliders}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={values[0]}
          onChange={(e) => handleChange(e, 0)}
          className={styles.slider}
          style={{ '--percent': ((values[0] - min) / (max - min)) * 100 } as React.CSSProperties}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={values[1]}
          onChange={(e) => handleChange(e, 1)}
          className={styles.slider}
          style={{ '--percent': ((values[1] - min) / (max - min)) * 100 } as React.CSSProperties}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
