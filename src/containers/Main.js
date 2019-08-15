import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import chroma from '../chroma-1.1.0';

import IconButton from '../components/IconButton/IconButton';
import Aside from '../components/Aside/Aside';
import Aux from '../hoc/Aux/Aux';
import Display from '../components/Display/Display';
import Drop from '../components/Drop/Drop';
import Field from '../components/Field/Field';
import List from '../components/List/List';
import Header from '../components/Header/Header';

import styles from './Main.module.css';

class Main extends Component {
    state = {
        animateRandom: false,
        background: '#f8f8f8',
        color: '#f8f8f8',
        foreground: '#242424',
        isEmpty: true,
        last: '',
        history: [
            'rgb(75, 105, 245)',
            'hsl(45, 100%, 50%)',
            'pink',
        ],
        reset: false,
        value: '#f8f8f8'
    };

    //  METHODS  //
    sanitize (value) {
        return value.replace(/;/g, '').replace(/\s/g, ' ').trim();
    }
    fill (value) {
        const last = this.state.color;
        const color = this.sanitize(value);
        this.setState(prev => ({
            ...prev,
            background: color,
            color: color,
            foreground: this.toggle(chroma(color).contrast(this.state.foreground) > 4.5),
            isEmpty: false,
            last: last,
            reset: true
        }));
    }
    empty () {
        const last = this.state.color;
        this.setState(prev => ({
            ...prev,
            background: '#f8f8f8',
            color: '',
            foreground: '#242424',
            isEmpty: true,
            last: last,
            reset: true
        }));
    }
    remove (value) {
        if (this.state.history.find((v) => {return v === value})) {
            this.setState({history: this.state.history.filter(c => {return c !== value})});
            this.depopulate();
            this.setState({value: ''});
        }
    }
    store (value) {
        if (!this.state.history.find((v) => {return v === value}))
            this.setState({history: this.state.history.length + 1 < 10 ? [value].concat(this.state.history) : [value].concat(this.state.history.slice(0, this.state.history.length - 1))});
    }
    toggle (bool) {
        return bool ? this.state.foreground : (this.state.foreground === '#f8f8f8' ? '#242424' : '#f8f8f8');
    }
    update (value) {
        this.setState({value: value});
    }



    //  EVENT HANDLERS  //
    onAdd = () => {
        if (this.state.color)
            this.store(this.state.color);
    };
    onChange = (value) => {
        this.update(value);
        if (chroma.validate(value)) {
            this.fill(value);
        } else if (!this.state.isEmpty) {
            this.empty();
        }
    };
    onDelete = (data) => {
        this.remove(data);
    }
    onEntered = (event) => {
        if (event.propertyName === 'left')
            this.setState(prev => ({
                ...prev,
                animateRandom: false,
                reset: false
            }));
    };
    onHistory = (data) => {
        if (data !== this.state.color) {
            this.fill(data);
            this.setState({value: data});
        }
    };
    onRandom = () => {
        const color = chroma([Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)]).to('hex');
        this.fill(color);
        this.setState(prev => ({
            ...prev,
            animateRandom: true,
            value: color
        }));
    };
    onX11 = (data) => {
        this.fill(data);
        this.setState({value: data});
    };

    //  RENDER METHOD  //
    render () {
        const x = Math.round((Math.random() * (window.innerWidth - 200)) + 100);
        const y = Math.round((Math.random() * (window.innerHeight - 200)) + 100);
        let list = null;
        if (this.state.color)
            list = (<List
                    color={this.state.foreground}
                    onClick={this.onX11}
                    value={this.state.color}/>);
        return (
            <Aux>
                <Header color={this.state.foreground}/>
                <main
                    className={styles.Main}
                    style={{backgroundColor: this.state.reset ? this.state.last : this.state.background}}>
                    <div style={{color: this.state.foreground}}>
                        <div className={styles.Third}>
                            <div>
                                <Display
                                    color={this.state.foreground}/>
                            </div>
                        </div>
                        <div className={styles.Third}>
                            <div>
                                <Field
                                    color={this.state.foreground}
                                    onChange={this.onChange}
                                    value={this.state.value}/>
                            </div>
                        </div>
                        <div className={styles.Third}>
                            <div>
                                {list}
                            </div>
                        </div>
                        <IconButton
                            className={styles.Random}
                            color={this.state.foreground}
                            isAnimating={this.state.animateRandom}
                            onClick={this.onRandom}>b</IconButton>
                        <Aside
                            current={this.state.color}
                            color={this.state.foreground}
                            data={this.state.history}
                            onAdd={this.onAdd}
                            onDelete={this.onDelete}
                            onHistory={this.onHistory}/>
                        <Transition
                            in={this.state.reset}
                            addEndListener = {node => {
                                node.addEventListener('transitionend', (e) => this.onEntered(e), false);
                            }}
                            mountOnEnter
                            unmountOnExit
                            timeout={0}>
                                {state => (<Drop
                                    color={this.state.background}
                                    max={(window.innerWidth < window.innerHeight ? window.innerHeight : window.innerWidth) * 2}
                                    state={state}
                                    x={x}
                                    y={y}/>)}
                        </Transition>
                    </div>
                </main>
            </Aux>
        );
    }
};

export default Main;