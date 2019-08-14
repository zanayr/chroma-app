import React, {Component} from 'react';

import Card from '../Card/Card';

import styles from './List.module.css';

class List extends Component {
    render () {
        const model = this.props.model;
        const cards = Object.keys(this.props.data).filter(m => {
            return m !== model;
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