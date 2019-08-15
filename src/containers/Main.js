import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import chroma from '../chroma-1.1.0';

import Aside from '../components/Aside/Aside';
import Drop from '../components/Drop/Drop';
import Field from '../components/Field/Field';
import List from '../components/List/List';

import styles from './Main.module.css';

class Main extends Component {
    state = {
        newColor: false,
        color: '#242424',
        data: {},
        last: '',
        history: [
            'rgb(75, 105, 245)',
            'hsl(45, 100%, 50%)',
            'pink',
        ],
        value: ''
    };
    componentDidMount () {

    }
    depopulate () {
        this.setState({newColor: false});
        this.setState({color: '#242424'});
        this.setState({data: {}});
    }
    populate (value) {
        const color = chroma(value);
        this.setState(prev => ({
            ...prev,
            last: this.state.data.value
        }));
        this.setState({newColor: true});
        this.setState({color: color.contrast(this.state.color) < 4.5 ? (this.state.color === '#f8f8f8'? '#242424' : '#f8f8f8') : this.state.color});
        this.setState({data: {
            value: value.replace(/;/, ''),
            hex: color.to('hex'),
            hsl: color.to('hsl'),
            hsv: color.to('hsv'),
            rgb: color.to('rgb'),
            x11: color.to('x11')
        }});
    }
    store (value) {
        this.setState({history: this.state.history.length + 1 < 19 ? [value].concat(this.state.history) : [value].concat(this.state.history.slice(0, this.state.history.length - 1))});
    }
    update (value) {
        this.setState({value: value});
    }
    //  Events
    onAdd = () => {
        if (this.state.data.value)
            this.store(this.state.data.value);
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
        if (data !== this.state.data.value) {
            this.populate(data);
            this.setState({value: data});
        }
    };
    onDropEntered = (event) => {
        if (event.propertyName === 'left') {
            this.setState({newColor: false});
        }
    };
    render () {
        const x = Math.round((Math.random() * (window.innerWidth - 200)) + 100);
        const y = Math.round((Math.random() * (window.innerHeight - 200)) + 100);
        return (
            <main
                className={styles.Main + ' ' + (this.state.color === '#f8f8f8' ? styles.DarkSelection : styles.LightSelections)}
                style={{backgroundColor: this.state.newColor ? this.state.last : this.state.data.value}}>
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
                                color={this.state.color}
                                data={this.state.data}/>
                        </div>
                    </div>
                    <Aside
                        active={this.state.newColor}
                        current={this.state.data.value}
                        color={this.state.color}
                        data={this.state.history}
                        onAdd={this.onAdd}
                        onHistory={this.onHistory}/>
                    <Transition
                        in={this.state.newColor}
                        addEndListener = {node => {
                            node.addEventListener('transitionend', (e) => this.onDropEntered(e), false);
                        }}
                        mountOnEnter
                        unmountOnExit
                        timeout={0}>
                            {state => (<Drop
                                color={this.state.data.value}
                                max={(window.innerWidth < window.innerHeight ? window.innerHeight : window.innerWidth) * 2}
                                state={state}
                                x={x}
                                y={y}/>)}
                    </Transition>
                </div>
            </main>
        );
    }
};

export default Main;