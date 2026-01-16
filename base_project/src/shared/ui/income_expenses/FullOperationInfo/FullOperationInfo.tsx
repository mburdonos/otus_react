import React from 'react';
import styles from './FullOperationInfo.module.css';

interface FullOperationInfoProps {
    sum_operation: number,
    category: string,
    description: string,
    date_time: Date
};

const FullOperationInfo: React.FC<FullOperationInfoProps> = ({
    sum_operation = 0,
    category = 'base category',
    description = 'base category description',
    date_time = new Date('2026-01-01'),
}) => {
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
                <td className={styles.column_title}>description: </td>
                <td>{description}</td>
            </tr>
            <tr>
                <td className={styles.column_title}>date: </td>
                <td>{date_time.toLocaleDateString('ru-RU')} {date_time.toLocaleTimeString('ru-RU')}</td>
            </tr>
        </table>
        <button className={styles.changes}>Редактировать</button>
    </div>
    );
};

export default FullOperationInfo;