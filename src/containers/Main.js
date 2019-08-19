import React, {Component} from 'react';
import chroma from '../chroma/chroma-1.1.0';
import * as database from '../database/database';

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

class Main extends Component {
    state = {
        animateRandom: false,
        background: '#f8f8f8',
        color: '#f8f8f8',
        foreground: '#f8f8f8',
        isEmpty: true,
        last: '',
        reset: false,
        saved: [],
        value: '#f8f8f8',
    };

    //  Component Did Update  //
    componentDidMount () {
        const saved = database.get('saved');
        this.fill(saved.length ? saved[0] : '#f8f8f8');
        this.setState(prev => ({
            ...prev,
            saved: saved,
            value: saved.length ? saved[0] : '#f8f8f8'
        }));
    }

    //  METHODS  //
    sanitize (value) {
        //  Sanitize cleans up a passed string value, removing all semicolons and extra
        //  white-space.
        return value.replace(/;/g, '').replace(/\s/g, ' ').trim();
    }
    fill (value) {
        //  Fill saves the current color as the last color and sets a passed color
        //  value as the new color, updating the state.
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
        //  Clear saves the current color as the last color and sets the current color
        //  to `#f8f8f8`.
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
        //  Remove deletes a color from the saved list in the state and local storage.
        const color = this.state.color;
        const saved = this.state.saved;
        let index;
        let next;
        let updated;
        //  Check if the color exists in the saved array
        if (this.state.saved.find((v) => {return v === color})) {
            index = saved.indexOf(color);
            updated = saved.filter((v) => {return v !== color});
            next = updated[index - 1] ? updated[index - 1] : updated[index];
            this.setState({saved: updated});
            database.set('saved', updated);
            //  Update background color and value
            if (next) {
                this.fill(next);
                this.setState({value: next});
            } else {
                this.clear();
                this.setState({value: ''});
            }
        }
    }
    store (value) {
        //  Store saves a value into the saved array and local storage.
        const saved = this.state.saved.slice();
        let updated;
        if (!saved.find((v) => {return v === value})) {
            updated = saved.length + 1 < 10 ? [value].concat(saved) : [value].concat(saved.slice(0, saved.length - 1));
            this.setState({saved: updated});
            database.set('saved', updated);
        }
    }
    toggle (bool) {
        //  Toggle switches the foreground color between black and white depending on
        //  the bool passed to the method.
        return bool ? this.state.foreground : (this.state.foreground === '#f8f8f8' ? '#242424' : '#f8f8f8');
    }
    update (value) {
        //  Update updates the value of the field.
        this.setState({value: value});
    }



    //  EVENT HANDLERS  //
    onAdd = () => {
        //  Handle the add button being clicked
        if (this.state.color)
            this.store(this.state.color);
    };
    onChange = (value) => {
        //  Handle the field's value being changed
        this.update(value);
        if (chroma.validate(value)) {
            this.fill(value);
        } else if (!this.state.isEmpty) {
            this.clear();
        }
    };
    onClear = () => {
        //  Handle the clear button being clicked
        this.clear();
        this.setState({value: ''});
    };
    onRemove = () => {
        //  Handle the remove button being clicked
        this.remove();
    };
    onTransitionEnd = (event) => {
        //  Handle the color drop animation ending
        if (event.propertyName === 'left') {
            this.setState(prev => ({
                ...prev,
                animateRandom: false,
                reset: false
            }));
        }
    };
    onRestore = (data) => {
        //  Handle on a dot being clicked
        if (data !== this.state.color) {
            this.fill(data);
            this.setState({value: data});
        }
    };
    onRandom = () => {
        //  Handle on the random button being clicked
        const color = chroma([Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)]).to('hex');
        this.fill(color);
        this.setState(prev => ({
            ...prev,
            animateRandom: true,
            value: color
        }));
    };
    onUndo = () => {
        //  Handle on the undo button being clicked
        const color = this.state.last;
        this.fill(color);
        this.setState({value: color});
    };
    onX11 = (data) => {
        //  Handle the x11 card being clicked
        this.fill(data);
        this.setState({value: data});
    };

    

    //  RENDER METHOD  //
    render () {
        //  Set dot position
        const x = Math.round((Math.random() * (window.innerWidth - 200)) + 100);
        const y = Math.round((Math.random() * (window.innerHeight - 200)) + 100);
        let list = null;
        //  If no color exists, don't render the cards
        if (this.state.color)
            list = (<List
                    foreground={this.state.foreground}
                    onClick={this.onX11}
                    value={this.state.color}/>);
        // Set the background of the html tag
        document.documentElement.style.backgroundColor = chroma(this.state.background).to('rgb');
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
                            onTransitionEnd={(e) => this.onTransitionEnd(e)}
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