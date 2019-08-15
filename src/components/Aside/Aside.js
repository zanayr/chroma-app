import React from 'react';

import AddButton from '../AddButton/AddButton';
import HistoryButton from '../HistoryButton/HistoryButton';

import styles from './Aside.module.css';

const aside = (props) => {
    const history = props.data.map((value, i) => {
        return <HistoryButton
                    active={props.active}
                    color={props.color}
                    data={value}
                    key={i}
                    onClick={props.onHistory}/>
    });
    return (
        <aside className={styles.Aside}>
            <div>
                {history}
                <AddButton
                    color={props.color}
                    onClick={props.onAdd}/>
            </div>
        </aside>
    );
};

export default aside;