export const UPDATE_VALUE = 'UPDATE_VALUE';
export const updateValue = (delta) => ({
    type: UPDATE_VALUE,
    delta,
});

export const RESET_VALUE = 'RESET_VALUE';
export const resetValue = () => ({
    type: RESET_VALUE,
});

export const SET_LOG = 'SET_LOG';
export const setLog = (log) => ({
    type: SET_LOG,
    log
});

export const submitValueAsync = () => (dispatch, getState) => {
    setTimeout(() => {
        fetch(
            'https://httpbin.org/post',
            {
                method: 'POST',
                body: JSON.stringify(getState().value)
            }
        ).then(
            (response) => {
                dispatch(resetValue());
                return response.json();
            }
        ).then(
            (responseJson) => dispatch(setLog(responseJson.data))
        );
    }, 1000);
};
