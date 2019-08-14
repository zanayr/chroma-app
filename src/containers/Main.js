import React, {Component} from 'react';
import chroma from '../chroma-1.1.0';

import Aside from '../components/Aside/Aside';
import Color from '../components/Color/Color';
import Field from '../components/Field/Field';
import List from '../components/List/List';

import styles from './Main.module.css';

class Main extends Component {
    state = {
        color: '#242424',
        contrast: 0,
        data: {},
        history: [],
        value: ''
    };
    componentDidMount () {

    }
    depopulate () {
        this.setState({color: '#242424'});
        this.setState({data: {}});
    }
    populate (value) {
        const color = chroma(value);
        this.setState({color: color.contrast(this.state.color) < 4.5 ? (this.state.color === '#f8f8f8'? '#242424' : '#f8f8f8') : this.state.color});
        this.setState({data: {
            value: value,
            hex: color.to('hex'),
            hsl: color.to('hsl'),
            hsv: color.to('hsv'),
            rgb: color.to('rgb'),
            x11: color.to('x11')
        }});
    }
    restore (data) {
        this.setState({color: chroma(data.value).contrast(this.state.color) < 4.5 ? (this.state.color === '#f8f8f8'? '#242424' : '#f8f8f8') : this.state.color});
        this.setState({data: data});
        this.setState({value: data.value});
    }
    store (data) {
        if (!this.state.history.find(h => {return h.value === data.value;}))
            this.setState({history: this.state.history.length + 1 < 19 ? [data].concat(this.state.history) : [data].concat(this.state.history.slice(0, this.state.history.length - 1))});
    }
    update (value) {
        this.setState({value: value});
    }
    //  Events
    onAdd = () => {
        if (this.state.data.value)
            this.store(this.state.data);
    };
    onChange = (value) => {
        this.update(value);
        if (chroma.validate(value)) {
            this.populate(value);
        } else {
            this.depopulate();
        }
    };
    onHistory = (data) => {
        if (data.value !== this.state.data.value)
            this.restore(data);
    };
    render () {
        return (
            <main
                className={styles.Main}
                style={{backgroundColor: this.state.data.value}}>
                <div style={{color: this.state.color}}>
                    <div className={styles.Top}>
                        <div>
                            <Field
                                color={this.state.color}
                                onChange={this.onChange}
                                value={this.state.value}/>
                        </div>
                    </div>
                    <div className={styles.Bottom}>
                        <div>
                            <List
                                data={this.state.data}
                                model={this.state.data.value}/>
                        </div>
                    </div>
                    <Aside
                        active={this.state.data.value}
                        color={this.state.color}
                        data={this.state.history}
                        onAdd={this.onAdd}
                        onHistory={this.onHistory}/>
                    {/* <Color
                        color={this.state.primary}/> */}
                </div>
            </main>
        );
    }
};

export default Main;