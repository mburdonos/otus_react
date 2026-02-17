import React from 'react';
import styles from './FullOperationInfo.module.css';

interface FullOperationInfoProps {
    sum_operation: number,
    category: string,
    date_time: Date,
    description?: string,
    countGoods?: number
};

const FullOperationInfo: React.FC<FullOperationInfoProps> = ({
    sum_operation = 0,
    category = 'base category',
    date_time = new Date('2026-01-01'),
    ...restProps
}) => {
    const otherFields = Object.entries(restProps)
    return (
    <div className={styles.content}>
        <table>
            <tr>
                <td className={styles.column_title}>sum_operation: </td>
                <td>{sum_operation}</td>
            </tr>
                        <tr>
                <td className={styles.column_title}>category: </td>
                <td>{category}</td>
            </tr>
            <tr>
                <td className={styles.column_title}>date: </td>
                <td>{date_time.toLocaleDateString('ru-RU')} {date_time.toLocaleTimeString('ru-RU')}</td>
            </tr>
            {otherFields.map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
        </table>
        <button className={styles.changes}>Редактировать</button>
    </div>
    );
};

export default FullOperationInfo;