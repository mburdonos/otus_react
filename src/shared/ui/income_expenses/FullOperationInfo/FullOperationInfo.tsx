import React from 'react';
import styles from './FullOperationInfo.module.css';

interface FullOperationInfoProps {
    sumOperation: number,
    category: string,
    dateTime: Date,
    description?: string,
    countGoods?: number
};

const FullOperationInfo: React.FC<FullOperationInfoProps> = ({
    sumOperation = 0,
    category = 'base category',
    dateTime = new Date('2026-01-01'),
    ...restProps
}) => {
    const otherFields = Object.entries(restProps)
    return (
    <div className={styles.content}>
        <table>
            <tr>
                <td className={styles.column_title}>sum_operation: </td>
                <td>{sumOperation}</td>
            </tr>
                        <tr>
                <td className={styles.column_title}>category: </td>
                <td>{category}</td>
            </tr>
            <tr>
                <td className={styles.column_title}>date: </td>
                <td>{dateTime.toLocaleDateString('ru-RU')} {dateTime.toLocaleTimeString('ru-RU')}</td>
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