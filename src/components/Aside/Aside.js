import React from 'react';

import AddButton from '../AddButton/AddButton';
import HistoryButton from '../HistoryButton/HistoryButton';

import styles from './Aside.module.css';

const aside = (props) => {
    const history = props.data.map((value, i) => {
        return <HistoryButton
                    current={props.current}
                    color={props.color}
                    data={value}
                    key={i}
                    onClick={props.onHistory}
                    onDelete={props.onDelete}/>
    });
    return (
        <aside className={styles.Aside}>
            <div>
                {history}
                <AddButton
                    color={props.color}
                    onClick={props.onAdd}>+</AddButton>
            </div>
        </aside>
    );
};

export default aside;