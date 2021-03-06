import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    render() {
        const {
            value, increase, decrease
        } = this.props;
        return (
            <div>
                <p>
                    Current Value: {value}
                </p>
                <button onClick={increase}>+1</button>
                <button onClick={decrease}>-1</button>
            </div>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired,
};


export default Counter;