import React from 'react';

import AddButton from '../AddButton/AddButton';
import HistoryButton from '../HistoryButton/HistoryButton';

import styles from './Aside.module.css';

const aside = (props) => {
    let state = 0;
    const onActionClick = () => {
        if (state)
            return props.actions.remove();
        return props.actions.add();
    }
    const dots = props.data.map((value, i) => {
        if (!state && props.color === value)
            state = 1;
        return <HistoryButton
                    color={props.color}
                    foreground={props.foreground}
                    data={value}
                    key={i}
                    onClick={props.actions.restore}/>
    });
    return (
        <aside className={styles.Aside}>
            <div>
                {dots}
                <AddButton
                    foreground={props.foreground}
                    state={state}
                    onClick={onActionClick}/>
            </div>
        </aside>
    );
};

export default aside;