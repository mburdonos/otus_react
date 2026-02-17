import React from 'react';
import styles from './ShortOperation.module.css';

interface ShortOperationProps {
    sumOperation: number,
    category: string,
    size: 'small' | 'big',
    description?: string,
    lengthDescription?: number,
};


const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength){
        text = text.substring(0, maxLength);
        text += '...';
    }

  return  text ;
};

const ShortOperation: React.FC<ShortOperationProps> = ({
    sumOperation = 0,
    category = 'base category',
    description,
    lengthDescription = 30,
}) => {
    return (
    <div className={styles.content}>
        {/* <div className={`${styles.content} ${styles.size}`}></div> */}
        <table>
            <tr>
                <td className={styles.column_title}>sum_operation: </td>
                <td>{sumOperation}</td>
            </tr>
                        <tr>
                <td className={styles.column_title}>category: </td>
                <td>{category}</td>
            </tr>
            {description ? <tr>
                <td className={styles.column_title}>description: </td>
                <td>{truncateText(description, lengthDescription)}</td>
            </tr> : null}
        </table>
    </div>
    );
};

export default ShortOperation;