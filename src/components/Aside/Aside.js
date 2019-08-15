import React from 'react';

import AddButton from '../AddButton/AddButton';
import HistoryButton from '../HistoryButton/HistoryButton';

import styles from './Aside.module.css';

const aside = (props) => {
    let remove = false;
    const history = props.data.map((value, i) => {
        if (!remove && props.color === value)
            remove = true;
        return <HistoryButton
                    color={props.color}
                    foreground={props.foreground}
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
                    foreground={props.foreground}
                    isRemove={remove}
                    onAdd={props.actions.add}
                    onRemove={props.actions.remove}/>
            </div>
        </aside>
    );
};

export default aside;