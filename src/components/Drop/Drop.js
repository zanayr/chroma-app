import React from 'react';
import Transition from 'react-transition-group/Transition';

import styles from './Drop.module.css';
const drop = (props) => {
    return (
        <Transition
            in={props.state}
            addEndListener={node => node.addEventListener('transitionend', (e) => props.onTransitionEnd(e), false)}
            mountOnEnter
            unmountOnExit
            timeout={0}>
            {s => (
                <span
                    className={styles.Drop}
                    style={{
                        backgroundColor: props.color,
                        borderRadius: s === 'entering' ? 50 : props.max / 2,
                        height: s === 'entering' ? 100 : props.max,
                        left: s === 'entering' ? props.position.x : props.position.x - props.max / 2,
                        top: s === 'entering' ? props.position.y : props.position.y - props.max / 2,
                        width: s === 'entering' ? 100 : props.max,
                    }}></span>
            )}
        </Transition>
    );
};

export default drop;