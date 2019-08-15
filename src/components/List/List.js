import React from 'react';

import Card from '../Card/Card';

import styles from './List.module.css';

const list = (props) => {
    const check = () => {
        const regex = [/^#|0x/i, /^hsl/i, /^hsv/i, /^rgb/i, /,+/i, /^[A-Z]+$/i];
        const models = ['hex', 'hsl', 'hsv', 'rgb', 'rgb', 'x11'];
        for (let i in regex)
            if (regex[i].test(props.current))
                return models[i];
        return null;
    };
    const model = check();
    const cards = Object.keys(props.data).filter(m => {
        return m !== model && m !== 'value';
    }).map(m => {
        return <Card
                    color={props.color}
                    data={props.data[m]}
                    key={m}
                    title={m === 'x11' ? 'nearest x11' : m}/>
    });
    return (
        <div className={styles.List}>
            <div>
                {cards}
            </div>
        </div>
    );
};

export default list;