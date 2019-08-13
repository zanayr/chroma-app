import React, {Component} from 'react';

import Field from '../components/Field';

import styles from './Main.module.css';

class Main extends Component {
    state = {
        color: '#ffffff'
    };
    componentDidMount () {

    }
    /*
    foo () {
        this.setState(prev => ({
            ...prev,
            bar: {
                ...prev.bar,
                fizz: {},
                buzz: {}
            }
        }));
    }
    */

    render () {
        return (
            <main className="Main">
                <div>
                    <Field/>
                </div>
            </main>
        );
    }
};

export default Main;