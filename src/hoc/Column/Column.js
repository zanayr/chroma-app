import React from 'react';

import styles from './Column.module.css';

const column = (props) => {
    const style = [styles.Column];
    if (props.className)
        style.push(props.className);
    return (
        <div className={style.join(' ')}>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default column;