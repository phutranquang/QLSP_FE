// noi day dinh nghia action (hanh dong)

// dinh nghia ten(type) hanh dong
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

// dinh nghia action
// action => no la 1 ham tra ve la 1 object
export const incrementCounter = (val) => ({
    type: INCREMENT_COUNTER,
    payload: { val }
});

export const decrementCounter = (val) => ({
    type: DECREMENT_COUNTER,
    payload: { val }
});