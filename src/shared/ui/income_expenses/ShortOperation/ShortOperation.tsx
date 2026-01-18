import React from 'react';
import styles from './ShortOperation.module.css';

interface ShortOperationProps {
    sum_operation: number,
    category: string,
    description: string,
    size: 'small' | 'big',
    length_description: number,
};


const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength){
        text = text.substring(0, maxLength);
        text += '...';
    }

  return  text ;
};

const ShortOperation: React.FC<ShortOperationProps> = ({
    sum_operation = 0,
    category = 'base category',
    description = 'base category description',
    length_description = 30,
}) => {
    return (
    <div className={styles.content}>
        {/* <div className={`${styles.content} ${styles.size}`}></div> */}
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
                <td>{truncateText(description, length_description)}</td>
            </tr>
        </table>
    </div>
    );
};

export default ShortOperation;