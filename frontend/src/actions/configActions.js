export const CONFIG_SET = 'CONFIG_SET';
export const CONFIG_RESET = 'CONFIG_RESET';

export const configSet = (val) =>({
    type: CONFIG_SET,
    payload: val
});
export const configReset = () =>({
    type: CONFIG_RESET
});