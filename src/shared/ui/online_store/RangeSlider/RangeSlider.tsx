import React, { useState } from 'react';
import styles from './RangeSlider.module.css';

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
}) => {
  const [lowValue, setLowValue] = useState(min);
  const [highValue, setHighValue] = useState(max);

  const handleLowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (newValue < highValue){
      setLowValue(newValue);
    }
  };

  const handleHighChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (newValue > lowValue){
      setHighValue(newValue);
    }
  };

  return (
    <>
    <div className={styles.content}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={lowValue}
        onChange={handleLowChange}
        className={styles.rangeInput}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={highValue}
        onChange={handleHighChange}
        className={styles.rangeInput}
      />
      <div className={styles.track}>
          <div className={styles.fill}
          style={{
            left: `${((lowValue-min)/(max-min))*100}%`,
            width: `${((highValue - lowValue)/(max-min))*100}%`
          }}></div>
      </div>
       <div className={styles.range_values}>
            <span>{lowValue}</span>
            <span>{highValue}</span>
          </div>
    </div>
    </>
    
  );
};

export default RangeSlider;
