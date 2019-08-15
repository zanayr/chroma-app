import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import chroma from '../chroma-1.1.0';

import AddButton from '../components/AddButton/AddButton';
import Aside from '../components/Aside/Aside';
import Drop from '../components/Drop/Drop';
import Field from '../components/Field/Field';
import List from '../components/List/List';

import styles from './Main.module.css';

class Main extends Component {
    state = {
        color: '#242424',
        current: '#f8f8f8',
        data: {},
        isActive: false,
        last: '',
        history: [
            'rgb(75, 105, 245)',
            'hsl(45, 100%, 50%)',
            'pink',
        ],
        value: ''
    };

    //  METHODS  //
    depopulate () {
        this.setState({color: '#242424'});
        this.setState({data: {}});
        this.setState({isActive: true});
    }
    populate (color) {
        this.setState({color: this.toggle(color.contrast(this.state.color) > 4.5)});
        this.setState({data: {
                hex: color.to('hex'),
                hsl: color.to('hsl'),
                hsv: color.to('hsv'),
                rgb: color.to('rgb'),
                x11: color.to('x11')
        }});
        this.setState({isActive: true});
    }
    prepare (value) {
        this.setState({last: this.state.current});
        this.setState({current: value});
    }
    remove (value) {
        if (this.state.history.find((v) => {return v === value})) {
            this.setState({history: this.state.history.filter(c => {return c !== value})});
            this.prepare('#f8f8f8');
            this.depopulate();
            this.setState({value: ''});
        }
    }
    store (value) {
        if (!this.state.history.find((v) => {return v === value}))
            this.setState({history: this.state.history.length + 1 < 10 ? [value].concat(this.state.history) : [value].concat(this.state.history.slice(0, this.state.history.length - 1))});
    }
    toggle (bool) {
        return bool ? this.state.color : (this.state.color === '#f8f8f8' ? '#242424' : '#f8f8f8');
    }
    update (value) {
        this.setState({value: value});
    }

    //  EVENT HANDLERS  //
    onAdd = () => {
        if (this.state.current)
            this.store(this.state.current);
    };
    onChange = (value) => {
        this.update(value);
        if (chroma.validate(value)) {
            this.prepare(value);
            this.populate(chroma(value));
        } else if (this.state.current !== '#f8f8f8') {
            this.prepare('#f8f8f8');
            this.depopulate();
        }
    };
    onDelete = (data) => {
        this.remove(data);
    }
    onEntered = (event) => {
        if (event.propertyName === 'left')
            this.setState({isActive: false});
    };
    onHistory = (data) => {
        if (data !== this.state.current) {
            this.prepare(data);
            this.populate(chroma(data));
            this.setState({value: data});
        }
    };
    onRandom = () => {
        const color = chroma([Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)]);
        const value = color.to('hex');
        this.prepare(value);
        this.populate(color);
        this.setState({value: value});
    };

    //  RENDER METHOD  //
    render () {
        const x = Math.round((Math.random() * (window.innerWidth - 200)) + 100);
        const y = Math.round((Math.random() * (window.innerHeight - 200)) + 100);
        return (
            <main
                className={styles.Main}
                style={{backgroundColor: this.state.isActive ? this.state.last : this.state.current}}>
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
                                current={this.state.current}
                                data={this.state.data}/>
                        </div>
                    </div>
                    <AddButton
                        className={styles.Random}
                        color={this.state.color}
                        onClick={this.onRandom}>b</AddButton>
                    <Aside
                        current={this.state.current}
                        color={this.state.color}
                        data={this.state.history}
                        onAdd={this.onAdd}
                        onDelete={this.onDelete}
                        onHistory={this.onHistory}/>
                    <Transition
                        in={this.state.isActive}
                        addEndListener = {node => {
                            node.addEventListener('transitionend', (e) => this.onEntered(e), false);
                        }}
                        mountOnEnter
                        unmountOnExit
                        timeout={0}>
                            {state => (<Drop
                                color={this.state.current}
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