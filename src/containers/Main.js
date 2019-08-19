import React, {Component} from 'react';
import chroma from '../chroma-1.1.0';

import Aside from '../components/Aside/Aside';
import Aux from '../hoc/Aux/Aux';
import Column from '../hoc/Column/Column';
import Display from '../components/Display/Display';
import Drop from '../components/Drop/Drop';
import Field from '../components/Field/Field';
import List from '../components/List/List';
import Header from '../components/Header/Header';
import Toolbar from '../components/Toolbar/Toolbar';
import AlphaCard from '../components/AlphaCard/AlphaCard';

import styles from './Main.module.css';
//  ['rgb(75, 105, 245)', 'hsl(45, 100%, 50%)', 'pink']
class Main extends Component {
    state = {
        animateRandom: false,
        background: '#f8f8f8',
        color: '#f8f8f8',
        foreground: '#242424',
        isEmpty: true,
        last: '',
        reset: false,
        saved: [],
        value: '#f8f8f8',
    };

    componentDidMount () {
        // const colors = JSON.parse(localStorage.getItem('saved'));
        // console.log(JSON.parse(localStorage.getItem('saved')));
        this.setState({saved: JSON.parse(localStorage.getItem('saved'))});
    }

    //  METHODS  //
    sanitize (value) {
        return value.replace(/;/g, '').replace(/\s/g, ' ').trim();
    }
    fill (value) {
        const last = this.state.color || '#f8f8f8';
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
    clear () {
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
    remove () {
        const color = this.state.color;
        const saved = this.state.saved;
        let updated;
        if (this.state.saved.find((v) => {return v === color})) {
            updated = saved.filter(v => {return v !== color});
            this.setState({saved: updated});
            localStorage.setItem('saved', JSON.stringify(updated));
            this.clear();
            this.setState({value: ''});
        }
    }
    store (value) {
        const saved = this.state.saved.slice();
        let updated;
        if (!saved.find((v) => {return v === value})) {
            updated = saved.length + 1 < 10 ? [value].concat(saved) : [value].concat(saved.slice(0, saved.length - 1));
            this.setState({saved: updated});
            localStorage.setItem('saved', JSON.stringify(updated));
        }
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
            this.clear();
        }
    };
    onClear = () => {
        this.clear();
        this.setState({value: ''});
    };
    onRemove = () => {
        this.remove();
    };
    onEntered = (event) => {
        if (event.propertyName === 'left') {
            this.setState(prev => ({
                ...prev,
                animateRandom: false,
                reset: false
            }));
        }
    };
    onRestore = (data) => {
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
    onUndo = () => {
        const color = this.state.last;
        this.fill(color);
        this.setState({value: color});
    };
    onX11 = (data) => {
        this.fill(data);
        this.setState({value: data});
    };

    

    //  RENDER METHOD  //
    render () {
        console.log(!this.state.last, !this.state.color);
        const x = Math.round((Math.random() * (window.innerWidth - 200)) + 100);
        const y = Math.round((Math.random() * (window.innerHeight - 200)) + 100);
        let list = null;
        if (this.state.color)
            list = (<List
                    foreground={this.state.foreground}
                    onClick={this.onX11}
                    value={this.state.color}/>);
        document.documentElement.style.backgroundColor = chroma(this.state.background).to('rgb');
        console.log(this.state.saved);
        return (
            <Aux>
                <Header foreground={this.state.foreground}/>
                <main className={styles.Main}>
                    <div style={{backgroundColor: this.state.reset ? this.state.last : this.state.background}}>
                        <Toolbar
                            actions={{
                                random: this.onRandom,
                                clear: this.onClear,
                                undo: this.onUndo
                            }}
                            state={{
                                clear: this.state.color,
                                random: this.state.animateRandom,
                                undo: this.state.last
                            }}
                            foreground={this.state.foreground}/>
                        <Column className={styles.Content}>
                            <Column className={styles.Section}>
                                <Display foreground={this.state.foreground}/>
                            </Column>
                            <Column className={styles.Section}>
                                <Field
                                        foreground={this.state.foreground}
                                        onChange={this.onChange}
                                        value={this.state.value}/>
                            </Column>
                            <Column className={styles.Section}>
                                {list}
                            </Column>
                        </Column>
                        <Aside
                            actions={{
                                add: this.onAdd,
                                remove: this.onRemove,
                                restore: this.onRestore
                            }}
                            color={this.state.color}
                            foreground={this.state.foreground}
                            data={this.state.saved}/>
                        <Drop
                            color={this.state.background}
                            max={(window.innerWidth < window.innerHeight ? window.innerHeight : window.innerWidth) * 2}
                            onTransitionEnd={(e) => this.onEntered(e)}
                            position={{x: x, y: y}}
                            state={this.state.reset}/>
                    </div>
                    <AlphaCard foreground={this.state.foreground}/>
                </main>
            </Aux>
        );
    }
};

export default Main;