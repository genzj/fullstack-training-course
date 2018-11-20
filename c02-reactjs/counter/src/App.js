import React, {Component} from 'react';
import './App.css';
import rootReducer from './reducer';
import Counter from "./components/counter";
import {createStore} from "redux";
import {connect, Provider} from "react-redux";
import {resetValue} from "./action";

class _Content extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.reset = this.reset.bind(this);

    }

    submit() {
        alert(`submit value: ${this.props.value}`);
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
            </div>
        );
    }
}

const Content = connect(state => ({
    value: state.value.value,
}))(_Content);

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
    render() {
        return <Provider store={store}><Content /></Provider>;
    }
}

export default App;
