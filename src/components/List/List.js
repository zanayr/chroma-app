import React, {Component} from 'react';

import Card from '../Card/Card';

import styles from './List.module.css';

// setModel = (value) => {
    //     const regex = [
    //         /^#|0x/i,
    //         /^hsl/i,
    //         /^hsv/i,
    //         /^rgb/i,
    //         /^[A-Z]+$/i
    //     ];
    //     regex.forEach((rx, i) => {
    //         if (rx.test(value)) {
    //             this.setState(prev => ({
    //                 ...prev,
    //                 model: models[i]
    //             }));
    //         }
    //     });
    // }

class List extends Component {
    check () {
        const regex = [/^#|0x/i, /^hsl/i, /^hsv/i, /^rgb/i, /^[A-Z]+$/i];
        const models = ['hex', 'hsl', 'hsv', 'rgb', 'x11'];
        for (let i in regex)
            if (regex[i].test(this.props.model))
                return models[i];
        return null;
    }
    render () {
        const model = this.check();
        const cards = Object.keys(this.props.data).filter(m => {
            return m !== model && m !== 'value';
        }).map(m => {
            return <Card
                        data={this.props.data[m]}
                        key={m}
                        title={m}/>
        });
        return (
            <div className={styles.List}>
                <div>
                    {cards}
                </div>
            </div>
        )
    }
}

export default List;