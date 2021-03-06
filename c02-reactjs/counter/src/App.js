import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import rootReducer from './reducer';
import Counter from "./components/counter";
import {applyMiddleware, createStore, compose} from "redux";
import {connect, Provider} from "react-redux";
import {resetValue, submitValueAsync} from "./action";
import thunk from "redux-thunk";
import {Button, Col, Container, Row} from "reactstrap";

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
            <Container className="App">
                <h1>Counter Demo</h1>
                <Row className='justify-content-center mb-5'>
                    <Counter/>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={12} sm='auto'><Button color='primary' onClick={this.submit}>Submit</Button></Col>
                    <Col xs={12} sm='auto'><Button color='danger' onClick={this.reset}>Reset</Button></Col>
                </Row>
                <Row>
                    <code>
                        <pre>
                            {this.props.log}
                        </pre>
                    </code>
                </Row>
            </Container>
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
        return <Provider store={store}><Content/></Provider>;
    }
}

export default App;
