import React, {Component} from 'react';
import './App.css';
import Counter from "./components/counter";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.increase = () => this.update(1);
        this.decrease = () => this.update(-1);
        this.submit = this.submit.bind(this);
    }

    update(delta) {
        this.setState((state) => ({
            value: state.value + delta
        }));
    }

    submit() {
        alert(`submit value: ${this.state.value}`);
    }

    render() {
        return (
            <div className="App">
                <Counter value={this.state.value} decrease={this.decrease} increase={this.increase}/>
                <button onClick={this.submit}>submit</button>
            </div>
        );
    }
}

export default App;
