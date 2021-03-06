import {RESET_VALUE, SET_LOG, UPDATE_VALUE} from "./action";
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

const initialLogState = {
    log: ''
};

const log = (state = initialLogState, {type, ...args}) => {
    switch (type) {
        case SET_LOG:
            return {
                log: state.log + '\n' + new Date() + ' ' + args.log,
            };
        default:
            return state;
    }
};

export default combineReducers({
    value,
    log,
});
