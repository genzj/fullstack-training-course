import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p>
                    Current Value: 0
                </p>
                <button>+1</button>
                <button>-1</button>
                <button>submit</button>
            </div>
        );
    }
}

export default App;
