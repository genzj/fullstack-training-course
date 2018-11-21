import React, {Component} from 'react';
import './App.css';
import rootReducer from './reducer';
import Counter from "./components/counter";
import {applyMiddleware, createStore, compose} from "redux";
import {connect, Provider} from "react-redux";
import {resetValue, submitValueAsync} from "./action";
import thunk from "redux-thunk";

class _Content extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.reset = this.reset.bind(this);

    }

    submit() {
        // alert(`submit value: ${this.props.value}`);
        this.props.dispatch(submitValueAsync());
    }

    reset() {
        this.props.dispatch(resetValue());
    }

    render() {
        return (
            <div className="App">
                <Counter />
                <button onClick={this.submit}>submit</button>
                <button onClick={this.reset}>reset</button>
                <div>
                    <pre>
                        {this.props.log}
                    </pre>
                </div>
            </div>
        );
    }
}

const Content = connect(state => ({
    value: state.value.value,
    log: state.log.log,
}))(_Content);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTESION_COMPOSE__ || compose
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(
        thunk
    ))
);

class App extends Component {
    render() {
        return <Provider store={store}><Content /></Provider>;
    }
}

export default App;
