import { User } from '../types';

export function userReducer(state = null, action): User {
    if (action.type === 'SET_USER') return action.user;
    if (action.type === 'LOG_OUT') return null;
    return state;
}

export function loadingReducer(state = true, action) {
    if (action.type === 'LOADED') return false;
    return state;
}
