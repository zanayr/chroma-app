import React from 'react';

import ActionButton from '../ActionButton/ActionButton';
import Dot from '../Dot/Dot';

import styles from './Aside.module.css';


const aside = (props) => {
    let state = 0;
    const onAction= () => {
        if (state)
            return props.actions.remove();
        return props.actions.add();
    }
    const dots = props.data.map((value, i) => {
        if (!state && props.color === value)
            state = 1;
        return <Dot
                    background={props.color}
                    color={value}
                    foreground={props.foreground}
                    key={i}
                    onClick={() => props.actions.restore(value)}/>
    });
    return (
        <aside className={styles.Aside}>
            <div>
                {dots}
                <ActionButton
                    altStyle={styles.Tilt}
                    foreground={props.foreground}
                    state={state}
                    onClick={onAction}>
                    a
                </ActionButton>
            </div>
        </aside>
    );
};

export default aside;