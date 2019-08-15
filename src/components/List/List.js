import React from 'react';
import chroma from '../../chroma-1.1.0';

import Card from '../Card/Card';

import styles from './List.module.css';

const list = (props) => {
    const models = ['hex', 'hexa', 'hsl', 'hsla', 'hsv', 'hsva', 'rgb', 'rgba', 'x11'];
    const regex = [/^#/, /^[a-z]+$/, /^hsl/, /^hsv/, /^rgb/];
    const color = chroma(props.value);
    let model;
    for (let r = 0; r < regex.length; r = r + 1) {
        if (regex[r].test(props.value)) {
            if (r > 1) {
                model = props.value.includes('a') ? models[r + 1] : models[r];
            } else if (r === 1) {
                model = 'x11';
            } else {
                model = props.value.length > 7 ? models[r + 1] : models[r];
            }
            break;
        }
    }
    console.log(model);
    const cards = models.filter(m => {
        console.log(m, model, m !== model);
        return m !== model;
    }).map(m => {
        if (m === 'x11') {
            return (<Card
                        color={props.color}
                        data={color.to(m)}
                        key={m}
                        onClick={props.onClick}
                        title={'nearest x11'}/>);
        } else {
            return (<Card
                        color={props.color}
                        data={color.to(m)}
                        key={m}
                        title={m}/>);
        }
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