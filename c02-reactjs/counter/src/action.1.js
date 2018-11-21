export const UPDATE_VALUE = 'UPDATE_VALUE';
export const updateValue = (delta) => ({
    type: UPDATE_VALUE,
    delta,
});

export const RESET_VALUE = 'RESET_VALUE';
export const resetValue = () => ({
    type: RESET_VALUE,
});
