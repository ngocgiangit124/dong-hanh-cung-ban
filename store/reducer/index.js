// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immer';
import produce from 'immer';
import login from '../reducer/login'

const appReducers = combineReducers(produce, {
    login,

});

export default appReducers;