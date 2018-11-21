import {RESET_VALUE, UPDATE_VALUE} from "./action";
import {combineReducers} from 'redux';

const initialValueState = {
    value: 0
};

const value = (state = initialValueState, {type, ...args}) => {
    switch (type) {
        case UPDATE_VALUE:
            return {value: state.value + args.delta};
        case RESET_VALUE:
            return {value: 0};
        default:
            return state;
    }
};

export default combineReducers({
    value,
});
